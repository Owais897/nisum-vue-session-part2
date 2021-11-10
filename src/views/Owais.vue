<template>
  <div>
    <h1>{{ renderOwais() }}</h1>
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
