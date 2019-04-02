<style scoped>
  #content {
    height: 30px;
    background: #f2f8f9;
    padding: 20px 1rem;
    border-top: 1px solid #f2f2f2;
  }
</style>
<template>
    <div id="content">
      <h1>{{msg}}</h1>
    </div>
</template>

<script>
    export default {
        name: "bottom",
        data() {
            return {
                msg: "bottom",
                arr: [{name: "register", value: "register"}]
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

