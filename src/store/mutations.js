import * as types from './mutation-types'

const mutations = {
  [types.SET_SINGER](state, singer) {
    state.singer = singer
  },
  [types.SET_PRAMAS](state, pramas) {
    state.pramas = pramas
  }
}

export default mutations