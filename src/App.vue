<template>
    <el-row class="panel">
        <el-col :span="24" class="panel-top">
            <el-col :span="20" style="font-size:26px;">
                <img src="./assets/logo4.png" class="logo"> <span>Vods<i style="color:#20a0ff">TV</i></span>
            </el-col>
            <el-col :span="4" class="rightbar">
                <el-dropdown trigger="click">
                    <span class="el-dropdown-link" style="color:#c0ccda;cursor: pointer;"><i class="fa fa-user" aria-hidden="true" style="margin-right:5px;"></i> {{user.username}}</span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>this</el-dropdown-item>
                        <el-dropdown-item>that</el-dropdown-item>
                        <el-dropdown-item divided @click.native="logout">Logout</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-tooltip class="item tip-logout" effect="dark" content="Logout" placement="bottom" style="padding:0px;">
                    <i class="fa fa-sign-out" aria-hidden="true" v-on:click="logout"></i>
                </el-tooltip>
            </el-col>
        </el-col>
        <el-col :span="24" class="panel-center">
            <el-col :span="4">
                <aside>
                    <el-menu :default-active="currentPath"  theme="dark" router>
						<el-menu-item index="/">Home</el-menu-item>
						<el-menu-item index="/admin/vods">Vods</el-menu-item>
						<el-menu-item index="/admin/tags">Tags</el-menu-item>
                    </el-menu>
                </aside>
            </el-col>
            <el-col :span="20" class="panel-c-c">
                <el-col :span="24">
                    <!--<transition name="fade">-->
                    <router-view></router-view>
                    <!--</transition>-->
                </el-col>
            </el-col>
        </el-col>
    </el-row>
</template>

<script>
import g from 'genesis-object'
import ctrl from './controllers/Controller'
import User from './models/User'

  export default {
    name: 'app',
    data() {
			return g("", function(){
				var self = {
					model:"tag",
					user: User,
					currentPath:"/admin/vods",
					logout:function(){
						this.$confirm('yes', 'no', {
							//type: 'warning'
						}).then(() => {
							self.user = User.create();
							//redirect login
						}).catch(() => {

						});
					}
				}
				return self
			}, [ctrl]).create()
		},
		methods: {
		},
		mounted() {
			this.currentPath = this.$route.path; 
			this.user.username = "swaggy";
		}
  }
</script>

<style>
body{
  margin: 0px;
}
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;*/
}
.fade-enter-active,
	.fade-leave-active {
		transition: opacity .5s
	}
	
	.fade-enter,
	.fade-leave-active {
		opacity: 0
	}
	
	.panel {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
	}
	
	.panel-top {
		height: 60px;
		line-height: 60px;
		background: #1F2D3D;
		color: #c0ccda;
	}

	.panel-top .rightbar{
		text-align: right;
		padding-right: 35px;
	}

	.panel-top .rightbar .head{
		width: 40px;
    	height: 40px;
		border-radius: 20px;
		margin: 10px 0px 10px 10px;
    	float: right;
	}
	
	.panel-center {
		background: #324057;
		position: absolute;
		top: 60px;
		bottom: 0px;
		overflow: hidden;
	}
	
	.panel-c-c {
		background: #f1f2f7;
    height: 100%;
		right: 0px;
		top: 0px;
		bottom: 0px;
		left: 230px;
		overflow-y: scroll;
		padding: 5px;
	}
	
	.logout {
		background: url(./assets/logout_36.png);
		background-size: contain;
		width: 20px;
		height: 20px;
		float: left;
	}
	
	.logo {
		width: 40px;
		float: left;
		margin: 10px 10px 10px 18px;
	}
	
	.tip-logout {
		float: right;
		margin-right: 20px;
		padding-top: 5px;
	}
	
	.tip-logout i {
		cursor: pointer;
	}
	
	.admin {
		color: #c0ccda;
		text-align: center;
	}
</style>