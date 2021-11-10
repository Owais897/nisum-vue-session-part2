<template>
  <div>
    <h1 v-rainbow>{{ renderOwais() }}</h1>
  </div>
</template>

<script>
import Mixins from "../mixins";
export default {
  methods: {
    renderOwais() {
      return "hello owais";
    },
  },
  mixins: [Mixins],
};
</script>

<style></style>
