<template>
  <div>
    <keep-alive>
      <component :is="componentName"></component>
    </keep-alive>
    <button @click="componentName = 'c1'">show c1</button>
    <button @click="componentName = 'c2'">show c2</button>
  </div>
</template>

<script>
import c1 from "../components/DynamicComponent1.vue";
import c2 from "../components/DynamicComponent2.vue";
export default {
  components: {
    c1,
    c2,
  },
  data() {
    return {
      componentName: "c1",
    };
  },
};
</script>

<style></style>
