# Правила R8 для релизных сборок.
# SDK Google Play Billing и RuStore Pay приносят свои consumer-правила; здесь — только наше.

# Сохраняем имена в трассах ошибок, чтобы отчёты о сбоях читались.
-keepattributes SourceFile,LineNumberTable
-renamesourcefileattribute SourceFile

# Перечисления хранятся в файле прогресса по имени (UserStateCodec) — R8 не должен их переименовывать.
-keepclassmembers enum ru.mudrya.yoga.** {
    <fields>;
    public static **[] values();
    public static ** valueOf(java.lang.String);
}

# RuStore Pay: модели читаются SDK через рефлексию при возврате из оплаты.
-keep class ru.rustore.sdk.pay.model.** { *; }
-dontwarn ru.rustore.sdk.**
