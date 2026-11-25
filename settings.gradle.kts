pluginManagement {
    repositories {
        google()
        mavenCentral()
        gradlePluginPortal()
    }
}

dependencyResolutionManagement {
    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
    repositories {
        google()
        mavenCentral()
        // SDK RuStore (оплата, отзывы, обновления) — только для сборки rustore.
        maven("https://nexus-external.rustore.ru/repository/maven-rustore-exposed") {
            content { includeGroup("ru.rustore.sdk") }
        }
    }
}

rootProject.name = "yoga-mudrya"

include(":app")
include(":core:model")
include(":core:engine")
include(":core:catalog")
