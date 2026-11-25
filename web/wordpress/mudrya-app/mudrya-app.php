<?php
/**
 * Plugin Name: Мудря — практика (веб-версия приложения)
 * Description: Закрытый раздел для зарегистрированных: практики с объёмной фигурой, подбор, дыхание, прогресс. Работает на странице с пометкой <!--mudrya-app--> (и по адресу ?mp=app). Если плагин выключен, на странице остаётся её обычный текст.
 * Version: 1.3.4
 * Author: Мудря йога
 * Requires PHP: 7.4
 */
if (!defined('ABSPATH')) exit;

define('MUDRYA_APP_VER', '1.3.4');
define('MUDRYA_APP_URL', plugin_dir_url(__FILE__));

/* Регистрация открыта с ролью «подписчик»; при выключении плагина возвращаем как было. */
register_activation_hook(__FILE__, function () {
    if (get_option('mudrya_app_prev_reg') === false) add_option('mudrya_app_prev_reg', (int) get_option('users_can_register'));
    update_option('users_can_register', 1);
    update_option('default_role', 'subscriber');
});
register_deactivation_hook(__FILE__, function () {
    $prev = get_option('mudrya_app_prev_reg');
    if ($prev !== false) update_option('users_can_register', (int) $prev);
    delete_option('mudrya_app_prev_reg');
});

add_filter('query_vars', function ($v) { $v[] = 'mp'; return $v; });

function mudrya_app_page_id() {
    $id = (int) get_option('mudrya_app_page');
    if ($id && get_post_status($id) === 'publish') return $id;
    return 0;
}
function mudrya_app_url() {
    $id = mudrya_app_page_id();
    return $id ? get_permalink($id) : home_url('/?mp=app');
}
function mudrya_app_is_here() {
    if (get_query_var('mp') === 'app') return true;
    if (!is_page()) return false;
    $p = get_queried_object();
    if (!($p instanceof WP_Post)) return false;
    if (strpos($p->post_content, '<!--mudrya-app-->') !== false) {
        if ((int) get_option('mudrya_app_page') !== $p->ID) update_option('mudrya_app_page', $p->ID);
        return true;
    }
    return false;
}

add_action('template_redirect', function () {
    if (!mudrya_app_is_here()) return;
    if (!is_user_logged_in()) { auth_redirect(); exit; }
    $u = wp_get_current_user();
    $cfg = [
        'base'   => MUDRYA_APP_URL . 'app/',
        'ver'    => MUDRYA_APP_VER,
        'home'   => home_url('/'),
        'rest'   => esc_url_raw(add_query_arg('rest_route', '/mudrya/v1/', home_url('/'))),
        'nonce'  => wp_create_nonce('wp_rest'),
        'user'   => $u->display_name,
        'logout' => wp_logout_url(home_url('/')),
    ];
    $base = esc_url(MUDRYA_APP_URL . 'app/');
    $v = esc_attr(MUDRYA_APP_VER);
    nocache_headers();
    header('Content-Type: text/html; charset=utf-8');
    ?><!doctype html>
<html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex"><title>Практика — Мудря йога</title>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Manrope:wght@400;600;700;800&display=swap&subset=cyrillic" rel="stylesheet">
<link rel="stylesheet" href="<?php echo $base; ?>app.css?v=<?php echo $v; ?>">
</head><body><div id="mudrya-app"></div>
<script>window.MUDRYA_CFG=<?php echo wp_json_encode($cfg); ?>;</script>
<script src="<?php echo $base; ?>app.js?v=<?php echo $v; ?>"></script>
</body></html><?php
    exit;
}, 2);

/* Прогресс пользователя. Пути вида rest_route=/mudrya/v1/progress — работают и при простых постоянных ссылках. */
add_action('rest_api_init', function () {
    $logged = function () { return is_user_logged_in(); };
    register_rest_route('mudrya/v1', '/progress', [
        ['methods' => 'GET', 'permission_callback' => $logged, 'callback' => function () {
            $p = get_user_meta(get_current_user_id(), 'mudrya_progress', true);
            return is_array($p) ? $p : ['sessions' => [], 'settings' => new stdClass()];
        }],
        ['methods' => 'POST', 'permission_callback' => $logged, 'callback' => function (WP_REST_Request $r) {
            $in = $r->get_json_params();
            $out = ['sessions' => [], 'settings' => []];
            foreach (array_slice((array) ($in['sessions'] ?? []), -500) as $s) {
                if (!is_array($s)) continue;
                $id = preg_replace('/[^a-z0-9_:]/', '', strtolower((string) ($s['id'] ?? '')));
                $d  = preg_match('/^\d{4}-\d{2}-\d{2}$/', (string) ($s['d'] ?? '')) ? $s['d'] : '';
                if ($id === '' || $d === '') continue;
                $out['sessions'][] = ['id' => substr($id, 0, 40), 'm' => max(0, min(600, (int) ($s['m'] ?? 0))), 'd' => $d];
            }
            $st = (array) ($in['settings'] ?? []);
            $out['settings'] = ['breath' => max(2, min(8, (int) ($st['breath'] ?? 4))), 'voice' => !empty($st['voice'])];
            update_user_meta(get_current_user_id(), 'mudrya_progress', $out);
            return ['ok' => true];
        }],
    ]);
});

/* Подписчики после входа и регистрации — в практику, без админки и админ-панели. */
add_filter('login_redirect', function ($to, $req, $user) {
    if ($user instanceof WP_User && !user_can($user, 'edit_posts') && (empty($req) || strpos($req, 'wp-admin') !== false)) return mudrya_app_url();
    return $to;
}, 10, 3);
add_filter('registration_redirect', function () { return wp_login_url(mudrya_app_url()); });
add_action('after_setup_theme', function () {
    if (is_user_logged_in() && !current_user_can('edit_posts')) show_admin_bar(false);
});
