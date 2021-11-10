import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.directive("rainbow", {
  bind(el, binding) {
    // vnode
    // whatever you passed in colon with directive
    if (binding.arg == "color") {
      // whatever you passed in "" after = sign with directive
      if (binding.value) {
        el.style.color = binding.value;
      } else {
        el.style.color = "#" + Math.random().toString().slice(2, 8);
      }
    } else {
      el.style.color = "#" + Math.random().toString().slice(2, 8);
    }
  },
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
