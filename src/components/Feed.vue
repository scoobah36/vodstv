<template>
    <div class="feed">
        <div class="item"
             v-for="n in 100">
            <div class="thumb">
                {{n}}
            </div>
            <div class="tools">
                <b-nav pills>
                    <b-nav-item>Active</b-nav-item>
                    <b-nav-item>Link</b-nav-item>
                    <b-nav-item>Another Link</b-nav-item>
                    <b-nav-item disabled>Disabled</b-nav-item>
                </b-nav>
            </div>
            <div class="content">
                <div class="title">This is a title</div>
                <div class="subtext">by this one guy</div>
                <div class="desc">
                    <p>Call me Ishmael. Some years ago &ndash; never mind how long precisely &ndash; having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen, and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people's hats off &ndash; then, I account it high time to get to sea as soon as I can. and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people's hats off &ndash; then, I account it high time to get to sea as soon as I can. and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people's hats off &ndash; then, I account it high time to get to sea as soon as I can. and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people's hats off &ndash; then, I account it high time to get to sea as soon as I can. and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people's hats off &ndash; then, I account it high time to get to sea as soon as I can. and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people's hats off &ndash; then, I account it high time to get to sea as soon as I can. and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people's hats off &ndash; then, I account it high time to get to sea as soon as I can. and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people's hats off &ndash; then, I account it high time to get to sea as soon as I can. <i></i></p>
                </div>
    
            </div>
    
        </div>
    </div>
</template>

<script>
export default {
    name: 'feed',
    data() {
        return {
            msg: 'Welcome to Your Feed'
        }
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


.item {
    height: @item-height;
    margin: 5px 0px;
    position: relative;

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
        height: 100%;
        width: @item-height;
    }
    .content {
        float: left;
        height: 100%;
        width:~"calc(100% - @{item-height})";

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
