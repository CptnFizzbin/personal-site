<?php
  include_once ($_SERVER['DOCUMENT_ROOT'] . '/includes.php');
  Layout::$layout = "main";
  ob_start();
?>
<div class="row">
  <div class="small-12 columns">
    <h1>408 Error</h1>
    <h2>Request timed out</h2>
    <p>
      The page you requested took to long to respond. It has probably turned off it's cellphone. You may <a href="<?php echo $_SERVER["REQUEST_URI"] ?>">refresh</a> the page and see if it will answer, or you may return to <a href="/">homepage</a>.
    </p>
  </div>
</div>
<?php
  Layout::$content = ob_get_clean();
  Layout::render();
?>
