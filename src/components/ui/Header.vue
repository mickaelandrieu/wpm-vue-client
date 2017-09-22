<template>
  <nav id="menu" class="navbar navbar-expand-lg navbar-dark col">
    <a class="navbar-brand" href="#"><img src="./../../assets/logo.png" alt="WePlayMusic.fr" title="WePlayMusic.fr" /></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link :to="{ name: 'newAlbumPage'}" class="nav-link">New Album</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'manageAlbumsPage'}" class="nav-link">Manage Albums</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'helpPage'}" class="nav-link">Help</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<style scoped>
  #menu {
    width: 100%;
    background-color: #020202;
    background-image: linear-gradient(top, #020202, #020202);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#020202', endColorstr='#020202', GradientType=0);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25), inset 0 -1px 0 rgba(0, 0, 0, 0.1);
    border-bottom: 2px solid #33b5e5;
  }
</style>
