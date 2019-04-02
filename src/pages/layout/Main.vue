<style scoped>
  .layout {
    background: #f2f8f9;
    position: relative;
    height: 100vh;
    overflow: hidden;
  }

  .ivu-menu-dark.ivu-menu-vertical .ivu-menu-opened {
    background-color: #333;
  }

  .layout-ceiling-main a {
    color: #9ba7b5;
  }

  .layout-right-small {
    width: 100%;
    padding-left: 42px;
    overflow: auto;
    height: 100vh;
  }
  .layout-right {
    overflow-x:hidden;
    height: 100vh;
  }
  .pl-190 {
    padding-left: 190px;
  }
  .pl-58{
    padding-left: 58px;
  }
</style>
<template>
  <div class="layout">
    <article  ref="viewBox">
      <Sidebar :menuSmall="menuSmall"></Sidebar>
        <div class="ease-in-out layout-right" :class="$store.state.menuState?'pl-190':'pl-58'">
          <Navbar :toggleClick="toggleClick"></Navbar>
          <Levelbar :showTabs="true"></Levelbar>
          <Content  :menuSmall="menuSmall"></Content>
          <copy-right></copy-right>
        </div>
    </article>
  </div>
</template>
<script>
  import {Navbar, Sidebar, Content, Levelbar} from './index.js';
  import Emitter from '@/utils/mixins/emitter';
  import copyRight from './copyRight'

  export default {
    name: 'Home',
    mixins: [Emitter],
    data () {
      return {
        menuSmall: false,
        scrollTop: null,
        isScrollTop: false
      };
    },
    props:{
      el:String
    },
    computed: {},
    methods: {
      toggleClick () {
        //this.menuSmall = !this.menuSmall;
        //alert('Main.vue中定义')
      },
      queryBacklog () {
        this.$store.dispatch('queryBacklogData', (data) => {
        });
      },
      handleScroll () {
        let scrollY = window.scrollY;
        if (scrollY > 100) {
          console.log('register')
        } else {
          console.log('login');
        }
      },
      scrollToTop() {
        let $this = this;

        // 返回顶部动画特效
        setTimeout(function animation() {
          if ($this.scrollTop > 0) {
            setTimeout(() => {

              // 步进速度
              $this.scrollTop = $this.scrollTop - 30;

              // 返回顶部
              if(document.documentElement.scrollTop > 0) {
                document.documentElement.scrollTop = $this.scrollTop - 30;
              } else if (window.pageYOffset > 0) {
                window.pageYOffset = $this.scrollTop - 30;
              } else if (document.body.scrollTop > 0) {
                document.body.scrollTop = $this.scrollTop - 30;
              } else if (document.querySelector($this.el).scrollTop) {
                document.querySelector($this.el).scrollTop = $this.scrollTop - 30;
              }

              animation();
            }, 1);
          }
        }, 1);
      }
    },
    created () {
      this.$on('on-query-backlog', (data) => {
        this.queryBacklog();
      });
      this.queryBacklog();
    },
    mounted(){
    },
    components: {
      Navbar,
      Sidebar,
      Content,
      Levelbar,
      copyRight
    }
  };
</script>
