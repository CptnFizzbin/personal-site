<?php
  include('../includes.php');
  Layout::$layout = "main";
  Layout::$title = 'Projects';
  ob_start();
?>

<section>
  <div class="row">
    <div class="small-12 medium-text-center columns">
      <h2>Projects</h2>
    </div>
  </div>

  <div class="row">
    <div class="small-12 medium-text-center columns">
      <h3>
        General Kinetics
      </h3>
    </div>
    <div class="small-12 medium-6 columns">
      <p>
         I was contracted to recreate General Kinetic's website with modern tools and practices. The site was built with PHP and HTML5, and will include an custom built password protected administration section for altering featured pictures and upcoming events.
      </p>
    </div>
    <div class="small-12 medium-6 columns">
      <?php include "images/svgs/info_pane_begin.svg" ?>
      <div class="info-pane">
        <ul>
          <li>PHP, HTML5, CSS3</li>
          <li>Bootstrap 2.3</li>
          <li>Contract</li>
        </ul>
      </div>
      <?php include "images/svgs/info_pane_end.svg" ?>
    </div>
  </div>
</section>

<?php include "images/svgs/section_begin.svg"; ?>

<section>
  <div class="row">
    <div class="small-12 medium-text-center columns">
      <h3>
        <a href="projects/forum.php">
          PHP Forum
        </a>
      </h3>
    </div>
    <div class="small-12 columns">
      <p>
        For a final project for my Web Programming class, I created a basic forum board using PHP from scratch. This forum system included profiles, and some BBCode support. In the next semister, with another student, we recreated the forum board using Object Oriented PHP.
      </p>
    </div>
    <div class="small-12 medium-6 columns">
      <?php include "images/svgs/info_pane_begin.svg" ?>
      <div class="info-pane">
        <ul>
          <li>PHP, HTML5, CSS3</li>
          <li>Foundation 4</li>
          <li>Group Project</li>
        </ul>
      </div>
      <?php include "images/svgs/info_pane_end.svg" ?>
    </div>
    <div class="small-12 medium-6 columns">
      <div class="panel no-print">
        <a href="projects/forum.php">
          <img src="images/forums.png">
        </a>
      </div>
    </div>
  </div>
</section>

<?php include "images/svgs/section_end.svg"; ?>

<section>
  <div class="row">
    <div class="small-12 medium-text-center columns">
      <h3>
        <a href="projects/shadows.php">
          Shadows of Shibow
        </a>
      </h3>
    </div>
    <div class="small-12 columns">
      <p>
        In grade 12 at Orangeville District Secondary School, two other students and I spent four months working together to create an RPG Flash game. For the project I developed most of the back-end systems, including the map rendering system, and the inventory system. Although the game was never fully completed, it does work, and has a few playable levels, and many many bugs. The game can be found on the project page.
      </p>
    </div>
    <div class="small-12 medium-6 columns">
      <?php include "images/svgs/info_pane_begin.svg" ?>
      <div class="info-pane">
        <ul>
          <li>AS3</li>
          <li>Group Project</li>
        </ul>
      </div>
      <?php include "images/svgs/info_pane_end.svg" ?>
    </div>
    <div class="small-12 medium-6 columns">
      <div class="panel no-print">
        <a href="projects/shadows.php">
          <img src="images/shibow.png">
        </a>
      </div>
    </div>
  </div>
</section>

<?php
  Layout::$content = ob_get_clean();
  Layout::render();
?>-
