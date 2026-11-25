<?php
/**
 * Plugin Name: Мудря — чистый холст
 * Description: Показывает страницы с пометкой <!--mudrya-canvas--> без шапки и подвала темы (лендинг хаба). Если плагин выключен, страница просто откроется в обычном оформлении темы.
 * Version: 1.0.0
 * Author: Мудря йога
 * Requires PHP: 7.4
 */
if (!defined('ABSPATH')) exit;

function mudrya_canvas_post() {
    if (!is_singular('page') && !is_front_page()) return null;
    $p = get_queried_object();
    if (!($p instanceof WP_Post) || $p->post_type !== 'page') return null;
    return strpos($p->post_content, '<!--mudrya-canvas-->') !== false ? $p : null;
}

add_action('template_redirect', function () {
    $p = mudrya_canvas_post();
    if (!$p || post_password_required($p)) return;
    nocache_headers();
    header('Content-Type: text/html; charset=utf-8');
    ?><!doctype html>
<html <?php language_attributes(); ?>><head><meta charset="<?php bloginfo('charset'); ?>">
<meta name="viewport" content="width=device-width,initial-scale=1">
<?php wp_head(); ?>
<style>html{margin-top:0!important}body{margin:0}</style>
</head><body <?php body_class('mudrya-canvas'); ?>>
<?php if (function_exists('wp_body_open')) wp_body_open(); ?>
<?php echo do_blocks($p->post_content); // содержимое страницы, написанное администратором ?>
<?php wp_footer(); ?>
</body></html><?php
    exit;
}, 5);

/* Стили темы на холсте не нужны — у лендинга свои. */
add_action('wp_enqueue_scripts', function () {
    if (!mudrya_canvas_post()) return;
    foreach (['global-styles', 'wp-block-library', 'wp-block-library-theme', 'classic-theme-styles', 'core-block-supports'] as $h) {
        wp_dequeue_style($h);
    }
}, 100);
add_filter('show_admin_bar', function ($show) { return mudrya_canvas_post() ? false : $show; });
