<style scoped>

</style>
<template>
  <article class="main-content">
    <div class="main-content-left">{{msg}}</div>
    <div class="main-content-right">{{msg}}</div>
  </article>

</template>

<script>
    export default {
        name: "modules",
        data() {
            return {
                msg: "modules",
                arr: [{name: "modules", value: "modules"}]
            }
        },
        methods: {
            showMsg: function () {
                console.log(this.msg)
            }
        },
        computed: {
            showNum: function () {
                console.log(1 - 1)
            }
        },
        beforeCreate() {

        },
        created() {

        },
        beforeMount() {

        },
        mounted() {
            layui.use(['element', 'layer', 'laydate'], function () {
                var element = layui.element;
                var layer = layui.layer;
                var laydate = layui.laydate
            })
        },
        beforeUpdate() {

        },
        updated() {

        },
    }
</script>

