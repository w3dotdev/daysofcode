// Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web.
// https://vuejs.org/
//
// npm install -g @vue/cli
// vue create day85
// Manually select features (babel, SCSS, Lint, PWA, Vuex, Router)
// npm run serve
// http://localhost:8080/
//
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
