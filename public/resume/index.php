<?php
  include('../includes.php');
  Layout::$title = 'Resume';
  ob_start();
?>

<section><?php include '_overview.php'; ?></section>
<?php include("images/svgs/section_begin.svg"); ?>

<section><?php include '_experience.php'; ?></section>
<?php include("images/svgs/section_end.svg"); ?>

<section><?php include '_projects.php'; ?></section>
<?php include("images/svgs/section_begin.svg"); ?>

<section><?php include '_education.php'; ?></section>
<?php include("images/svgs/section_end.svg"); ?>

<section><?php include '_languages.php'; ?></section>
<?php include("images/svgs/section_begin.svg"); ?>

<section><?php include '_software.php'; ?></section>
<?php include("images/svgs/section_end.svg"); ?>


<section>
  <div class="row">
    <div class="small-12 medium-6 columns">
      <?php include '_interests.php'; ?>
    </div>
    <div class="small-12 medium-6 columns">
      <?php include '_attributes.php'; ?>
    </div>
  </div>
</section>

<?php
  Layout::$content = ob_get_clean();
  Layout::render();
?>
