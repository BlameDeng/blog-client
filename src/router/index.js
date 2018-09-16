import Vue from "vue";
import Router from "vue-router";
import Index from "@/pages/Index/template.vue";
import Login from "@/pages/Login/template.vue";
import Detail from "@/pages/Detail/template.vue";
import Edit from "@/pages/Edit/template.vue";
import Create from "@/pages/Create/template.vue";
import My from "@/pages/My/template.vue";
import Register from "@/pages/Register/template.vue";
import User from "@/pages/User/template.vue";

import store from '../store';

Vue.use(Router);

const router = new Router({
    routes: [
        { path: "/", component: Index },

        { path: "/login", component: Login },

        { path: "/my", component: My, meta: { requiresAuth: true } },

        { path: "/register", component: Register },

        { path: "/detail/:blogId", component: Detail },

        { path: "/edit/:blogId", component: Edit, meta: { requiresAuth: true } },

        { path: "/create", component: Create, meta: { requiresAuth: true } },

        { path: "/user/:userId", component: User }
    ]
});

// to: Route: 即将要进入的目标 路由对象
// from: Route: 当前导航正要离开的路由
// next: Function: 一定要调用该方法来 resolve 这个钩子

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        store.dispatch('checkLogin').then(isLogin => {
            if (!isLogin) {
                next({ path: '/login', query: { redirect: to.path } })
            } else {
                next();
            }
        })
    } else {
        next();
    }
})

export default router;