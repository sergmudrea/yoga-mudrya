import org.jetbrains.kotlin.gradle.dsl.JvmTarget

plugins {
    alias(libs.plugins.android.application)
    alias(libs.plugins.kotlin.android)
    alias(libs.plugins.kotlin.compose)
}

android {
    namespace = "ru.mudrya.yoga"
    compileSdk = 36

    defaultConfig {
        applicationId = "ru.mudrya.yoga"
        minSdk = 26
        targetSdk = 36
        // versionCode растёт с каждой загрузкой в магазин; в CI его можно задать через VERSION_CODE.
        versionCode = System.getenv("VERSION_CODE")?.toIntOrNull() ?: 2
        versionName = "0.9.0"
        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
    }

    // Одна кодовая база — две сборки: Google Play и RuStore.
    flavorDimensions += "store"
    productFlavors {
        create("google") {
            dimension = "store"
            buildConfigField("String", "STORE", "\"google\"")
        }
        create("rustore") {
            dimension = "store"
            buildConfigField("String", "STORE", "\"rustore\"")
        }
    }

    // Ключ подписи приходит из секретов CI (см. docs/RELEASE.md). Без них релиз собирается неподписанным.
    val keystorePath = System.getenv("SIGNING_KEYSTORE_PATH")
    signingConfigs {
        if (keystorePath != null) {
            create("release") {
                storeFile = file(keystorePath)
                storePassword = System.getenv("SIGNING_STORE_PASSWORD")
                keyAlias = System.getenv("SIGNING_KEY_ALIAS")
                keyPassword = System.getenv("SIGNING_KEY_PASSWORD")
            }
        }
    }

    buildTypes {
        release {
            if (keystorePath != null) signingConfig = signingConfigs.getByName("release")
            isMinifyEnabled = true
            isShrinkResources = true
            proguardFiles(getDefaultProguardFile("proguard-android-optimize.txt"), "proguard-rules.pro")
        }
    }

    buildFeatures {
        compose = true
        buildConfig = true
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }

    testOptions {
        unitTests.all { it.useJUnitPlatform() }
    }
}

kotlin {
    compilerOptions { jvmTarget.set(JvmTarget.JVM_17) }
}

dependencies {
    implementation(project(":core:engine"))
    implementation(project(":core:catalog"))

    // Оплата: своя библиотека в каждой сборке.
    "googleImplementation"(libs.play.billing.ktx)
    "rustoreImplementation"(platform(libs.rustore.bom))
    "rustoreImplementation"(libs.rustore.pay)

    implementation(libs.androidx.core.ktx)
    implementation(libs.androidx.activity.compose)
    implementation(libs.androidx.lifecycle.runtime.compose)
    implementation(libs.androidx.lifecycle.viewmodel.compose)
    implementation(libs.androidx.navigation.compose)
    implementation(libs.kotlinx.coroutines.android)
    implementation(libs.media3.exoplayer)
    implementation(libs.androidx.webkit)

    implementation(platform(libs.compose.bom))
    implementation(libs.compose.ui)
    implementation(libs.compose.ui.graphics)
    implementation(libs.compose.ui.tooling.preview)
    implementation(libs.compose.material3)
    debugImplementation(libs.compose.ui.tooling)

    testImplementation(platform(libs.junit.bom))
    testImplementation(libs.junit.jupiter)
    testImplementation(kotlin("test"))
    testImplementation(libs.kotlinx.coroutines.test)
    testRuntimeOnly(libs.junit.platform.launcher)
}
