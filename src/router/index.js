import Vue from "vue";
import Router from "vue-router";
import index from "@/components/index";
import eventdetails from "@/components/Events/eventdetails";
import person from "@/components/coordinators/person";

Vue.use(Router);

export default new Router({
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/",
      name: "index",
      component: index
    },
    {
      path: "/eventdetails",
      name: "eventdetails",
      component: eventdetails
    },
    {
      path: "/person",
      name: "person",
      component: person
    }
  ]
});


// To avoid Display error
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}
