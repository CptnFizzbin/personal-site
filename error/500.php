<?php
  include_once ($_SERVER['DOCUMENT_ROOT'] . '/includes.php');
  Layout::$layout = "main";
  ob_start();
?>
<div class="row">
  <div class="small-12 columns">
    <h1>500 Error</h1>
    <h2>Interal Server Error</h2>
    <p>
      Something went wrong. A team of tiny robots have been deployed, and will work to fix the issue. In the meantime, you may <a href="<?php echo $_SERVER["REQUEST_URI"] ?>">refresh</a> the page, or return to the <a href="/">homepage</a>.
    </p>
  </div>
</div>
<?php
  Layout::$content = ob_get_clean();
  Layout::render();
?>
