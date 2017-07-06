import Cookie from '../../plugins/cookie'

const state = {
  localUserInfo: Cookie.getLocal() || {}
}
const actions = {
  setUserInfo ({commit}, res) { // 获取用户信息
    Cookie.setLocal(res)
    commit('SET_USER', res)
  },
  removeUserInfo ({ commit }) { // 注销
    Cookie.removeLocal()
    commit('REMOVE_USER')
  }
}
const getters = {
  localUserInfo: (state) => {
    state.localUserInfo
  }
}
const mutations = {
  SET_USER (state, res) {
    state.localUserInfo = res
  },
  REMOVE_USER (state) {
    state.localUserInfo = {}
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}

