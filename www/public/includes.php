<?php
  set_include_path( get_include_path() . PATH_SEPARATOR . $_SERVER['DOCUMENT_ROOT'] );

  $enableHTTPSRedirect = true;
  if($enableHTTPSRedirect && !isset($_SERVER['HTTPS']))
  {
    header("Location: https://".$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']);
  }

  include(__DIR__."/../config/config.php");
  include("Layout.php");
?>
