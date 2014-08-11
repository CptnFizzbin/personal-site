<?php
  set_include_path( get_include_path() . PATH_SEPARATOR . $_SERVER['DOCUMENT_ROOT'] . PATH_SEPARATOR . "/home/200220207/public_html");

  $enableHTTPSRedirect = false;
  if($enableHTTPSRedirect && !isset($_SERVER['HTTPS']))
  {
    header("Location: https://".$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']);
  }

  include("Config.php");
  include("Layout.php");
?>
