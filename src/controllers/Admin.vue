
<template>
  <div class="wrapper admin-controller">

  <header class="main-header">
    <!-- Logo -->
    <a href="/" class="logo">
      <!-- mini logo for sidebar mini 50x50 pixels -->
      <span class="logo-mini"><b>V</b>TV</span>
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg"><b>Vods</b>TV</span>
    </a>
    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top">
      <!-- Sidebar toggle button-->
      <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </a>

      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <!-- User Account: style can be found in dropdown.less -->
          <li class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <img src="static/img/user2-160x160.jpg" class="user-image" alt="User Image">
              <span class="hidden-xs">{{ username }}</span>
            </a>
            <ul class="dropdown-menu">
              <!-- User image -->
              <li class="user-header">
                <img src="static/img/user2-160x160.jpg" class="img-circle" alt="User Image">

                <p>
                  Alexander Pierce - Web Developer
                  <small>Member since Nov. 2012</small>
                </p>
              </li>
              <!-- Menu Body -->
              <li class="user-body">
                <div class="row">
                  <div class="col-xs-4 text-center">
                    <a href="#">Followers</a>
                  </div>
                  <div class="col-xs-4 text-center">
                    <a href="#">Sales</a>
                  </div>
                  <div class="col-xs-4 text-center">
                    <a href="#">Friends</a>
                  </div>
                </div>
                <!-- /.row -->
              </li>
              <!-- Menu Footer-->
              <li class="user-footer">
                <div class="pull-left">
                  <a href="#/auth/login" class="btn btn-default btn-flat">Login</a>
                </div>
                <div class="pull-right">
                  <a href="#/auth/logout" class="btn btn-default btn-flat">Sign out</a>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </header>

  <!-- =============================================== -->

  <!-- Left side column. contains the sidebar -->
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- search form -->
      <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="Search...">
              <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                </button>
              </span>
        </div>
      </form>
      <!-- /.search form -->
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu">
        <li>
          <a href="#/admin/dashboard">
            <i class="fa fa-dashboard"></i> <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#/admin/watchers">
            <i class="fa fa-user"></i> <span>Watchers</span>
          </a>
        </li>
        <li>
          <a href="#/admin/matches">
            <i class="fa fa-play"></i> <span>Matches</span>
          </a>
        </li>
        <li>
          <a href="#/admin/vods">
            <i class="fa fa-play"></i> <span>Vods</span>
          </a>
        </li>
        <li>
          <a href="#/admin/tags">
            <i class="fa fa-tag"></i> <span>Tags</span>
          </a>
        </li>
        <li>
          <a href="#/admin/feeds">
            <i class="fa fa-rss"></i> <span>Feeds</span>
          </a>
        </li>
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>

  <!-- =============================================== -->

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Main content -->
    <!--<section class="content" data-bind="component:{name:content}">
    </section>-->
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
</div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      username: 'Swaggy'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sidebar-menu{
  text-align: left;
}
</style>
