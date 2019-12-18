// store 与 router 没有模块化
import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'

import Manage from './pages/Manage.vue'
import Detail from './pages/Detail.vue'

import getUserInfo from './api/user'

Vue.use(Router)
Vue.use(Vuex)

const router = new Router({
    // mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/manage' // 前端重定向至
        },
        {
            path: '/manage',
            component: Manage
        },
        {
            path: '/detail',
            component: Detail
        }
    ]
})
const store = new Vuex.Store({
    state: {
        count: 0,
        userinfo: null // 需要初始化响应式数据
    },
    actions: {
        increment: function (context, payload) {
            context.commit('increment', payload)
        },
        incrementAsync: function (context) {
            // 异步请求数据
            setTimeout(() => {
                var amount = 10; // 异步请求数据
                context.commit('increment', { amount })
            }, 1000)
        },
        async userinfo (context) {
            let response = await getUserInfo()
            console.log(response)
            if (response.ok) {
                let json = await response.json()
                context.commit('userinfo', json)
            }
        }
    },
    mutations: {
        increment: function (state, payload) {
            state.count += payload.amount;
        },
        userinfo: function (state, options) {
            state.userinfo = options;
            localStorage.userinfo = JSON.stringify(state.userinfo);
        }
    },
});

// runtime 模式; Vue 2.x
new Vue({
    el: '#app',
    router, // 注入路由器; 任何组件内通过 this.$router 访问路由器; this.$route 访问当前路由
    store, // 注入store; this.$store
    render: function (h) {
        return h(App);
    }
});

// compiler 模式
// new Vue({
//     el: '#app',
//     components: { App },
//     tempalte: '<App>'
// });