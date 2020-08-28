<template>
    <div>
        <div class="first">
            <router-link :to="{path:'/giftcard'}"><img src="../assets/images/i3.png" alt=""></router-link>
            <span class="left">商品</span> 
            <span>详情</span>
            <span>须知</span>
            <b class="first-right"></b>  
        </div>
        <div class="middle">
            <div class="picture">
                  <img src="../assets/images/picture1.jpg" alt="">
            </div>
            <div class="txt">
              <p class="txt-one">2020（电子卡）</p>
              <span class="t-left">任我行 电子卡</span><span class="t-right">欢欢喜喜迎新年</span>
            </div>
            <div class="welfare">
                 <p><span class="w-top-l">购卡福利</span> <span class="w-top-r">买卡即赠</span> 日上优选权益50元立减券</p>
                 <p class="bott"><span class="w-bot">超值换购</span> 超级会员</p>
                 <span class="arrow"></span>
            </div>
            <div class="denomination">
                     <span>可选面额</span>
                     <span class="de-one">￥</span>
                     <span class="de-two">100-1000</span>
                     <span>/张</span>
                     <span class="de-three"></span>
            </div>
            <div class="advantage">
                    <ul>
                        <li><img src="../assets/images/ad.png" alt=""> 安全便捷</li>
                        <li><img src="../assets/images/ad.png" alt=""> 可开发票</li>
                        <li><img src="../assets/images/ad.png" alt=""> 自定义面额</li>
                        <li><img src="../assets/images/ad.png" alt=""> 携程专属客服</li>
                    </ul>
            </div>
            <div class="hot">
                    <img src="../assets/images/hot1.png" alt="">
                    <span>入选「HOT热销榜」 NO.1</span>
            </div>
        </div>
        <div class="details">
             <div class="de-first">
                <h4>——————礼品卡详情——————</h4>
             </div>
             <div class="de-second">
                 <img src="../assets/images/des.jpg" alt="">
             </div>
        </div>
        <div class="instructions">
            <div class="in-first">
              <h4>——————购买须知——————</h4>
            </div>
            <div class="in-second">
                <img src="../assets/images/ins.png" alt="">
            </div>
            <div class="in-third">
               <p><span>还有其他想了解？<a href="">直接联系客服</a></span></p> 
            </div>
        </div>
        <div class="last">
            <span class="ls-left">￥0</span>
            <button class="la-right-one">立即购买</button>
            <button class="la-right">微信送礼</button>
            <span class="ls-right">明细 <img src="../assets/images/last1.png" alt=""></span>
        </div>
    </div>
</template>
<style scoped>
div.first{
    z-index: 10;
    width: 100%;
    height: auto;
    overflow: hidden;
    position: fixed;
    background-color: #fff;
    top: 0%;
}
.first img{
    transform: scale(0.3);
    vertical-align: middle;
}
.first span{
    margin-right: 2%;
}
span.left{
    margin-left:17% ;
}
b.first-right{
    position: absolute;
    display: inline-block;
    transform: scale(0.3);
    right: 2%;
    top: -6%;
    width: 86px;
    height: 80px;
    background: url('../assets/images/fr1.png') no-repeat -197px -200px;
}
div.picture{
    text-align: center;
    width: 100%;
    height: auto;
    overflow: hidden;
    margin-top: 72px;
}
.picture img{
    width: 100%;
    height: auto;
}
div.txt{
    width: 90%;
    height: auto;
    padding: 2% 5% 3% 5%;
    overflow: hidden;
    border-bottom: 1px solid #e0e0e0;
}
p.txt-one{
    font-weight: bold;
    font-size: 17px;
    display: block;
}
span.t-left{
   font-size: 13px ;
   color: gray;
   margin-right: 2%;
}
span.t-right{
    font-size: 11px;
    color: #0086f6;
    border: 1px solid #0086f6;
}
div.welfare{
    position: relative;
    width: 95%;
    height: auto;
    overflow: hidden;
    padding: 5% 0px 5% 5%;
    border-bottom: 1px solid #e0e0e0;

}
.welfare p{
     font-size: 14px;
}
span.w-top-l{
    color: gray;
}
span.w-top-r{
    color: #f70;
    background-color: #fff1e5;
    margin-left: 5%;
    margin-right:3% ;
}
span.w-bot{
    color: #f70;
    background-color: #fff1e5;
    margin:2% 3% 0px 20% ;
}
p.bott{
    margin-top:2% ;
}
span.arrow{
    position: absolute;
    top: 50%;
    right: 5%;
    width: 5px;
    height: 5px;
    transform: rotate(-45deg);
    border-right: 1px solid black;   
    border-bottom: 1px solid black;   
}
div.denomination{
    position: relative;
    width: 95%;
    padding: 5% 0px 5% 5%;
    overflow: hidden;
    border-bottom: 1px solid #e0e0e0;
}
.denomination span{
    color: #999;
    font-size: 14px;
}
span.de-one{
    color: #f60;
    margin-left: 5%;
}
span.de-two{
    color: #f60;
    font-size: 22px;
}
span.de-three{
    position: absolute;
    top: 50%;
    right: 5%;
    width: 5px;
    height: 5px;
    transform: rotate(-45deg);
    border-right: 1px solid black;   
    border-bottom: 1px solid black;   
}
div.advantage{
    width: 95%;
    padding: 5% 0px 5% 5%;
    overflow: hidden;
    border-bottom: 1px solid #e0e0e0;

}
.advantage ul{
    width: 100%;
    height: auto;
}
.advantage li{
 float: left;
 width: 30.725%;
 font-size: 12px;
}
.advantage img{
    vertical-align: middle;
}
div.hot{
   width: 95%;
    padding: 5% 0px 5% 5%;
    overflow: hidden;
    background-color: #fff2e9;
}
.hot img{
    vertical-align: middle;
    width: 7%;
    margin-right: 2%;
}
.hot span{
    font-size: 14px;
    font-weight: bold;
}
div.details{
    width: 100%;
    height: auto;
    overflow: hidden;
}
div.de-first{
    width: 100%;
    overflow: hidden;
    margin-top:3% ;
    text-align: center;
}
.de-first h4{
    color: gray;
}
.de-second{
    width: 90%;
    overflow: hidden;
    padding: 0px 5% 5%;
}
.de-second img{
    width: 100%;
}
div.instructions{
    width: 100%;
    height: auto;
    overflow: hidden;
    margin-bottom: 72px;
}
div.in-first{
    width: 100%;
    overflow: hidden;
    margin-top:3% ;
    text-align: center;
}
.in-first h4{
    color: gray;
}
.in-second{
    width: 90%;
    overflow: hidden;
    padding: 0px 5% 5%;
}
.in-second img{
    width: 100%;
}
div.in-third{
      width: 100%;
      overflow: hidden;
    


}
.in-third p{
    width: 50%;
    text-align: center;
    border-radius: 45px;
    margin: 0 25%;
    background-color: #efeff4;
}
.in-third span{
 
    font-size: 12px;
}
.in-third a{
    color: #0086f6;
    text-decoration: none;
}
div.last{
    position: fixed;
    bottom: 0px;
    z-index: 10;
    width: 90%;
    height: 72px;
    padding: 0 5%;
    background-color: #fff;
}
span.ls-left{
    line-height: 72px;
    color: #f60;
    font-size: 18px;
    float: left;
}
span.ls-right{
    line-height: 72px;
    color: gray;
    float: right;
    font-size: 14px;
}
button.la-right{
    height: 40px;
    font-weight: 700;
    font-size: 16px;
    margin: 5% 0 0 2%;
    border-radius: 6px;
    border:1px solid #f60;
    background-color: white;
    color: #f60;
    float: right;
}
button.la-right-one{
    font-weight: 700;
    font-size: 16px;
    margin: 5% 0 0 2%;
    height: 40px;
    border-radius: 6px;
    color: white;
    border:1px solid #f60;
    background-color: #f60;
    float: right;
}
.last img{
    vertical-align: middle;
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