import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import SelectPage from '../views/select/SelectPage.vue';
import TablePage from '../views/table/TablePage.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/about/About.vue'),
    },
    {
        path: '/select',
        name: 'Select',
        component: SelectPage,
    },
    {
        path: '/table',
        name: 'Table',
        component: TablePage,
    },
];

const router = new VueRouter({
    routes,
});

export default router;
