
<template>
      <router-view class="child"></router-view>
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
/*.sidebar-menu{
  text-align: left;
}
.page-content{
  padding-top:0px;
  min-height: 100%;
  width: 100%;
  position: relative;
  background: #ffffff;

  .content-header{
      color: #444;
      display: block;
      padding: 10px;
      position: relative;

      .title{
          float: left;
          display: inline-block;
          font-size: 18px;
          margin: 0;
          line-height: 1;
      }

      .tools{
          position: absolute;
          right: 10px;
          top: 5px;
      }
  }

  .content-body{
      border-top: 3px solid #d2d6de;
      padding: 10px;
  }
}*/
</style>
