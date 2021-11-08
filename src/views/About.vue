<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{ count }}</h2>
    <button @click="incCount">increase</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "About",
  props: {
    msg: String,
  },
  computed: {
    ...mapState(["count"]),
  },
  methods: {
    ...mapMutations(["incCount"]),
  },
};
</script>
