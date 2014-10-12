<?php
  include_once ($_SERVER['DOCUMENT_ROOT'] . '/includes.php');
  Layout::$layout = "home";
  ob_start();
?>

<div class="homepage">
  <section>
    <div class="row">
      <div class="small-6 small-centered medium-4 large-3 columns">
        <img src="images/logo.png" id="self-portrait"/>
      </div>
      <div class="small-12 medium-text-center large-6 large-text-left columns">
        <h1>Stephen A. Wilson</h1>
      </div>
      <div class="small-12 medium-text-center large-6 large-text-right columns">
        <h2 class="subtitle">
          Student of <br class="hide-for-medium-only"/>
          Backend Web Development
        </h2>
      </div>
    </div>
  </section>

  <?php
    include("images/svgs/section_begin.svg");

    include("_languages.php");

    include("images/svgs/section_end.svg");

    include("_contact.php");
  ?>
</div>

<?php
  Layout::$content = ob_get_clean();
  Layout::render();
?>
