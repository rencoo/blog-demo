import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// runtime 模式; Vue 2.x
new Vue({
    el: '#app',
    router,
    store,
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