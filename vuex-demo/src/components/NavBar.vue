<template>
  <div>
        <p>
            This is nav component
            共享的用户信息: {{ userinfo }}
            <button @click="addOne">add one</button>
            <button @click="addTenAsync">add ten async</button>
        </p>
  </div>
</template>

<script>
export default {
    name: 'nav-bar',
    data () {
        return {
            price: 1
        }
    },
    methods: {
        // addOne () {
        //     this.$store.commit('increment', { amount: this.price })
        // }
        addOne () {
            this.$store.dispatch('increment', { amount: this.price })
        },
        addTenAsync () {
            this.$store.dispatch('incrementAsync')
        }
    },
    computed: {
        userinfo () {
            // return this.$store.state.userinfo
            return this.$store.state.a.userinfo // 模块化写法
        }
    }
}
</script>

<style>

</style>