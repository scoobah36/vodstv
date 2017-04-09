<template>
  <div id="app">
    <b-navbar toggleable
              type="default">
  
      <b-link class="navbar-brand"
              to="/">
        <span class="logo-decoration">Vods</span>.TV
      </b-link>
  
      <b-nav is-nav-bar>
        <b-nav-item to="/feed">Feed</b-nav-item>
      </b-nav>
  
      <b-nav is-nav-bar
             class="ml-auto">
  
        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown :caret="false"
                             right-alignment>
  
          <!-- Using text slot -->
          <template slot="text">
            <span>Swiggity Swagger</span>
          </template>
  
          <b-list-group-item to="/profile">Profile</b-list-group-item>
          <b-list-group-item to="#">Signout</b-list-group-item>
        </b-nav-item-dropdown>
      </b-nav>
  
      <b-nav is-nav-bar
             class="ml-auto">
        <b-nav is-nav-bar
               left-alignment>
        </b-nav>
  
      </b-nav>
    </b-navbar>
    <div class="sidebar page-section">
  
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
#app {
  min-width: @page-w;
}

@nav-h: 50px;
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
  width: @side-w;
  height: @full-h;
}

.main {
  margin: 0px @main-marg;
  min-width: @main-w;
  width:~"calc( 100vw - ( (@{main-marg} * 2) + (@{side-w} * 2)))";
  height: @full-h;
  overflow: auto;
}

.rightside {
  background-color: @gray-dark;
  width: @side-w;
  height: 100%;
  height: @full-h;
}
</style>
