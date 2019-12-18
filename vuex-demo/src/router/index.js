import Vue from 'vue'
import Router from 'vue-router'

import Manage from '../pages/Manage.vue'
import Detail from '../pages/Detail.vue'

Vue.use(Router)

const routes = [
    {
        path: '/',
        redirect: '/manage',
    },
    {
        path: '/manage',
        name: 'manage',
        component: Manage,
    },
    {
        path: '/detail',
        name: 'detail',
        component: Detail
    }
]

export default new Router({
    routes
})