<template>
    <div>
        <p>This is manage page</p>
        store.count: {{ count }} <br/>
        <button @click="addTwo">add two</button>
    </div>
</template>

<script>
export default {
    name: 'manage',
    data () {
        return {
            price: 2,
        }
    },
    computed: {
        count () {
            // return this.$store.state.count
            return this.$store.state.b.count // 模块化写法s
        }
    },
    methods: {
        addTwo () {
            this.$store.commit('increment', { amount: this.price })
        }
    }
}
</script>

<style>

</style>