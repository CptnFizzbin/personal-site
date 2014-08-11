<?php
  include_once ($_SERVER['DOCUMENT_ROOT'] . '/includes.php');
  Layout::$layout = "main";
  ob_start();
?>
<div class="row">
  <div class="small-12 columns">
    <h1>401 Error</h1>
    <h2>Forbidden</h2>
    <p>
      You do not have authorization to access the page you requested. <br />
      You may <a href="<?php echo $_SERVER["REQUEST_URI"] ?>">refresh</a> the page, or return to <a href="/">homepage</a>.
    </p>
  </div>
</div>
<?php
  Layout::$content = ob_get_clean();
  Layout::render();
?>
