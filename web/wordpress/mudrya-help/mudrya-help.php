<?php
/**
 * Plugin Name: Мудря — заявки на психологическую помощь
 * Description: Принимает заявки из формы «Психологическая помощь женщинам» на лендинге: сохраняет в админке (Заявки) и отправляет письмо. Настройка почты — «Настройки → Мудря заявки».
 * Version: 1.0.0
 * Author: Мудря йога
 * Requires PHP: 7.4
 */
if (!defined('ABSPATH')) exit;

add_action('init', function () {
    register_post_type('mudrya_help', [
        'labels' => ['name' => 'Заявки на помощь', 'singular_name' => 'Заявка', 'menu_name' => 'Заявки (психопомощь)'],
        'public' => false, 'show_ui' => true, 'show_in_menu' => true, 'show_in_rest' => false,
        'menu_icon' => 'dashicons-heart', 'supports' => ['title', 'editor'],
        'capability_type' => 'post', 'capabilities' => ['create_posts' => 'do_not_allow'], 'map_meta_cap' => true,
    ]);
});

function mudrya_help_back($st) {
    $ref = wp_get_referer();
    $base = ($ref && wp_validate_redirect($ref, false)) ? remove_query_arg('help', strtok($ref, '#')) : home_url('/');
    wp_safe_redirect(add_query_arg('help', $st, $base) . '#women');
    exit;
}

function mudrya_help_submit() {
    // Страница лендинга статическая (может кэшироваться), поэтому вместо nonce — ловушка для ботов, согласие и лимит по IP.
    if (!empty($_POST['website']) || empty($_POST['agree'])) mudrya_help_back('err');
    $ip = isset($_SERVER['REMOTE_ADDR']) ? sanitize_text_field(wp_unslash($_SERVER['REMOTE_ADDR'])) : '';
    $key = 'mudrya_help_' . md5($ip);
    $n = (int) get_transient($key);
    if ($n >= 3) mudrya_help_back('ok');
    set_transient($key, $n + 1, HOUR_IN_SECONDS);

    $name    = mb_substr(sanitize_text_field(wp_unslash($_POST['name'] ?? '')), 0, 80);
    $contact = mb_substr(sanitize_text_field(wp_unslash($_POST['contact'] ?? '')), 0, 120);
    $topic   = mb_substr(sanitize_text_field(wp_unslash($_POST['topic'] ?? '')), 0, 60);
    $msg     = mb_substr(sanitize_textarea_field(wp_unslash($_POST['msg'] ?? '')), 0, 1500);
    if ($name === '' || $contact === '') mudrya_help_back('err');

    $body = "Контакт: $contact\nТема: $topic\n\n$msg";
    wp_insert_post(['post_type' => 'mudrya_help', 'post_status' => 'private', 'post_title' => $name . ' — ' . $topic, 'post_content' => $body]);
    $to = get_option('mudrya_help_email') ?: get_option('admin_email');
    @wp_mail($to, 'Мудря йога: новая заявка на психологическую помощь', "Имя: $name\n$body\n\nВсе заявки: " . admin_url('edit.php?post_type=mudrya_help'));
    mudrya_help_back('ok');
}
add_action('admin_post_mudrya_help', 'mudrya_help_submit');
add_action('admin_post_nopriv_mudrya_help', 'mudrya_help_submit');

add_action('admin_menu', function () {
    add_options_page('Мудря заявки', 'Мудря заявки', 'manage_options', 'mudrya-help', function () {
        if (isset($_POST['mh_save']) && check_admin_referer('mudrya_help_opts')) {
            update_option('mudrya_help_email', sanitize_email(wp_unslash($_POST['help_email'] ?? '')));
            echo '<div class="updated"><p>Сохранено.</p></div>';
        }
        ?><div class="wrap"><h1>Заявки на психологическую помощь</h1><form method="post"><?php wp_nonce_field('mudrya_help_opts'); ?>
        <p><label>E-mail, куда приходят заявки<br><input type="email" class="regular-text" name="help_email" value="<?php echo esc_attr(get_option('mudrya_help_email')); ?>" placeholder="<?php echo esc_attr(get_option('admin_email')); ?>"></label></p>
        <p><button class="button button-primary" name="mh_save" value="1">Сохранить</button></p></form></div><?php
    });
});
