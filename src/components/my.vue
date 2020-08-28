<template>
<div>
      <div class="header">
            <router-link :to="{path:'homepage'}"><span class="left"></span></router-link>
            <span class="right"></span>  
            <h1>登录携程，开启旅程</h1>
            <router-link :to="{path:'/login'}"><button class="login">登录/注册</button></router-link>
            <button class="number">手机号查单</button>
      </div>
      <section>
            <ul>
           <li class="fa-one">
               <span class="one"></span>
               <p>钱包</p>
               <p class="bot">
                   礼品卡
                   <b>|</b>
                   现金
                   <b>|</b> 
                   返现
               </p>
           </li>
           <li class="left2">
               <span class="discount"></span>
               <p>优惠劵</p>
               <p class="bott">领券</p>
           </li>
           <li class="mut">
            <span class="giftbox"></span>
            <p>积分</p>
            <p class="bott">兑好礼</p>
           </li>
           <li class="right2">
            <span class="semicircle"></span>
            <p>拿去花</p>
            <p class="bott">分期付款</p>
           </li>
       </ul>
       </section>
       <main>
           <ul>
               <li>
                   常用信息
                   <p>旅客/地址/发票抬头 ></p>
               </li>
               <li>
                   我的收藏
                   <p>降价产品有提醒 ></p>
               </li>
               <li>
                   浏览历史
                   <p>近15天访问记录 ></p>
               </li>
               <li>
                   我要合作
                   <p>供应商加盟/代理合作 ></p>
                </li>
           </ul>
       </main>
      <footer>
          <ul>
              <li>出行工具
                  <p>航班动态/翻译助手等 ></p>
              </li>
          </ul>
      </footer>
</div>
       

</template>

<script>
export default {};
</script>

<style scoped>
       div.header{
        position: relative;
        background: url('../assets/images/01.jpg');
        text-align: center;
       }
      div>span{
          color:white;
      }
      .left{
          position:absolute;
          top: 5px;
          left:10px;
          transform: scale(0.5);
          width: 20px;
          height: 35px;
          background:url('../assets/images/o2.png') no-repeat 0px -43px;
      }
        .right{
          position:absolute;
          transform: scale(0.5);
          top: 5px;
          right:10px;
          width: 38px;
          height: 37px;
          background:url('../assets/images/o2.png') no-repeat  -49px -179px;
      }
      h1{
          color: white;
          padding-bottom: 5px;
          padding-top: 64px;
          line-height: 44px;
          font: 18px Microsoft Yahei;
          
      }
      button{
          margin-bottom: 15px;
      }
      .login{
          width: 120px;
          color: white;
          height: 37px;
          margin-right: 30px;
          border-radius: 50px;
          font-size: 15px;
          background-color: #ff9a14;
          border: 1px solid #ff9a14;
      }
      .number{
          color: white;
          width: 120px;
          height: 37px;
          font-size: 15px;
          border-radius: 50px;
          border: 1px solid rgba(255,255,255,0.5);
          background: rgba(255,255,255,0.15); 
      }
      section>ul>li{
          position: relative;
      }
      li.fa-one{
          width: 100%;
          height: 70px;
          padding: 10px 0px 10px 10px;
          
          border-bottom: 1px solid #f5f5f5;
      }
      .one{
          display: inline-block;
          position: absolute;
          top:15px;
          left: 10px;
          width: 40px;
          height: 40px;
          transform: scale(0.6);
          background:url('../assets/images/o2.png') no-repeat  0px -79px;
      }
      section p{
          margin:15px 0px 0px 48px;
          font-size: 15px;
      }
      p.bot{
          font-size: 13px;
          padding-right :10px; 
          color: gray;
          
      }
      b{
          font-weight: normal;
          margin: 0px 5px;
      }
      .left2{
          float: left;
          width: 32.33%;
          height: 73px;
          border-right: 1px solid #f5f5f5;
      }
      .discount{
          display: inline-block;
          transform: scale(0.5);
          position: absolute;
          top:10px;
          left: 15px;
          width: 37px;
          height: 29px;
          background:url('../assets/images/o2.png') no-repeat  -1px -125px;
      }
      .mut{
          float: left;
          width: 32.33%;
          height: 73px;
          border-right: 1px solid #f5f5f5;
      }
      .giftbox{
          display: inline-block;
          transform: scale(0.5);
          position: absolute;
          top:10px;
          left: 15px;
          width: 37px;
          height: 32px;
          background:url('../assets/images/o2.png') no-repeat  -1px -224px;
      }
      .right2{
          float: left;
          width: 32.33%;
          height: 73px;
      }
      .semicircle{
          display: inline-block;
          transform: scale(0.5);
          position: absolute;
          top:10px;
          left: 15px;
          width: 36px;
          height: 34px;
          background:url('../assets/images/o2.png') no-repeat  -41px -302px;
          }
          p.bott{
          font-size: 13px;
          margin-left: 32px;
          color: #999999;
          }
      section{
              overflow: hidden;
              background-color: white;
          }
      main{
          background-color: white;
          width: 100%;
          margin-top: 10px;
      }
      main>ul>li{
          height: 50px;
          line-height: 50px;
          margin-left:16px;
          font-size: 16px;
          border-bottom:1px solid #f5f5f5;
      }
      main>ul>li:nth-of-type(4){
          border:none;
      }
      main p{
        float:right;
        padding-right: 5px;
        color: #999;
        font-size: 12px;
      }
      footer{
          margin-top: 5px;
          width: 100%;
          background-color: white;
      }
      footer>ul>li{
          height: 50px;
          line-height: 50px;
          margin-left:16px;
          font-size: 16px;
      }
      footer p{
      
      float:right;
        padding-right: 5px;
        color: gray;
        font-size: 12px;

      }
       .router-link-active {    
        text-decoration: none;
        color: black;
    }
    a {
    text-decoration: none;
    color: black;
    }
</style>