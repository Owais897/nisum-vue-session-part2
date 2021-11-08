<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{ count }}</h2>
    <button @click="incCount">increase</button>

    <br />
    <br />
    <br />
    //////////////////// example 2 for modules ///////////////////

    <div>Counter: {{ counter }}</div>
    <div>Counter2: {{ counter2 }}</div>
    <button @click="increment">increase counter</button>
    <button @click="increment2">increase Counter 2</button>
  </div>
</template>

<script>
import {
  GET_COUNTER,
  SET_COUNTER,
  GET_COUNTER2,
  COUNTER2_M,
  COUNTER_M,
} from "@/store/mutation-types";
import { mapGetters, mapActions, mapMutations, mapState } from "vuex";
export default {
  name: "About",
  props: {
    msg: String,
  },

  methods: {
    ...mapMutations(["incCount"]),
    ...mapActions({
      increment: `${COUNTER_M}${SET_COUNTER}`,
      increment2: `${COUNTER2_M}${SET_COUNTER}`,
      // increment: SET_COUNTER,
      // increment2: SET_COUNTER,
    }),
  },
  computed: {
    ...mapState(["count"]),
    ...mapGetters({
      counter: `${COUNTER_M}${GET_COUNTER}`,
      counter2: `${COUNTER2_M}${GET_COUNTER2}`,
      // counter: GET_COUNTER,
      // counter2: GET_COUNTER2,
    }),
  },
};
</script>
