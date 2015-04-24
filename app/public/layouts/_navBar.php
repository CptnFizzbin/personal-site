<div class="contain-to-grid fixed nav-bar">
  <nav class="top-bar project" data-topbar>
    <ul class="title-area">
      <li class="name">
        <h1><a href="/">Stephen A. Wilson</a></h1>
      </li>
      <li class="toggle-topbar menu-icon"><a href="#">Menu</a></li>
    </ul>

    <section class="top-bar-section">
      <ul class="right">
        <li>
          <a href="mailto:stephen-356@hotmail.com">stephen-356@hotmail.com</a>
        </li>
        <li class="divider"></li>
        <li class="<?php if (Layout::$title == '') { echo "active"; }; ?>">
          <a href="/">Home</a>
        </li>
        <li class="divider"></li>
        <li class="<?php if (Layout::$title == 'Resume') { echo "active"; }; ?>">
          <a href="/resume">Résumé</a>
        </li>
        <li class="divider"></li>
        <li>
          <a href="https://github.com/SpyMaster356" target="_blank">GitHub</a>
        </li>
        <li class="divider"></li>
        <li class="<?php if (Layout::$title == 'Projects') { echo "active"; }; ?>">
          <a href="/projects">Projects</a>
        </li>
      </ul>
    </section>
  </nav>
</div>
