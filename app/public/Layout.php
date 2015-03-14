<?php
  class Layout {
    public static $layout    = 'main';
    public static $title     = '';
    public static $content   = '';
    public static $head_data = '';

    // Project IFrame source
    public static $ifrSrc = '';

    public static function render() {
      require_once( 'layouts/'.Layout::$layout.'.php' );
    }
  }
?>
