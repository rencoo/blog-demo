<template>
  <div>
      <p>This is Detail page</p>
      store.count: {{ count }}
  </div>
</template>

<script>
export default {
    name: 'detail',
    data () {
        return {
            
        }
    },
    computed: {
        count () {
            // return this.$store.state.count
            return this.$store.state.b.count // 模块化写法
        }
    }
}
</script>

<style>

</style>