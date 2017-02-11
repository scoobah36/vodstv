<template>
    <el-card class="box-card">
        <div slot="header" style="display: flex;">
            <el-col :span="23">
                <el-input
                    placeholder="Search"
                    icon="search"
                    v-model="query"
                    size="medium"
                    :on-icon-click="search">
                </el-input>
            </el-col>
            <el-col :span="1">
                <i v-on:click="settings" class="icon-btn fa fa-gear"></i>         
            </el-col>
        </div>
        <div class="vods">
            <el-row class="vod-mag" v-for="(v, index) in vods">
                <el-col :span="9" class="vod-img">
                    <img :src="v.thumbURL" class="image">                            
                </el-col>
                <el-col :span="15" class="vod-card">
                    <el-card>
                        <div class="vod-header">
                            <el-col :span="18">
                                <span>{{ v.title }}</span>                                    
                            </el-col>
                            <el-col :span="6" class="actions">
                                <i class="fa fa-check" title="Mark Read"></i>                            
                                <a v-bind:href="'https://www.youtube.com/watch?v=' +v.videoKey"><i class="fa fa-external-link" title="Open"></i></a>                            
                                <i class="fa fa-bookmark-o" title="Watch Later"></i>                            
                                <i class="fa fa-bars" title="More"></i>                            
                            </el-col>
                        </div>
                        <div class="vod-body">
                            This is a really good vod
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </el-card>
</template>

<script>
import g from 'genesis-object'
import ctrl from '../controllers/Controller'
import Vod from '../models/Vod'

export default {
    name: 'feed',
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
    methods: {
      search() {
        console.log('search');
      },
      settings(){
        console.log('edit');
      }
    },
    mounted() {
        var self = this;
        self.list().then(function(response){
            var vods = [];
            response.data.forEach(function(vod){
                vods.pushCreate(vod);
            })
            self.vods = vods;
        })
    }
}

</script>

<style scoped lang="scss" src="./style/feed.scss"></style>