<template>
    <div>
        <div class="header">
            <router-link :to="{path:'/login'}"><span></span></router-link>
        </div>
        <h2>携程账号登录</h2>
        <div class="main">
            <input type="text" placeholder="国内手机号/用户名/邮箱/卡号" class="b">
            <input type="text" placeholder="登录密码" class="c">
            <span class="d">找回密码</span>
            <span @click="change()" class="e"></span>
            <p class="deng">登录</p>
        </div>
        <p class="f">
            登录即代表您同意我们的
            <a href="https://contents.ctrip.com/huodong/privacypolicyh5/index?type=1">服务协议</a>
            和
            <a href="https://contents.ctrip.com/huodong/privacypolicyh5/index?type=2">隐私政策</a>
        </p>
    </div>
</template>

<style scoped>
    .header{
    height: 44px;
    width: 100%;
    }
   .header span{
       height: 11px;
       width: 11px;
       border-left: 2px black solid;
       border-bottom: 2px black solid;
       transform: rotate(45deg);
       float: left;
       margin-left: 5%;
       margin-top: 14.5px;
   }
   h2{
       font-size: 25px;
       text-align: center;
       line-height: 25px;
       margin: 50px auto;
       color: #333;
       font-family: Arial,Lucida Grande,Verdana,Microsoft YaHei,hei;
   }
   .main{
       width: 85%;
       margin-left: auto;
       margin-right: auto;
   }
   .main .b{
       height: 54px;
       width: 100%;
       color: #cccccc;
       border-bottom: solid 0.5px #cccccc;
       font-size: 17px;
       line-height: 54px;
       font-family: Arial,Lucida Grande,Verdana,Microsoft YaHei,hei;
   }
   .main .c{
        height: 54px;
        width: 100%;
        color: #cccccc;
        border-bottom: solid 0.5px #cccccc;
        font-size: 17px;
        line-height: 54px;
        font-family: Arial,Lucida Grande,Verdana,Microsoft YaHei,hei;
   }
   .main .d{
       font-size: 14px;
       color: blueviolet;
       float: right;
       font-family: Arial,Lucida Grande,Verdana,Microsoft YaHei,hei;
       position: relative;
       bottom: 39px;
   } 
   .main input{
       border: none;
       outline: none;
   }
   .main .e{
       height: 31px;
       width: 44px;
       background: url('../assets/images/j2.png') no-repeat -2px -8px;
       display: inline-block;
       transform: scale(0.5);
       position: relative;
       bottom: 43px;
       left: 67%;
   }
   .main .deng{
       background-color: #ff9a14;
       font-size: 17px;
       text-align: center;
       line-height: 44px;
       margin: 0px auto 0px;
       color: white;
       font-family: Arial,Lucida Grande,Verdana,Microsoft YaHei,hei;
       border-radius: 5px;
   }
   .f{
       font-size: 12px;
       text-align: center;
       margin-top: 60%;
       color: #cccccc;
       font-family: Arial,Lucida Grande,Verdana,Microsoft YaHei,hei;
   }
   .f a{
       color: blueviolet;
   }
</style>

<script>
export default {
    methods:{
        change(){
            this.style.url="url('../assets/images/j2.png') no-repeat -2px -93px;"
        }
    }
}
</script>