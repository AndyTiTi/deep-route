import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import Menu from "./components/Menu.vue"; //引入Menu组件
import Admin from "./components/Admin.vue";
import About from "./components/about/About.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";

//二级路由
import Contact from "./components/about/Contact.vue";
import Delivery from "./components/about/Delivery.vue";
import History from "./components/about/History.vue";
import OrderingGuide from "./components/about/OrderingGuide.vue";

//三级路由
import Phone from "./components/about/contact/Phone.vue";
import PersonName from "./components/about/contact/PersonName.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", name: "homeLink", component: Home },
    { path: "/menu", name: "menuLink", component: Menu },
    { path: "/admin", name: "adminLink", component: Admin },
    {
      path: "/about",
      name: "aboutLink",
      redirect: "/about/contact",
      component: About,
      children: [
        //表示about页面中默认跳转到/about/contact 这个路由页面下。
        {
          path: "/about/contact",
          name: "contactLink",
          redirect: "/personName",
          component: Contact,
          children: [
            //在/about/contact页面中默认展现三级路由personName 的内容。
            { path: "/phone", name: "phoneNumber", component: Phone },
            { path: "/personName", name: "personName", component: PersonName }
          ]
        },
        { path: "/history", name: "historyLink", component: History },
        { path: "/delivery", name: "deliveryLink", component: Delivery },
        {
          path: "/orderingGuide",
          name: "orderingGuideLink",
          component: OrderingGuide
        }
      ]
    },
    { path: "/login", name: "loginLink", component: Login },
    { path: "/register", name: "registerLink", component: Register },
    { path: "*", redirect: "/" }
  ]
});
