/**
 * Created by Jesonhu
 */
export default {
  state: {
    direction: 'forward'
  },
  actions: {
    updateDirection ({commit}, res) {
      commit('UPDATE_DIRECTION', res)
    }
  },
  mutations: {
    UPDATE_DIRECTION (state, res) {
      console.log()
      state.direction = res.direction
    }
  }
}
