import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'


//1.安装插件
Vue.use(Vuex)

const state = {
    cartList: []
}

const store = new Vuex.Store({
    state,
    actions,
    getters,
    mutations
})

export default store