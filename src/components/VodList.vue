<template>
    <el-card class="box-card">
        <div slot="header" style="display: flex;">
            <el-col :span="18">
                <span style="font-size: 24px" class="title">Vod List</span>
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
            :data="vods"
            border
            max-height="600"
            empty-text="No Data"
            style="width: 100%; max-height: 100%">
            
            <el-table-column prop="id" label="id" width="50"></el-table-column>
            <el-table-column prop="description" label="description" width="250"></el-table-column>
            <el-table-column prop="tags" label="tags" width="150"></el-table-column>
            <el-table-column prop="thumbURL" label="thumbURL" width="150"></el-table-column>
            <el-table-column prop="title" label="title" width="150"></el-table-column>
            <el-table-column prop="videoDate" label="videoDate" width="150"></el-table-column>
            <el-table-column prop="videoKey" label="videoKey" width="150"></el-table-column>
            <el-table-column prop="videoSrc" label="videoSrc" width="150"></el-table-column>
            <el-table-column prop="videoURL" label="videoURL" width="150"></el-table-column>
            <el-table-column fixed="right" width="80">
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
import Vod from '../models/Vod'

export default {
    name: 'vod-list',
    methods: {
      handleClick() {
        console.log('click');
      }
    },
    data () {
        return g(function(){
            var self = {
                model:"vod", 
                query: '',
                vods:[Vod]
            }
            return self
        }, [ctrl]).create()
    },
    mounted() {
        var self = this;
        self.list().then(function(response){
            self.vods.pushCreate(response.data);
        })
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>