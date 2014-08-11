<?php
  include_once ($_SERVER['DOCUMENT_ROOT'] . '/includes.php');
  Layout::$layout = "main";
  ob_start();
?>
<div class="row">
  <div class="small-12 columns">
    <h1>503 Error</h1>
    <h2>Service Unavailable</h2>
    <p>
      The page you have requested is currently not home right now. You may <a href="<?php echo $_SERVER["REQUEST_URI"] ?>">refresh</a> the page, or return to the <a href="/">homepage</a> and call again later.
    </p>
  </div>
</div>
<?php
  Layout::$content = ob_get_clean();
  Layout::render();
?>
