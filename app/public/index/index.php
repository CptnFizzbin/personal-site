<?php
  include_once ($_SERVER['DOCUMENT_ROOT'] . '/includes.php');
  Layout::$layout = "home";
  ob_start();
?>

<div class="homepage">
  <section>
    <div class="row">
      <div class="small-12 medium-4 large-3 columns">
        <img src="images/Profile-Personal.jpg" id="self-portrait" alt="Stephen A. Wilson"/>
      </div>
      <div class="small-12 medium-8 large-9 columns">
        <div class="row">
          <div class="small-12 small-text-center columns">
            <h1>Stephen A. Wilson</h1>
          </div>
          <div class="small-12 small-text-center columns">
            <h2 class="subtitle">
              Student of Backend Web Development
            </h2>
          </div>
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
