
<style scoped>
  .login-panel .ivu-btn-primary {
    color: #fff;
    background-color: #222;
    border-color: #111;
  }

  .login-panel .ivu-btn-primary:hover {
    color: #fff;
    background-color: #444;
    border-color: #333;
  }

  #app {
    height: 100%;
  }

  canvas {
    pointer-events: none;
  }

  a, a:focus {
    position: fixed;
    top: 0;
    left: 0;
    margin: 25px;
    color: #ddd;
  }

  .controls {
    width: 500px;
    display: inline-block;
    position: absolute;
    top: 20px;
    left: 50%;
  }

  .layout, .login-page {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color:#409eff;
    background-size: cover;
    background-position: 50%;
    padding-top: 10%;
  }

  .login-panel {
    position: relative;
    z-index: 99;
    margin: 0 auto;
    width: 390px;
    top: 10%;
    padding: 30px 34px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 5px;
    box-shadow: 0 0 100px rgba(255, 255, 255, 0.4);
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    transform-style: preserve-3d;
    transform:translate(0);
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transition-duration: 1s;
    -moz-transition-duration: 1s;
    -ms-transition-duration: 1s;
    -o-transition-duration: 1s;
    transition-duration: 1s;
    animation:1.5s window ease-in-out backwards;
    transition-property: height,width;
  }
  .captchaImage {
    float: right;
    padding: 0 1px;
    border-radius: 4px 4px 4px 4px;
    position: absolute;
    right: 1px;
    top: 3px;
  }

  .captchaImage:hover {
    cursor: pointer;
  }

  .login-title {
    text-align: center;
  }

  .layout-footer {
    position: fixed;
    bottom: 0;
    text-align: center;
    color: #9ea7b4;
    width: 100%
  }

  .layout-login {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
  }

  #username {
    width: 100%
  }

  .login-title-word {
    color: #222;
    font-size: 20px;
    text-align: center;
    padding-bottom: 20px;
  }

  #code {
    width: 240px;
  }

  .layui-form-item .iconfont {
    position: absolute;
    top: 7px;
    left: 10px;
    color: #bbb;
  }

  .layui-form input {
    padding-left: 34px;
  }

  #username:focus {
    color: #333;
  }
  #canvas {

  }
  #holder {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

  }
.fadeIn {
  -webkit-animation: 1s fadeIn backwards;
  -o-animation: 1s fadeIn backwards;
  animation: 1s fadeIn backwards;
}
  .delay-2s {
    animation-delay: 1.6s;
  }
</style>
<style>
  body {
    position: relative;
    overflow: hidden;
  }
</style>
<template>
  <div class="login-page">
    <div class="login-panel">
      <div class="layout-logo">
        <h1 class="login-title-word fwb fadeIn delay delay-2s">系统登录</h1>
      </div>
      <form ref="formLogin" :model="formLogin" class="layui-form" action="">
        <div class="layui-form-item display_block fadeIn delay-2s">
          <div class="layui-block w-100p pore">
            <i class="iconfont">&#xe600;</i>
            <input @blur="leaveChange($event)" @focus="enterChange($event)" type="text" name="title"
                   v-model="formLogin.username" lay-verify="title" id="username" autocomplete="off" placeholder="请输入用户名"
                   class="layui-input">
          </div>
        </div>
        <div class="layui-form-item pore display_block  fadeIn delay-2s">
          <div class="layui-block w-100p">
            <i class="iconfont">&#xe63e;</i>
            <input @blur="leaveChange($event)" @focus="enterChange($event)" type="password" name="password"
                   v-model="formLogin.password" lay-verify="required" id="password" placeholder="请输入密码"
                   autocomplete="off" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item display_block">
          <div class="layui-block pore fadeIn delay-2s">
            <i class="iconfont">&#xe612;</i>
            <input @blur="leaveChange($event)" @focus="enterChange($event)" type="tel" v-model="formLogin.captcha"
                   name="code" lay-verify="" id="code" placeholder="请输入右侧的验证码" autocomplete="off" class="layui-input">
            <img class="captchaImage" :src="captchaUrl" @click="getCode" title="点击更换验证码">
          </div>
        </div>
        <div>
          <button class="layui-btn delay-2s fadeIn" type="primary" style="width: 100%" @click.prevent="toUpperCase($event)"  v-html="dataBase.login">
          </button>
        </div>
      </form>
    </div>
    <div id="canvas">
      <div id="holder"></div>
    </div>
  </div>
</template>
<script>
  import config from '@/config';
  import http from '../utils/HttpUtils';
  import OperatorUtils from "../utils/OperatorUtils";
  import md5 from 'js-md5';
  import {login} from '../mock/modules/common';
  export default {
    data() {
      return {
        captchaUrl: '',
        captchaEnable: config.captchaEnable,
        loading: false,
        footerText: config.footerText,
        dataBase: {mag: 'welcome to here', login: '登录'},
        dataAll: {},
        formLogin: {
          username: '',
          password: '',
          captcha: ''
        }
      };
    },
    methods: {
      getCode() {
       var _this = this;
       let url =HOST;
        var data = config.getUrlTrans({type:'getCode'})
         this.captchaUrl='./static/layui/layui/css/modules/layer/default/loading-1.gif';
           this.$http.apiGet(url,data).then(function (res) {
             let data = res.data;
             _this.captchaUrl = url+'?type=getCode';
           })
      },
      toUpperCase(e) {
        var _this = this;
        let data = {
          loginname: this.formLogin.username,
          password: this.formLogin.password==''?'':md5(this.formLogin.password),
          code: this.formLogin.captcha
        };
        if (data.username == '') {
          layer.tips('请输入用户名', '#username', {
            tips: [1, '#459eff'],
            time: 2000
          });
          return;
        }
        if (data.password == '') {
          layer.tips('请输入密码', '#password', {
            tips: [1, '#459eff'],
            time: 2000
          });
          return;
        }
        if (data.captcha == '') {
          layer.tips('请输入右侧验证码', '#code', {
            tips: [1, '#459eff'],
            time: 2000
          });
          return;
        }
        this.dataBase.login='登录中<img class="ml-10" src="./static/assets/img/loading.gif">'
        let newData = config.urlTransition('login',data)
        let url = HOST;
      this.$http.apiPost(url,newData).then(function(res){
        let status = res.code;
        var menuData = {};
        if(status==200){
          $('#app').remove('#container')
          let userMenu = res.data.userMenu;
          let userInfo = res.data.userInfo[0];
          let userRole = res.data.userRole;
          let userResource = res.data.userResource;
          let sliderBar = res.data.sliderbar
          let username = userInfo.NAME;
          let login_time = new Date();
          var token = res.Token;
          _this.dataBase.login='登录成功，即将跳转!'
          OperatorUtils.setData('menuData',sliderBar);
          OperatorUtils.setData('userInfo',userInfo)
          OperatorUtils.setData('userData', {"userName": username, "main": ["/index"]});
          OperatorUtils.setData('userMenu',userMenu)
          OperatorUtils.setData('token', token);
          OperatorUtils.setData('login_time',login_time)
         _this.$nextTick(function () {
           $('#canvas').empty();
         })
          _this.$router.push('/index')
        }else if(status!=200){
          setTimeout(function () {
            layer.msg(res.message);
            _this.getCode();
            _this.dataBase.login='重新尝试?'
          },1000);
        }
      })
      },
      enterChange: function (event) {
        let el = event.currentTarget.previousElementSibling
        el.style.color = '#333';
        el.style.transition = 'all .8s';
      },
      leaveChange: function (event) {
        let el = event.currentTarget.previousElementSibling
        if (event.currentTarget.value == '') {
          el.style.color = '#bbb';
          el.style.transition = 'all .8s'
        }
      },
      /*canvas(){
        (function () {
          var $this = window;
          var pi = Math.PI;
          var pi2 = 2 * Math.PI;

          $this.Waves = function (holder, options) {
            var Waves = this;

            Waves.options = extend(options || {}, {
              resize: false,
              rotation: 45,
              waves: 5,
              width: 100,
              hue: [11, 14],
              amplitude: 0.5,
              background: true,
              preload: true,
              speed: [0.004, 0.008],
              debug: false,
              fps: false,
            });

            Waves.waves = [];

            Waves.holder = document.querySelector(holder);
            Waves.canvas = document.createElement('canvas');
            Waves.ctx = Waves.canvas.getContext('2d');
            Waves.holder.appendChild(Waves.canvas);

            Waves.hue = Waves.options.hue[0];
            Waves.hueFw = true;
            Waves.stats = new Stats();

            Waves.resize();
            Waves.init(Waves.options.preload);

            if (Waves.options.resize)
              window.addEventListener('resize', function () {
                Waves.resize();
              }, false);

          };

          Waves.prototype.init = function (preload) {
            var Waves = this;
            var options = Waves.options;

            for (var i = 0; i < options.waves; i++)
              Waves.waves[i] = new Wave(Waves);

            if (preload) Waves.preload();
          };

          Waves.prototype.preload = function () {
            var Waves = this;
            var options = Waves.options;

            for (var i = 0; i < options.waves; i++) {
              Waves.updateColor();
              for (var j = 0; j < options.width; j++) {
                Waves.waves[i].update();
              }
            }
          };

          Waves.prototype.render = function () {
            var Waves = this;
            var ctx = Waves.ctx;
            var options = Waves.options;

            Waves.updateColor();
            Waves.clear();

            if (Waves.options.debug) {
              ctx.beginPath();
              ctx.strokeStyle = '#409eff';
              ctx.arc(Waves.centerX, Waves.centerY, Waves.radius, 0, pi2);
              ctx.stroke();
            }

            if (Waves.options.background) {
              Waves.background();
            }

            each(Waves.waves, function (wave, i) {
              wave.update();
              wave.draw();
            });
          };

          Waves.prototype.animate = function () {
            var Waves = this;

            Waves.render();

            window.requestAnimationFrame(Waves.animate.bind(Waves));
          };

          Waves.prototype.clear = function () {
            var Waves = this;
            Waves.ctx.clearRect(0, 0, Waves.width, Waves.height);
          };

          Waves.prototype.background = function () {
            var Waves = this;
            var ctx = Waves.ctx;

            var gradient = Waves.ctx.createLinearGradient(0, 0, 0, Waves.height);
            gradient.addColorStop(0, '#409eff');
            gradient.addColorStop(1, Waves.color);

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, Waves.width, Waves.height);
          };

          Waves.prototype.resize = function () {
            var Waves = this;
            var width = Waves.holder.offsetWidth;
            var height = Waves.holder.offsetHeight;
            Waves.scale = window.devicePixelRatio || 1;
            Waves.width = width * Waves.scale;
            Waves.height = height * Waves.scale;
            Waves.canvas.width = Waves.width;
            Waves.canvas.height = Waves.height;
            Waves.canvas.style.width = width + 'px';
            Waves.canvas.style.height = height + 'px';
            Waves.radius = Math.sqrt(Math.pow(Waves.width, 2) + Math.pow(Waves.height, 2)) / 2;
            Waves.centerX = Waves.width / 2;
            Waves.centerY = Waves.height / 2;
            //Waves.radius /= 2; // REMOVE FOR FULLSREEN
          };

          Waves.prototype.updateColor = function () {
            var Waves = this;

            Waves.hue += (Waves.hueFw) ? 0.01 : -0.01;

            if (Waves.hue > Waves.options.hue[1] && Waves.hueFw) {
              Waves.hue = Waves.options.hue[1];
              Waves.Waves = false;
            } else if (Waves.hue < Waves.options.hue[0] && !Waves.hueFw) {
              Waves.hue = Waves.options.hue[0];
              Waves.Waves = true;
            }

            var a = Math.floor(127 * Math.sin(0.3 * Waves.hue + 0) + 128);
            var b = Math.floor(127 * Math.sin(0.3 * Waves.hue + 2) + 128);
            var c = Math.floor(127 * Math.sin(0.3 * Waves.hue + 4) + 128);

            Waves.color = 'rgba(' + a + ',' + b + ',' + c + ', 0.1)';
          };

          function Wave(Waves) {
            var Wave = this;
            var speed = Waves.options.speed;

            Wave.Waves = Waves;
            Wave.Lines = [];

            Wave.angle = [
              rnd(pi2),
              rnd(pi2),
              rnd(pi2),
              rnd(pi2)
            ];

            Wave.speed = [
              rnd(speed[0], speed[1]) * rnd_sign(),
              rnd(speed[0], speed[1]) * rnd_sign(),
              rnd(speed[0], speed[1]) * rnd_sign(),
              rnd(speed[0], speed[1]) * rnd_sign(),
            ];

            return Wave;
          }

          Wave.prototype.update = function () {
            var Wave = this;
            var Lines = Wave.Lines;
            var color = Wave.Waves.color;

            Lines.push(new Line(Wave, color));

            if (Lines.length > Wave.Waves.options.width) {
              Lines.shift();
            }
          };

          Wave.prototype.draw = function () {
            var Wave = this;
            var Waves = Wave.Waves;

            var ctx = Waves.ctx;
            var radius = Waves.radius;
            var radius3 = radius / 3;
            var x = Waves.centerX;
            var y = Waves.centerY;
            var rotation = dtr(Waves.options.rotation);
            var amplitude = Waves.options.amplitude;
            var debug = Waves.options.debug;

            var Lines = Wave.Lines;

            each(Lines, function (line, i) {
              if (debug && i > 0) return;

              var angle = line.angle;

              var x1 = x - radius * Math.cos(angle[0] * amplitude + rotation);
              var y1 = y - radius * Math.sin(angle[0] * amplitude + rotation);
              var x2 = x + radius * Math.cos(angle[3] * amplitude + rotation);
              var y2 = y + radius * Math.sin(angle[3] * amplitude + rotation);
              var cpx1 = x - radius3 * Math.cos(angle[1] * amplitude * 2);
              var cpy1 = y - radius3 * Math.sin(angle[1] * amplitude * 2);
              var cpx2 = x + radius3 * Math.cos(angle[2] * amplitude * 2);
              var cpy2 = y + radius3 * Math.sin(angle[2] * amplitude * 2);

              ctx.strokeStyle = (debug) ? '#fff' : line.color;

              ctx.beginPath();
              ctx.moveTo(x1, y1);
              ctx.bezierCurveTo(cpx1, cpy1, cpx2, cpy2, x2, y2);
              ctx.stroke();

              if (debug) {
                ctx.strokeStyle = '#fff';
                ctx.globalAlpha = 0.3;

                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(cpx1, cpy1);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(x2, y2);
                ctx.lineTo(cpx2, cpy2);
                ctx.stroke();

                ctx.globalAlpha = 1;
              }
            });
          };

          function Line(Wave, color) {
            var Line = this;

            var angle = Wave.angle;
            var speed = Wave.speed;

            Line.angle = [
              Math.sin(angle[0] += speed[0]),
              Math.sin(angle[1] += speed[1]),
              Math.sin(angle[2] += speed[2]),
              Math.sin(angle[3] += speed[3])
            ];

            Line.color = color;
          }

          function Stats() {
            this.data = [];
          }

          Stats.prototype.time = function () {
            return (performance || Date)
              .now();
          };

          Stats.prototype.log = function () {
            if (!this.last) {
              this.last = this.time();
              return 0;
            }

            this.new = this.time();
            this.delta = this.new - this.last;
            this.last = this.new;

            this.data.push(this.delta);
            if (this.data.length > 10)
              this.data.shift();
          };

          function each(items, callback) {
            for (var i = 0; i < items.length; i++) {
              callback(items[i], i);
            }
          }

          function extend(options, defaults) {
            for (var key in options)
              if (defaults.hasOwnProperty(key))
                defaults[key] = options[key];
            return defaults;
          }

          function dtr(deg) {
            return deg * pi / 180;
          }

          function rtd(rad) {
            return rad * 180 / pi;
          }

          function diagonal_angle(w, h) {
            var a = Math.atan2(h, w) * 1.27325;
            return a;
          }

          function rnd(a, b) {
            if (arguments.length == 1)
              return Math.random() * a;
            return a + Math.random() * (b - a);
          }

          function rnd_sign() {
            return (Math.random() > 0.5) ? 1 : -1;
          }

        })();

        var waves = new Waves('#holder', {
          fps: false,
          waves: 3,
          width: 200,
        });

        waves.animate();
      }*/

    },
    created() {
    },
    mounted() {
      var _this = this;
      this.getCode();
      window.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
          this.toUpperCase('formLogin');
        }
      })
      this.$nextTick(function () {
        if (this.$route.path == '/login') {
           /*this.canvas();*/
        }
      });
      layui.use(['form'], function () {
        var form = layui.form
      })
    },
    '$route'(to, from) {
      this.$router.go(0);
    }
  };
</script>
