<template>
  <el-form :model="loginForm" :rules="loginFormRules" ref="loginForm" label-position="left" label-width="0px" class="card-box loginform">
    <h3 class="title">Login</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="Username"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="Password"></el-input>
    </el-form-item>
    <el-checkbox v-model="remember" checked style="margin:0px 0px 35px 0px;">Remember Me</el-checkbox>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit" :loading="logining">Login</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    data() {
      return {
        logining: false,
        loginForm: {
          username: 'admin',
          password: 'admin'
        },
        loginFormRules: {
          username: [
            { required: true, message: 'Required', trigger: 'blur' },
            //{ validator: validaePass }
          ],
          password: [
            { required: true, message: 'Required', trigger: 'blur' },
            //{ validator: validaePass2 }
          ]
        },
        remember: true
      };
    },
    methods: {
      handleSubmit(ev) {
        var _this = this;
        this.logining = true;
        this.$refs.loginForm.validate((valid) => {
          if (valid) {
           
            var loginParams = { username: this.loginForm.account, password: this.loginForm.checkPass };
            
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>

<style scoped>
  .card-box {
    padding: 20px;
    margin-bottom: 20px;
    margin: 180px auto;
    width: 400px;
  }
  
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
  }
  
  .loginform {
    width: 350px;
    padding: 35px 35px 15px 35px;
  }
</style>