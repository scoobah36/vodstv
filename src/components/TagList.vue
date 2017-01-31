<template>
    <el-button>Default Button</el-button>
</template>

<script>
//  var vm = {};
// vm.data = ko.observableArray([]);
// v.service.tag.list().then(function(tags){
//     var data = [];
//     _.each(tags, function(tag){
//         data.push(v.model.tag.create(tag));
//     })
//     vm.data(data);
// })

// vm.add = function(){
//     vm.data.push(v.model.tag.create());
// }

import ctrl from '../controllers/Controller'


export default {
  name: 'tag-list',
  data () {
    return ctrl.create( {
      tags: []
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
