import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/Index";
import Addsmoothie from "@/components/AddSmoothie";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index
    },
    {
      path: "/add-smoothie",
      name: "AddSmoothie",
      component: Addsmoothie
    }
  ]
});
