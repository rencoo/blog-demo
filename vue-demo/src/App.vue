<template>
<div>
    <div class="header">
        <nav-bar></nav-bar>
        store count: {{ count }} <br/>
        store userinfo: {{ userinfo }}
        <shopcart></shopcart>
    </div>
    <div class="content">
        <div class="jump">
            <router-link :to="{name: 'manage'}">Go to manage page</router-link>
            <router-link to="/detail">Go to detail page</router-link>
        </div>
        <router-view/>
    </div>
    <div class="footer">

    </div>
</div>
</template>

<script>
import Shopcart from './components/Shopcart.vue'
import NavBar from './components/NavBar.vue'
export default {
    name: 'App.vue',
    components: {
        Shopcart,
        NavBar
    },
    computed: {
        count () {
            // return this.$store.state.count
            return this.$store.state.b.count // 模块化写法
        },
        userinfo () {
            // return this.$store.state.userinfo
            return this.$store.state.a.userinfo // 模块化写法
        }
    },
    mounted () { // created
        if (!this.$store.state.a.userinfo) { // a 模块中的状态
            console.log('----------------')
            this.$store.dispatch('userinfo')
        }
    }
}
</script>

<style>

</style>