<style scoped>
  .layout-content {
    margin: 10px 5px;
    min-height: 660px;
    position: relative;
  }

  .layout-content-main {
    height: 100%;
  }
  /*fade*/
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.28s;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }

  /*fade-transform*/
  .fade-transform-leave-active,
  .fade-transform-enter-active {
    transition: all .7s;
  }
  .fade-transform-enter {
    opacity: 0;
    transform: translateX(-30px);
  }

  .fade-transform-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }

  /*breadcrumb transition*/
  .breadcrumb-enter-active,
  .breadcrumb-leave-active {
    transition: all .5s;
  }

  .breadcrumb-enter,
  .breadcrumb-leave-active {
    opacity: 0;
    transform: translateX(20px);
  }

  .breadcrumb-move {
    transition: all .5s;
  }

  .breadcrumb-leave-active {
    position: absolute;
  }
</style>

<template>
  <div class="layout-content">
    <div class="layout-content-main">
      <transition name="fade-transform" mode="out-in">
          <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  import config from '@/config';

  export default {
    name: 'content',
    props: ['menuSmall'],
    created () {

    },
    data () {
      return {
        footerText: config.footerText
      };
    },
    methods: {}
  };
</script>
