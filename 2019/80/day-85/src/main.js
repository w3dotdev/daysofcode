//
// https://vuejs.org/
//
// npm install -g @vue/cli
// vue create day85
// Manually select features (babel, SCSS, Lint, PWA, Router)
// npm run serve
//
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
