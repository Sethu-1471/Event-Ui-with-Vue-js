// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
Vue.use(Vuetify);
Vue.config.productionTip = false
Vue.prototype.color2 = "#211D2A";
(Vue.prototype.color1 = "#211D2A"),
  new Vue({
    el: "#app",
    router,
    components: { App },
    template: "<App/>"
  });
