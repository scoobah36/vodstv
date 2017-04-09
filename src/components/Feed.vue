<template>
    <div class="feed">
        <h2>{{title}}</h2>
        <div class="item"
             v-for="vod in vods">
            <div class="thumb">
                <img :src="vod.thumbURL">
            </div>
            <div class="tools">
                <b-nav pills>
                    <b-nav-item>
                        <icon name="check"
                              label="Mark Watched"></icon>
                    </b-nav-item>
                    <b-nav-item>
                        <icon name="save"
                              label="Save For Later"></icon>
                    </b-nav-item>
                </b-nav>
            </div>
            <div class="content">
                <div class="title"><a>{{vod.title}}</a></div>
                <div class="subtext">{{vod.date.format()}}</div>
                <div class="desc">
                    <p>{{vod.description}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'feed',
    computed: mapState([
        'vods'
    ]),
    data() {
        return {
            title: 'Welcome to Your Feed'
        }
    },
    mounted: function () {
        this.$store.dispatch('LOAD_VOD_LIST')
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less">
@import '../assets/variables.less';
@item-height: 150px;
@title-h: ~"calc( 0.7 * (@{item-height} / 2))";
@subtext-h: ~"calc( 0.3 * (@{item-height} / 2))";
@desc-h: @item-height / 2;

.feed {
    max-width: @main-w * 2;
    min-width: @main-w;
    margin-left: auto;
    margin-right: auto;
}

.item {
    height: @item-height;
    margin: 5px 0px;
    position: relative;

    &:hover,
    &:focus {
        .content .title {
            color: #fff;
        }
        cursor: pointer;
        background-color: #292929;
    }

    .tools {
        display: none;
        position: absolute;
        right: 0;
    }

    &:hover {
        .tools {
            display: block;
        }
    }
    .thumb {
        float: left;
        padding: 25px 10px;
        height: 100%;
        width: @item-height + 20;

        img {
            width: @item-height;
        }
    }
    .content {
        float: left;
        height: 100%;
        width:~"calc(100% - (@{item-height} + 20px) )";

        .title {
            font-size: x-large;
            padding-top: 5px;
            height: @title-h;
        }
        .subtext {
            font-size: small;
            height: @subtext-h;
        }
        .desc {
            overflow: hidden;
            height: @desc-h;
            p {
                line-height: @desc-h / 4;
            }
        }
    }
}
</style>
