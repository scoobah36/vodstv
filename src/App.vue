<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<template>
  <div id="app">
    <b-navbar toggleable
              type="default">
  
      <b-link class="navbar-brand"
              to="/">
        <span class="logo-decoration">Vods</span>.TV
      </b-link>
  
      <b-nav is-nav-bar
             class="ml-auto">
  
        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown :caret="false"
                             right-alignment>
  
          <!-- Using text slot -->
          <template slot="text">
            <span>Swiggity Swagger</span>
          </template>
  
          <b-list-group-item to="#/profile">Profile</b-list-group-item>
          <b-list-group-item to="#">Signout</b-list-group-item>
        </b-nav-item-dropdown>
  
      </b-nav>
    </b-navbar>
    <div class="sidebar page-section">
      <img src="./assets/logo.png">
    </div>
    <div class="main page-section">
      <router-view></router-view>
    </div>
    <div class="rightside page-section">
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style lang="less" scoped>
@import './assets/variables.less';
@nav-h: 50px;
@side-width: 250px;
@main-marg: 10px;
@full-h: ~"calc(100vh - @{nav-h})";

.navbar {
  margin-bottom: 0px;
  height: @nav-h;
  font-size: x-large;


  .logo-decoration {
    color: @brand-primary;
    font-size: x-large;
  }

  .dropdown-menu {
    padding: 0px;
  }
}


.page-section {
  float: left;
  padding: 10px;
}

.sidebar {
  background-color: @gray-dark;
  width: @side-width;
  height: @full-h;
}

.main {
  margin: 0px @main-marg;
  width:~"calc( 100vw - ( (@{main-marg} * 2) + (@{side-width} * 2)))";
  height: @full-h;
  overflow: auto;
}

.rightside {
  background-color: @gray-dark;
  width: @side-width;
  height: 100%;
  height: @full-h;
}
</style>
