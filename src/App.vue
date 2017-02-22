<template>
    <el-row class="panel">
        <el-col :span="24" class="panel-top">
            <el-col :span="1">
                <i v-on:click="toggleNav" class="icon-btn fa fa-bars"></i>
            </el-col>
            <el-col :span="19" style="font-size:26px;">
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
            <el-col :span="2" :class="{'sidebar-close': !showNav}">
                <aside >
                    <el-menu :default-active="currentPath"  theme="dark" router>
						<el-menu-item index="/"><i class="fa fa-home"></i>Home</el-menu-item>
						<el-menu-item index="/feed">Feed</el-menu-item>
						<el-menu-item index="/admin/vods">Vods</el-menu-item>
						<el-menu-item index="/admin/tags">Tags</el-menu-item>
                    </el-menu>
                </aside>
            </el-col>
            <el-col :span="showNav ? 22 : 24" class="panel-c-c">
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
		return g(function(){
			var self = {
				model:"tag",
				user: User,
				currentPath:"/admin/vods",
				showNav:true
			}
			return self
		}, [ctrl]).create()
	},
	methods: {
		toggleNav:function(){
			this.showNav = !this.showNav;
		},
		logout:function(){
			this.$confirm('yes', 'no', {
				//type: 'warning'
			}).then(() => {
				self.user = User.create();
				//redirect login
			}).catch(() => {

			});
		}
	},
	mounted() {
		this.currentPath = this.$route.path; 
		this.user.username = "swaggy";
	}
}
</script>

<style lang="scss" src="./app.scss"></style>