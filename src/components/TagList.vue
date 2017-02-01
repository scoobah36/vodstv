<template>
    <el-card class="box-card">
        <div slot="header" style="display: flex;">
            <el-col :span="18">
                <span style="font-size: 24px" class="title">Tag List</span>
            </el-col>
            <el-col :span="4">
                <el-input
                    placeholder="Search"
                    icon="search"
                    v-model="query"
                    size="medium"
                    :on-icon-click="handleClick">
                </el-input>
            </el-col>
            <el-col :span="2">
                <el-button type="success" size="medium" @click="handleClick"><span class="fa fa-plus"></span></el-button>            
            </el-col>
        </div>
        <el-table
            :data="tags"
            border
            max-height="600"
            style="width: 100%; max-height: 100%">
            
            <el-table-column prop="id" label="id" width="50"></el-table-column>
            <el-table-column prop="name" label="name" width="250"></el-table-column>
            <el-table-column prop="type" label="type" width="150"></el-table-column>
            <el-table-column prop="regex" label="regex" width="150"></el-table-column>
            <el-table-column fixed="right" label="Actions" width="150">
                <template scope="scope">
                    <el-button type="success" size="small" @click="handleClick"><span class="fa fa-save"></span></el-button>
                    <el-button type="danger" size="small"><span class="fa fa-trash"></span></el-button>
                </template>
            </el-table-column>
        </el-table>
        
    </el-card>
</template>

<script>
import g from 'genesis-object'
import ctrl from '../controllers/Controller'
import Tag from '../models/Tag'

export default {
  name: 'tag-list',
  methods: {
      handleClick() {
        console.log('click');
        
      }
    },
  data () {
    return g("", function(){
        var self = {
          model:"tag",
          query: '',
          tags:[Tag]
        }
        return self
    }, [ctrl]).create()
  },
  mounted() {
      var self = this;
      self.list().then(function(response){
          response.data.forEach(function(tag){
            self.tags.pushCreate(tag);
          })
      })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>