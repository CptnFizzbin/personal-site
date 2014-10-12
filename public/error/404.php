<?php
  include_once ($_SERVER['DOCUMENT_ROOT'] . '/includes.php');
  Layout::$layout = "main";
  ob_start();
?>
<div class="row">
  <div class="small-12 columns">
    <h1><small>A wild lv. </small>404 Error<small> appeared!</small></h1>
    <p>
      User sent out Internet Browser <br />
      Internet Browser used <strong>Request Page</strong> </br />
      Nothing happened <br />
      Error uses <strong>Page Not Found</strong> <br />
      It's super effective! <br />
      Internet Browser faints <br />
    </p>
    <hr />
    <p>
      The page or resource you requested was not found on this server. <br />
      You may <a href="<?php echo $_SERVER["REQUEST_URI"] ?>">refresh</a> the page, or return to <a href="/">homepage</a>.
    </p>
  </div>
</div>
<?php
  Layout::$content = ob_get_clean();
  Layout::render();
?>
