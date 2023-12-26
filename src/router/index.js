  //import vue router
import { createRouter, createWebHistory } from 'vue-router'

//define a routes
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import( /* webpackChunkName: "home" */ '../views/home.vue')
    },
    {
        path: '/permohonans',
        name: 'permohonans.index',
        component: () => import( /* webpackChunkName: "index" */ '../views/permohonans/index.vue')
    },
    {
        path: '/permohonans/create',
        name: 'permohonans.create',
        component: () => import( /* webpackChunkName: "create" */ '../views/permohonans/create.vue')
    },
    {
        path: '/permohonans/:id/show',
        name: 'permohonans.show',
        component: () => import( /* webpackChunkName: "show" */ '../views/permohonans/show.vue')
    },
    {
        path: '/permohonans/:id/edit',
        name: 'permohonans.edit',
        component: () => import( /* webpackChunkName: "edit" */ '../views/permohonans/edit.vue')
    }
]

//create router
const router = createRouter({ 
    history: createWebHistory(),
    routes // <-- routes,
})

export default router