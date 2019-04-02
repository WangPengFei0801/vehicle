<style scoped>
  .levelbar-breadcrumb {
    padding: 12px 15px;
    position: absolute;
    left: 0;
  }

  .levelbar-tabs {
    padding: 0 12px 0 15px;
    position: absolute;
    right: 0;
    max-width:700px;
  }

  .levelbar-row {
    height: 30px;
    line-height: 30px;
  }

  .levelBar {
    padding: 0 10px;
    margin-left: 6px;
    font-size: 12px;
    border-radius: 2px;
    cursor: pointer;
    border:1px solid #bcc;
    color: #ccc;
    line-height: 26px;
    display: inline-block;
  }

  .Active{
    background: #909eff;
    color: #efefef;
    border: 1px solid #909eff;
  }
  .Active::before {
    content:'';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius:50%;
    background: #fff;
    margin-right: 4px;
  }
  .unActive{
    background: #fff;
    color: #333;
  }
  .level-list {
    position: relative;
    padding: 6px 15px;
    margin: 85px 5px 0 5px;
    box-shadow:0 1px 4px rgba(255, 255, 255, 0.3), 0 0 9px rgba(0, 0, 0, 0.1) inset;
  }
  .level-list:before{
    position:absolute;
    content:"";
    bottom:12px;
    left:15px;
    top:80%;
    width:45%;
    background:#9B7468;
    z-index:-1;
    -webkit-box-shadow: 0 20px 15px #eee;
    -moz-box-shadow: 0 20px 15px #eee;
    box-shadow: 0 20px 15px #eee;
    -webkit-transform: rotate(-6deg);
    -moz-transform: rotate(-6deg);
    transform: rotate(-6deg);
  }
  .level-list:after{
    -webkit-transform: rotate(6deg);
    -moz-transform: rotate(6deg);
    transform: rotate(6deg);
    right: 15px;left: auto;
  }
  .levelbar-row  a:nth-of-type(2){
    cursor: default;
  }
  .levelbar-row  a:nth-of-type(2):hover {
    color: #666;
  }
  .levelbar-row  a:nth-of-type(3){
    color: #909eff;
  }
  .levelBar:hover .icon-quxiao{
    display: block;
  }
  .levelBar {
    position: relative;
  }
  .levelBar .icon-quxiao {
    position: absolute;
    right: 4px;
    top: 0;
    font-size: 12px;
    color: #ddd;
  }
</style>
<style>
  .levelbar-tabs .ivu-tag, .levelbar-tabs .ivu-tag-border {
    height: 26px !important;
    line-height: 26px !important;
  }
</style>
<template>
 <div class="level-list clearfix">
    <p class="levelbar-row fl">
      <a  v-for="(item,index) in levelList" :key="index" :href="item.url?'#'+item.url:'javascript:;'"><i v-html="index==0?'&#xe66d;':'&#xe66e;'" class="iconfont mr-4"></i>{{item.name}}</a>
    </p>
    <div class="levelbar-tabs" v-if="showTabs">
      <p class="levelbar-row fr"  v-if="pathList!=null && pathList.length>0" v-for="(item, index) in pathList">
        <span class="levelBar" @click="tagClick(item.url)" :closable="index==hoverIndex" :class="item.url==curPath ?'Active':'unActive'" @mouseleave="()=>{setHover(null)}" @mouseenter="()=>{if(item.url!=curPath){setHover(index)}}" @on-close="handleClose(index)">{{item.name}}<!--<i @click="handleClose(index)" class="iconfont icon-quxiao ml-12 hide"></i>--></span>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'levelbar',
    props: {
      showTabs: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        levelList: null,
        pathList: [],
        curPath: '',
        hoverStatus:false,
        hoverIndex: null,
        currentIndex:0
      };
    },
    methods: {
      getBreadcrumb () {
        let matched = [];
        OperatorUtils.getMain()
        let mainUrl = OperatorUtils.getMain();
        matched.push({name: '首 页', url: mainUrl, icon: 'home'});
        let path = this.$route.path;
        let menuData = OperatorUtils.getMenuData();
        let isEditPage = false;
        if (path.indexOf('/edit') > -1) {
          path = path.replace('/edit', '');
          isEditPage = true;
        }
        this.curPath = path;
        for (let i in menuData) {
          if (menuData[i].MENU_URL == path) {
            if (menuData[i].PARENT_ID != null && menuData[i].PARENT_ID != 0) {
              for (let j in menuData) {
                if (menuData[i].PARENT_ID == menuData[j].ID) {
                  matched.push({name: menuData[j].MENU_NAME, url: menuData[j].MENU_URL, icon: menuData[j].ICON});
                }
              }
            }
            let md = {name: menuData[i].MENU_NAME, url: menuData[i].MENU_URL};
            matched.push(md);
            this.addTab(md);
          }
        }
        if (matched.length === 1 && path !== mainUrl) {
          matched.push({name: this.$route.name, url: path});
        }
        if (isEditPage) {
          matched.push({name: this.$route.query.action.title, url: this.$route.path});
        }
        this.levelList = matched;

      },
      addTab (data) {
        if (!this.showTabs || data === null) {
          return;
        }
        for (let i in this.pathList) {
          if (this.pathList[i].url === data.url) {
            return;
          }
        }
        if (this.pathList.length > 5) {
          this.pathList.splice(0, 1);
        }
        this.pathList.push(data);
      },
      tagClick (url) {
        this.$router.push(url);
        this.hoverIndex = null;
      },
      setHover (index) {
        this.hoverIndex = index;
      },
      handleClose (index) {
        if (this.pathList.length > 1) {
          this.pathList.splice(index, 1);
        }
      },
      addClass:function(index){
        this.currentIndex=index
      }
    },
    created () {
      this.getBreadcrumb();
    },
    mounted:function(){
    },
    watch: {
      $route () {
        this.getBreadcrumb();
        var currentPath = '#' + this.$route.path;
        setTimeout(function () {
          var eleArr = $('.layui-nav-tree > li');
          $.each(eleArr, function () {
            var currentElem = $(this).children('dl.layui-nav-child').find('a');
            $.each(currentElem, function (val, index) {
              var currentHref = $(this).attr('href');
              eleArr.find('dd').removeClass('layui-this');
              if (currentHref == currentPath) {
                 $(this).parents('li').addClass('layui-nav-itemed').siblings('li').removeClass('layui-nav-itemed');
                 $(this).parents('dl').prev('a').find('.menu-icon').addClass('rotate-active').parents('li').siblings('li').find('a').find('.menu-icon').removeClass('rotate-active');
              }
            });
          });
        }, 30);
      }
    },
    components: {}
  };
</script>


