import Vue from 'vue'
import Vuex from 'vuex'
import getUserInfo from '../api/user'

Vue.use(Vuex)

export default new Vuex.Store({
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