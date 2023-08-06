<?php
/**
 * Plugin Name: My Crypto Project
 * Description: A WordPress plugin to display crypto-related information using Gutenberg blocks.
 * Version: 1.0
 * Author: Omomoh Agiogu
 */

// Define the main plugin class
class My_Crypto_Project {

    // Constructor: Hook into WordPress
    public function __construct() {
        add_action('enqueue_block_editor_assets', array($this, 'enqueue_block_assets'));
    }

    // Enqueue block assets
    public function enqueue_block_assets() {
        // Enqueue block editor script
        wp_enqueue_script(
            'my-crypto-blocks',
            plugin_dir_url(__FILE__) . 'assets/js/block.js',
            array('wp-blocks', 'wp-i18n', 'wp-element'),
            filemtime(plugin_dir_path(__FILE__) . 'assets/js/block.js')
            
        );
       // Register JavasScript File build/index.js
    wp_enqueue_script(
        'my-crypto-build',
        plugins_url( 'build/index.js', __FILE__ ),
        array( 'wp-blocks', 'wp-element', 'wp-editor' ),
    );
        // Enqueue block editor styles
        wp_enqueue_style(
            'my-crypto-blocks-style',
            plugin_dir_url(__FILE__) . 'assets/css/style.css',
            array('wp-edit-blocks'),
            filemtime(plugin_dir_path(__FILE__) . 'assets/css/style.css')
        );
    }
}

// Instantiate the plugin class
$my_crypto_project = new My_Crypto_Project();
