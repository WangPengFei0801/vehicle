<style rel="stylesheet/scss" lang="scss" scoped>
  $sidebarWidth: 160px;
  $sidebarSmallWidth: 42px;
  $sliderBarBgc: #f4f4f4;
  .hide{
    display: none!important;
  }
  .layui-nav-tree {
    width: 190px;
    position: fixed;
    height: 100%;
    float: left;
    padding-bottom: 200px;
    top:0;
    z-index: 1001;
  }

  .menu-acitve {
    text-shadow: rgba(0, 0, 0, .25) 0 -1px 0;
    background: linear-gradient(#334556, #2C4257), #101529;
    box-shadow: rgba(0, 0, 0, .25) 0 1px 0, inset rgba(255, 255, 255, .16) 0 1px 0;
  }

  .layui-nav-tree .layui-nav-item > a {
    padding-left: 54px;
    font-family: "Microsoft Yahei" !important;
  }

  .layui-nav-item > a {
    font-size: 14px;

  }

  .layui-nav-tree .layui-nav-item a > i {
    position: absolute;
    left: 16px;
  }

  .layui-nav dl > dd > a i {
    font-size: 15px;
    width: 20px;
    display: inline-block;
  }

  .icon-yiquxiao2 {
    font-size: 12px !important;
  }

  .layui-nav dl > dd > a span {
    font-size: 12px;
  }

  .layui-nav .menu-icon {
    position: absolute;
    right: 20px;
    font-size: 16px;
  }

  .layui-nav .menu-icon {
    font-size: 16px;
  }

  .slider-top {
    height: 62px;
    background-color: #101529;
    width: 190px;
    font-size: 26px;
    font-style: italic;
    font-weight: bold;
    color: #fff;
    text-align: center;
    line-height: 60px;
    letter-spacing: 2px;
  }

  .userLogo {
    width: 36px;
    height: 36px;
    display: inline-block;
    border: 1px solid #fff;
    border-radius: 50%;
    background: #73879C;
    font-size: 22px;
    text-align: center;
    line-height: 36px;
  }

  .user-wrapper span {
    width: 120px;
    display: inline-block;
    height: 38px;
    line-height: 38px;
    vertical-align: top;
  }

  .user-wrapper span > i:nth-child(1) {
    vertical-align: middle;
  }

  .layui-nav-itemed > .layui-nav-child {
    background: #101529;
    animation: change 1.5s forwards linear;
  }

  .layui-nav .layui-nav-child dd.layui-this a {
    background: rgba(255, 255, 255, .05);
  }

  .user-wrapper {
    padding: 10px 0 10px 10px;
  }

  .rotate-active {
    transform: rotate(180deg);
    transition: all .4s;

  }

  .rotate-active-remove {
    transform: rotate(0deg);
    transition: all 0.8s;
  }

  @keyframes change {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .layui-nav-itemed > a.active {
    text-shadow: rgba(0, 0, 0, .25) 0 -1px 0;
    background: linear-gradient(#334556, #2C4257), #101529;
    box-shadow: rgba(0, 0, 0, .25) 0 1px 0, inset rgba(255, 255, 255, .16) 0 1px 0;
    margin-bottom: 5px;
  }

  /*菜单的展开和缩放*/
  .spread {
    width: 190px;
    //transition:all 100ms;
  }

  .shrink {
    width: 58px;
    //transition:all 30ms;
  }

  .layui-nav-tree.shrink .layui-nav-item > a {
    height: 50px;
    line-height: 50px;
  }

  .layui-nav-tree.shrink .layui-nav-item a > i {
    left: 16px;
    font-size: 24px;
  }

  @keyframes showChange {
    from {
      width: 190px
    }
    to {
      width: 190px
    }
  }

  .another-second-page-box {
    background-color: #293E53;
    position: absolute;
    right: -160px;
    top: 0;
    width: 160px;
  }

  .another-second-page-box li {
    padding: 4px 0 2px 0;
  }

  .another-second-page-box li:nth-child(1) {
    padding-top: 6px;
  }

  .another-second-page-box li:last-child {
    padding-bottom: 6px;
  }

  .another-second-page-box li > a {
    white-space: nowrap;
    overflow: hidden;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    height: 38px;
    line-height: 38px;
    padding-left: 30px;
    position: relative;
  }

  .another-second-page-box li > a::before {
    background: #425668;
    content: "";
    height: 8px;
    left: 12px;
    margin-top: 15px;
    position: absolute;
    right: auto;
    width: 8px;
    z-index: 1;
    border-radius: 50%;
    top: 0px;
  }

  .another-second-page-box li > a::after {
    border-left: 1px solid #425668;
    bottom: 0;
    content: "";
    left: 16px;
    position: absolute;
    top: 0;
  }
</style>

<template>
  <div ref="menuContent" class="ease-in-out" :class="{'layout-menu-left-small': menuSmall && !menuHover}"
       id="menu_content" v-on:mouseleave="()=>{setMenuHover(false)}" v-on:mouseenter="()=>{setMenuHover(true)}">

    <ul :class="$store.state.menuState?'spread':'shrink'" :accordion="true" :active-name="activeName"
        :open-names="openNames" theme="primary"
        class="layui-nav layui-nav-tree layui-inline" id="sliderBar" lay-filter="sideBar">
      <div :class="$store.state.menuState?'d_i_b':'hide'" class="slider-top">方图后台</div>
      <li :class="$store.state.menuState?'spread':'shrink'" class="">
        <div class="user-wrapper">
          <div class="profile-image C-white"><i class="userLogo iconfont" alt="">&#xe65e;</i><span
            :class="$store.state.menuState?'show':'hide'" class="vt ml-16"><i class="d_i_b">{{userData.NAME}}</i></span>
          </div>
        </div>
      </li>
      <li @mouseleave="mouseLeave($event)" class="layui-nav-item hvr-shutter-out-horizontal"
          v-for="(item,index) in menuData" :name="item.id" :key="item.id">
        <a :class="$store.state.menuState?'active':''" href="javascript:;" @mouseenter="mouseEnter($event)"
           @click="show($event)" class="color-333 itemed-child"><i v-html="item.iconCls" class="iconfont"></i><span
          :class="$store.state.menuState?'show':'hide'" class="item-name">{{item.name}}</span><u
          :class="$store.state.menuState?'show':'hide'" class="iconfont menu-icon">&#xe661;</u></a>
        <dl :class="$store.state.menuState?'show':'hide'" class="layui-nav-child">
          <dd v-for="childrenItem in item.children">
            <router-link :to="childrenItem.url" :key="childrenItem.id">
              <p @click="get_menu_id($event)" class="second-menu-item" :name="childrenItem.id" :key="childrenItem.id">
                <i v-html="childrenItem.iconCls" class="iconfont"></i>
                <span class="ml-14">{{childrenItem.title}}</span>
              </p>
            </router-link>
          </dd>
        </dl>
        <div class="another-second-page-box hide">
          <ul>
            <li v-for="childrenItemS in item.children" :name="childrenItemS.id" :key="childrenItemS.id">
              <router-link :to="childrenItemS.url" :key="childrenItemS.id">
                {{childrenItemS.title}}
              </router-link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  import http from '../../utils/HttpUtils';
  import OperatorUtils from '../../utils/OperatorUtils';
  import config from '@/config';

  export default {
    name: 'sidebar',
    props: ['menuSmall'],
    data () {
      return {
        userData: OperatorUtils.getData('userInfo'),
        menuHover: false,
        menuData: '',
        activeName: '',
        role_id: '',
        current_menu_id: null,
        transition: false,
        openNames: [],
        home: 'index',
        index: '首页 ',
        userOption: {
          userLogoSrc: './static/assets/img/header-test.gif',
          color: 'color-333',
          classOption: 'rotate-active'
        }
      };
    },
    created: function () {
      this.updateCurMenu();

    },
    mounted: function () {
      this.getMenuData();
      this.menuStatus();
      layui.use('element', function () {
        var element = layui.element;
        element.init();
        element.on('nav(sideBar)', function (data) {
        });
      });

    },
    computed: {},
    methods: {
      setMenuHover (hover) {
        if (this.menuSmall) {
          this.menuHover = hover;
        }
      },
      getMenu (path) {
        let menu = OperatorUtils.getMenuData();
        for (let i = 0; i <= menu.length; i++) {
          if (menu[i] != null && menu[i].url == path) {
            return menu[i];
          }
        }
      },
      updateCurMenu () {
        let curMenu = this.getMenu(this.$router.currentRoute.path);
        if (curMenu != null) {
          this.activeName = curMenu.id;
          this.openNames = [curMenu.parentId];
          this.$nextTick(() => {
            //this.$refs['menu'].updateOpened();
          });
        } else {
          this.activeName = '';
        }
      },
      show: function (e) {
        let child = e.currentTarget.firstElementChild.nextElementSibling.nextElementSibling;
        let father = e.currentTarget.parentElement;
        var targetClass = '';
        targetClass = father.className.split(' ')[2];
        father = $(father);
        if (!targetClass) {
          child.classList.remove('rotate-active-remove');
          child.classList.add('rotate-active');
          father.siblings('li').removeClass('layui-nav-itemed').find('.menu-icon').removeClass('rotate-active')
        } else {
          child.classList.remove('rotate-active');
          child.classList.add('rotate-active-remove');

        }

      },
      getMenuData: function () {
        var _this = this;
        var data = OperatorUtils.getData('userMenu');
        _this.menuData = data;
      },
      menuStatus: function () {
        var currentPath = '#' + this.$route.path;
        setTimeout(function () {
          var eleArr = $('.layui-nav-tree > li');
          $.each(eleArr, function () {
            var currentElem = $(this).children('dl.layui-nav-child').find('a');
            $.each(currentElem, function (val, index) {
             var currentHref = $(this).attr('href');
              if (currentHref == currentPath) {
                $(this).parents('li').addClass('layui-nav-itemed');
                $(this).parents('dl').prev('a').find('.menu-icon').addClass('rotate-active');
              }
            });
          });
        }, 30);
      },
      get_menu_id: function (e) {
        var current_id = e.currentTarget.getAttribute('name');
        this.$store.state.current_id = current_id;
        this.current_menu_id = current_id;
        this.role_id = OperatorUtils.getData('userInfo').ROLEID;
        var data = {
          type: 'GetMenuBtn',
          rid: this.role_id,
          mid: this.current_menu_id
        };
        data = config.getUrlTrans(data);
        var _this = this;
        this.$http.apiGet(HOST, data).then(function (response) {
          var code = response.code;
          if (code == 200) {
            OperatorUtils.setData('btnList', response.data);
          }
        });
      },
      mouseEnter (event) {
        var status = this.$store.state.menuState;
        var $this = event.currentTarget.nextElementSibling.nextElementSibling;
        $this = $($this);
        if (!status) {
          $this.removeClass('hide').show('normal');
        } else {
          $this.removeClass('show').addClass('hide');
        }
      },
      mouseLeave (event) {
        var status = this.$store.state.menuState;
        if (!status) {
          var $this = event.currentTarget;
          $this = $($this);
          $this.find('.another-second-page-box').removeClass('show').addClass('hide');
        } else {
          return false;
        }

      }
    },
    watch: {
      $route () {
        this.updateCurMenu();
        this.menuStatus();
      }
    },
    updated () {
      layui.use('element', function () {
        var element = layui.element;
        element.init();
      });
    },
    filters: {
      iconSet: function (val) {
        if (val == '') {
          return 'help-buoy';
        }
      }
    },
    components: {}
  };
</script>


