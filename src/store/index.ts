import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userId: '',
    userName: ''
  },
  getters: {
    getUserId: state => state.userId,
    getUserName: state => state.userName
  },
  mutations: {
    setUserId (state, userId) {
      state.userId = userId
    },
    setUserName (state, name) {
      state.userName = name
    }
  },
  actions: {
  },
  modules: {
  }
})
