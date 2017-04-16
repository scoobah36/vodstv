<template>
    <div class="feed">
        <div class="header">
            <h2 class="title">{{title}}</h2>
            <div class="tools">
                <b-nav pills
                       right-alignment>
                    <b-nav-item v-on:click="markWatched">
                        <b-tooltip content="Mark All Watched">
                            <icon name="check"></icon>
                        </b-tooltip>
                    </b-nav-item>
                    <b-nav-item>
                        <b-tooltip content="Refresh">
                            <icon name="refresh"></icon>
                        </b-tooltip>
                    </b-nav-item>
                </b-nav>
            </div>
        </div>
        <hr class="separator" />
        <div class="item"
             v-for="vod in vods">
            <div class="thumb">
                <img :src="vod.thumbURL">
            </div>
            <div class="tools">
                <b-nav pills>
                    <b-nav-item title="Mark Watched"
                                v-on:click="markWatched">
                        <icon name="check"></icon>
                    </b-nav-item>
                    <b-nav-item title="Save For Later">
                        <icon name="save"></icon>
                    </b-nav-item>
                </b-nav>
            </div>
            <div class="content">
                <div class="title"><a :href="vod.yt()"
                       target="blank"
                       v-on:click="markWatched">{{vod.title}}</a></div>
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
    methods: {
        markWatched: function () {
            console.log(arguments);
        }
    },
    mounted: function () {
        this.$store.dispatch('LOAD_VOD_LIST', {})
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
    background-color: @gray-dark;
    padding: 20px;

    .header {
        position: relative;
        display: block;

        .title {
            display: inline;
            color: @gray-lighter;
        }
        .tools {
            float: right;
        }
    }

    hr.separator {
        display: block;
        height: 1px;
        border: 0;
        border-top: 1px solid @gray;
        margin: 1em 0;
        padding: 0;
    }

    .item {
        height: @item-height;
        margin: 5px 0px;
        position: relative;

        &:hover{
            .tools {
                display: block;
            }
        }

        .tools {
            display: none;
            position: absolute;
            background-color: rgba(35, 35, 35, 0.7);
            left: 0;
            width: @item-height;
            height: @item-height - 20;
            margin-left: 10px;
            margin-top: 10px;

            .nav>li>a {
                // padding: 7px 10px 5px 10px;
                color: @gray-lighter;
                &:hover{
                    background-color: transparent;
                    color: @white;
                }
            }
            .nav {
                float: right;
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
}
</style>
