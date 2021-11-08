import { SET_COUNTER, GET_COUNTER2 } from "@/store/mutation-types.js";
export const counter2 = {
  namespaced: true,
  state: {
    counter: 0,
  },

  mutations: {
    [SET_COUNTER]: (state) => state.counter++,
  },

  actions: {
    [SET_COUNTER]: ({ commit }) => commit(SET_COUNTER),
  },

  getters: {
    [GET_COUNTER2]: (state) => state.counter,
  },
};
