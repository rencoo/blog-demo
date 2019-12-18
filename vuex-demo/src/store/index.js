import Vue from 'vue'
import Vuex from 'vuex'
import getUserInfo from '../api/user'

Vue.use(Vuex)

const moduleA = {
    state: {
        userinfo: null // 需要初始化响应式数据
    },
    mutations: {
        userinfo: function (state, options) {
            state.userinfo = options;
            localStorage.userinfo = JSON.stringify(state.userinfo);
        }
    },
    actions: {
        async userinfo (context) {
            let response = await getUserInfo()
            console.log(response)
            if (response.ok) {
                let json = await response.json()
                context.commit('userinfo', json)
            }
        }
    },
    getters: { // 取到数据, 类似于getter; 过滤数据

    }
}

const moduleB = {
    state: {
        count: 1
    },
    mutations: {
        increment: function (state, payload) {
            state.count += payload.amount;
        },
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
    },
    getters: {
        doubleCount (state) {
            return state.count * 2
        }
    }
}

export default new Vuex.Store({
    modules: {
        a: moduleA,
        b: moduleB, 
    }
})

// store.state.a // -> moduleA 的状态
// store.state.b // -> moduleB 的状态