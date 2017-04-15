import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import g from 'genesis-object'
import Vod from '../models/Vod'

Vue.use(Vuex)
var api = axios.create({
    url: '',
    baseURL: process.env.API_URL,
    timeout: 9000
});

const store = new Vuex.Store({
    state: g(function () {
        var self = {
            query: '',
            vods: [Vod]
        }
        return self
    }).create(),
    actions: {
        LOAD_VOD_LIST: function ({ commit }, query) {
            api.post("vods", query).then(function (response) {
                commit('SET_VOD_LIST', {
                    list: response.data
                })
            });

        }
    },
    mutations: {
        SET_VOD_LIST: (state, { list }) => {
            list.forEach(function (vod) {
                state.vods.pushCreate(vod)
            }, this);
        }
    },
    getters: {
        filteredVods: state => {
            return state.vods.filter(vod => vod.title != "")
        }
    }
})
export default store