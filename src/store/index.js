import Vue from 'vue'
import Vuex from 'vuex'

import {INCREASE_COUNT} from 'store/mutations_types'
import { resolve } from 'url'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
  },
  getters: {
    [INCREASE_COUNT](state) {
      return state.count * 2
    },
  },
  mutations: {
    add(state) {
      state.count ++
    },
    sub(state) {
      state.count --
    },
    subNum(state, num) {
      state.count = state.count-2
    }
  },
  actions: {
    oneSecHandle(context, num) {
      return new Promise((resolve, reject) => {
        setTimeout(()=>{
          console.log(context.state.count, num)
          context.commit('subNum', num)
          resolve()
        }, 1000)
      })
    }
  },
  modules: {
  }
})
