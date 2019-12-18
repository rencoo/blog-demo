<template>
    <div>
        <p>
            This is shopcart component
            共享的用户信息: {{ userinfo }}
            <button @click="addThree">add three</button>
        </p>
    </div>
</template>

<script>
export default {
    name: 'shopcart',
    data () {
        return {
            price: 3
        }
    },
    props: [],
    methods: {
        addThree () {
            this.$store.commit('increment', { amount: this.price });
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

<style scoped>

</style>