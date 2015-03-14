<!DOCTYPE html>
<!--[if IE 9]><html class="lt-ie10" lang="en" > <![endif]-->
<html class="no-js" lang="en" >
<head>

  <base href="<?php echo CONFIG::$domain ?>">

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>
    <?php
      if (!empty(Layout::$title)){
        echo Layout::$title . ' | ';
      }
      echo 'Stephen A. Wilson';
    ?>
  </title>

  <link  rel='stylesheet' type='text/css' href='https://fonts.googleapis.com/css?family=Lato|Audiowide' media="all" >

  <link  rel='stylesheet' type='text/css' href="css/framework.css" media="all" >
  <link  rel='stylesheet' type='text/css' href="css/main.css" media="all" >
  <link  rel='stylesheet' type='text/css' href="css/foundation-icons.css" media="all" >

  <script src="js/vendor/modernizr.js"></script>
  <script src="js/vendor/jquery.js"></script>

  <?php echo Layout::$head_data; ?>
</head>
<body>
