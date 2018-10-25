import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Home from "./views/Home.vue";
import Services from "./views/Services.vue";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/services",
      name: "services",
      component: Services
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    }
  ]
});
