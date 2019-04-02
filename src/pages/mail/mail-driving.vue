<style scoped>

</style>
<template>
    <div>123</div>
</template>

<script>
  export default {
    name: 'mail-driving',
    data () {
      return {
        msg: '',
        arr: [{name: '', value: ''}]
      };
    },
    methods: {
      showMsg: function () {
        console.log(this.msg);
      }
    },
    computed: {
      showNum: function () {
        console.log(1 - 1);
      }
    },
    beforeCreate () {

    },
    created () {

    },
    beforeMount () {

    },
    mounted () {
      layui.use(['element', 'layer', 'laydate'], function () {
        var element = layui.element;
        var layer = layui.layer;
        var laydate = layui.laydate;
      });
    },
    beforeUpdate () {

    },
    updated () {

    },
    watch () {
    }
  };
</script>

