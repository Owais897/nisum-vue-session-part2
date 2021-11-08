import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    incCount(state) {
      //payload
      state.count++;
    },
    setCount(state, payload) {
      state.count = payload;
    },
  },
  actions: {
    async addRandomNumber(context) {
      let data = await fetch(
        "https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new"
      );
      data = await data.json();
      console.log("data: ", data);
      context.commit("setCount", data);
    },
  },
  getters: {
    squareState: (state, getters, rootState) => {
      console.log("rootState: ", rootState);
      console.log("getters: ", getters);
      return state.count ** 2;
    },
    squareState2: (state, getters, rootState) => {
      console.log("rootState: ", rootState);
      console.log("getters: ", getters);
      return state.count ** 3;
    },
  },
  modules: {},
});
