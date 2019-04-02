<style scoped>
  .main,
  .container > header {
    width: 90%;
    max-width: 69em;

    padding: 0 1.875em 3.125em 1.875em;
  }
  .container > header {
  margin: 0 auto;
}
  .container > header {
    padding: 2.875em 1.875em 1.875em;
  }

  .container > header h1 {
    font-size: 2.125em;
    line-height: 1.3;
    margin: 0 0 0.6em 0;
    float: left;
    font-weight: 400;
  }

  .container > header > span {
    display: block;
    position: relative;
    z-index: 9999;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5em;
    padding: 0 0 0.6em 0.1em;
  }

  .container > header > span span:after {
    width: 30px;
    height: 30px;
    left: -12px;
    font-size: 50%;
    top: -8px;
    position: relative;
  }

  .container > header > span span:hover:before {
    content: attr(data-content);
    text-transform: none;
    text-indent: 0;
    letter-spacing: 0;
    font-weight: 300;
    font-size: 110%;
    padding: 0.8em 1em;
    line-height: 1.2;
    text-align: left;
    left: auto;
    margin-left: 4px;
    position: absolute;
    color: #fff;
    background: #47a3da;
  }

  .container > header nav {
    float: right;
    text-align: center;
  }

  .container > header nav a {
    display: inline-block;
    position: relative;
    text-align: left;
    width: 2.5em;
    height: 2.5em;
    background: #fff;
    border-radius: 50%;
    margin: 0 0.1em;
    border: 4px solid #47a3da;
  }

  .container > header nav a > span {
    display: none;
  }

  .container > header nav a:hover:before {
    content: attr(data-info);
    color: #47a3da;
    position: absolute;
    width: 600%;
    top: 120%;
    text-align: right;
    right: 0;
    pointer-events: none;
  }

  .container > header nav a:hover {
    background: #47a3da;
  }

  .bp-icon:after {
    font-family: 'bpicons';
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    text-align: center;
    color: #47a3da;
    -webkit-font-smoothing: antialiased;
  }

  .container > header nav .bp-icon:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    line-height: 2;
    text-indent: 0;
  }

  .container > header nav a:hover:after {
    color: #fff;
  }

  .bp-icon-next:after {
    content: "\e000";
  }
  .bp-icon-drop:after {
    content: "\e001";
  }
  .bp-icon-archive:after {
    content: "\e002";
  }
  .bp-icon-about:after {
    content: "\e003";
  }
  .bp-icon-prev:after {
    content: "\e004";
  }

  @media screen and (max-width: 55em) {

    .container > header h1,
    .container > header nav {
      float: none;
    }

    .container > header > span,
    .container > header h1 {
      text-align: center;
    }

    .container > header nav {
      margin: 0 auto;
    }

    .container > header > span {
      text-indent: 30px;
    }
  }
  .cbp_tmtimeline {
    margin: 30px 0 0 0;
    padding: 0;
    list-style: none;
    position: relative;
  }

  /* The line */
  .cbp_tmtimeline:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 10px;
    background: #afdcf8;
    left: 362px;
    margin-left: -10px;
  }

  .cbp_tmtimeline > li {
    position: relative;
  }

  /* The date/time */
  .cbp_tmtimeline > li .cbp_tmtime {
    display: block;
    width: 300px;
    padding-right: 100px;
    position: absolute;
    -ms-text-align-last: right;
    text-align-last: right;
  }

  .cbp_tmtimeline > li .cbp_tmtime span {
    position: absolute;
    text-align: right;
    top: 20px;
    right: 100px;
  }

  .cbp_tmtimeline > li .cbp_tmtime span:first-child {
    font-size: 12px;
    color: #bdd0db;
    position: absolute;
    right: 76px;
    top: 45px;
  }

  .cbp_tmtimeline > li .cbp_tmtime span:last-child {
    font-size: 1.9em;
    color: #3594cb;
  }

  .cbp_tmtimeline > li:nth-child(odd) .cbp_tmtime span:last-child {
    color: #6cbfee;
  }

  /* Right content */
  .cbp_tmtimeline > li .cbp_tmlabel {
    margin: 0 0 15px 400px;
    background: #3594cb;
    color: #fff;
    padding: 2em;
    font-size: 1.2em;
    font-weight: 300;
    line-height: 1.4;
    position: relative;
    border-radius: 5px;
  }

  .cbp_tmtimeline > li:nth-child(odd) .cbp_tmlabel {
    background: #6cbfee;
  }

  .cbp_tmtimeline > li .cbp_tmlabel h2 {
    margin-top: 0;
    padding: 0 0 10px 0;
    border-bottom: 1px solid rgba(255,255,255,0.4);
  }
.cbp_tmtimeline > li .cbp_tmlabel p {
  margin-top: 16px;
}
  /* The triangle */
  .cbp_tmtimeline > li .cbp_tmlabel:after {
    right: 100%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-right-color: #3594cb;
    border-width: 10px;
    top: 10px;
  }

  .cbp_tmtimeline > li:nth-child(odd) .cbp_tmlabel:after {
    border-right-color: #6cbfee;
  }

  /* The icons */
  .cbp_tmtimeline > li .cbp_tmicon {
    width: 40px;
    height: 40px;
    font-family: 'ecoico';
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    font-size: 1.4em;
    line-height: 40px;
    -webkit-font-smoothing: antialiased;
    position: absolute;
    color: #fff;
    background: #46a4da;
    border-radius: 50%;
    box-shadow: 0 0 0 8px #afdcf8;
    text-align: center;
    left: 362px;
    top: 0;
    margin: 0 0 0 -25px;
  }

  /* Example Media Queries */
  @media screen and (max-width: 65.375em) {
    .cbp_tmtimeline > li .cbp_tmtime span:last-child {
      font-size: 1.5em;
    }
  }

  @media screen and (max-width: 47.2em) {
    .cbp_tmtimeline:before {
      display: none;
    }

    .cbp_tmtimeline > li .cbp_tmtime {
      width: 100%;
      position: relative;
      padding: 0 0 20px 0;
    }

    .cbp_tmtimeline > li .cbp_tmtime span {
      text-align: left;
    }

    .cbp_tmtimeline > li .cbp_tmlabel {
      margin: 0 0 30px 0;
      padding: 1em;
      font-weight: 400;
      font-size: 95%;
    }

    .cbp_tmtimeline > li .cbp_tmlabel:after {
      right: auto;
      left: 20px;
      border-right-color: transparent;
      border-bottom-color: #3594cb;
      top: -20px;
    }

    .cbp_tmtimeline > li:nth-child(odd) .cbp_tmlabel:after {
      border-right-color: transparent;
      border-bottom-color: #6cbfee;
    }

    .cbp_tmtimeline > li .cbp_tmicon {
      position: relative;
      float: right;
      left: auto;
      margin: -55px 5px 0 0px;
    }
  }
/*loading-动画*/
  .index-main-content .object-container{
    position: absolute;
    left: 50%;
    top: 50%;
    width: 20px;
    height: 20px;
    margin-right: 18px;
  }
</style>

<template>
  <div class="main-content index-main-content">
    <div v-show="loading" id="loading_box">
      <div id="loading-center">
        <div id="loading-center-absolute">
          <div class="object-container" id="object_one"></div>
          <div class="object-container" id="object_two"></div>
          <div class="object-container" id="object_three"></div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="main">
        <ul class="cbp_tmtimeline" v-for="(val,index) in responseData" :key="index">
          <li>
            <time class="cbp_tmtime">登录时间
              <span>{{currentTime}}</span></time>
            <div class="cbp_tmicon layui-icon">&#xe735;</div>
            <div class="cbp_tmlabel">
              <h2>账号失效时长</h2>
              <p>{{val.ACCOUNT_FAILDAY}}天后</p>
            </div>
          </li>
          <li>
            <time class="cbp_tmtime">当前登录ip
            <span>{{val.ACCESSIP}}</span></time>
            <div class="cbp_tmicon layui-icon">&#xe6b1;</div>
            <div class="cbp_tmlabel">
              <h2>密码失效时长</h2>
              <p>{{val.PASSWORD_FAILDAY}}天后</p>
            </div>
          </li>
          <li>
            <time class="cbp_tmtime">当前时间
              <span>{{val.NOW}}</span></time>
            <div class="cbp_tmicon layui-icon">&#xe62e;</div>
            <div class="cbp_tmlabel">
              <h2>密码失效时间</h2>
              <p>{{val.PASSWORD_FAILTIME}}</p>
            </div>
          </li>
          <li>
            <time class="cbp_tmtime">账号失效时长
              <span>{{val.ACCOUNT_FAILTIME}}</span></time>
            <div class="cbp_tmicon layui-icon">&#xe64d;</div>
            <div class="cbp_tmlabel">
              <h2>角色id号</h2>
              <p>{{val.ROWID}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import config from '@/config';
  import OperatorUtils from '../../utils/OperatorUtils';
  export default {
    data () {
      return {
        responseData:null,
        responseStatus:'',
        currentTime:'',
        Authorization:OperatorUtils.getData('token'),
        type:'GetLoginInfo',
        user_code:OperatorUtils.getData('userInfo').USER_CODE,
        loading:true,
      };
    },
    computed: {

    },
    methods: {
      request(){
        var _this = this;
        layui.use('layer',function(){
          var layer = layui.layer;
          var data = {
            type:_this.type,
            usercode:_this.user_code
          };
          data=config.getUrlTrans(data);
          _this.$http.apiGet(HOST,data).then(function (res) {
            var code = res.code;
            if(code==200){
              _this.loading = false;
              _this.responseData=res.data;
            }else {
              layer.msg(res.message)
            }
          })
        })

      },
      change(){

      }
    },
    mounted () {
      this.request();
      this.currentTime=config.getNowFormatDate(OperatorUtils.getData('login_time'));
      setTimeout(()=>{
        let list = $('.layui-nav-tree .layui-nav-item')
        $.each(list,function (val, index) {
          if($(this).hasClass('layui-nav-itemed')){
            $(this).removeClass('layui-nav-itemed').find('.menu-icon').removeClass('rotate-active')
          }
        },0)
      })
    },
    components: {},
   watch:{
      $router(){
        //let list =

      }
   }
  };
</script>
