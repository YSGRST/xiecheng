<template>
    <main>
        <header>
            <div class="title">
                <router-link :to="{path:'homepage'}"><span class="iconfont icon-fanhui"></span></router-link>  
                <h1>
                    礼品卡
                </h1>
                
                <span class="iconfont icon-gengduo" @click="sow(num)"></span>
                <span class="iconfont icon-question"></span>
                <div class="more" v-show="num==1">
                        <p><span class="iconfont icondingdan"></span>我的订单</p>
                        <p><span class="iconfont iconxiaoxi"></span>消息中心</p>
                        <p><span class="iconfont iconkefu"></span>客服服务</p>
                        
                </div>
            </div>
            <div class="top">
               <div class="swipe">
                    <mt-swipe :auto="4000">
                        <mt-swipe-item><img src="../assets/images/swipe1.jpg" alt=""></mt-swipe-item>
                        <mt-swipe-item><img src="../assets/images/swipe2.jpg" alt=""></mt-swipe-item>
                        <mt-swipe-item><img src="../assets/images/swipe3.jpg" alt=""></mt-swipe-item>
                        <mt-swipe-item><img src="../assets/images/swipe4.jpg" alt=""></mt-swipe-item>
                        <mt-swipe-item><img src="../assets/images/swipe5.jpg" alt=""></mt-swipe-item>
                        <mt-swipe-item><img src="../assets/images/swipe6.jpg" alt=""></mt-swipe-item>
                    </mt-swipe>
               </div>
               <ul class="lcon">
                   <li class="c11" v-for="(item,index) in list2">
                       <img :src="item.src" alt="">
                       <span>{{item.txt}}</span>
                   </li>
               </ul>
            </div>
        </header>

        <div class="check-box">
            <ul class="c1">
                <router-link :to="{path:'/login'}">
                    <li class="c11" v-for="(item,index) in list">
                    <img :src="item.src" alt="">
                    <span>{{item.txt}}</span>
                    <span class="song" v-if="item.hz">{{item.hz}}</span>
                </li> </router-link>
                 
            </ul>
        </div>
        <div class="mid">
              <ul>
                  <li class="left">
                      <video src="../assets/videos/mid3.mp4" controls></video>
                  </li>
                  <li class="right">
                      <img src="../assets/images/mid1.png" alt="">
                      <span>微信送礼</span>
                  </li>
                  <li class="right">
                      <img src="../assets/images/mid2.png" alt="">
                      <span>企业购卡</span>
                  </li>
              </ul>
        </div>
        <div class="hot">
             <ul>
                 <li class="left1">
                     <img src="../assets/images/hot1.png" alt="">
                 </li>
                 <li class="left2">
                     <b>热销榜</b>
                 </li>
                 <li class="left3">
                     <span class="left-one">排序由销量、浏览等综合得出</span>
                 </li>
                 <li class="right1">
                     <span class="right-one">
                         更多 >
                     </span>
                 </li>
             </ul>
        </div>
        <div class="tp">
                <ul>
                   <router-link :to="{path:'/electronic'}"> <li><img src="../assets/images/tp1.jpg" alt="">
                    <p>2020（电子卡）</p>
                    <span class="one">01</span></li></router-link>
                    <li class="middle"><img src="../assets/images/tp2.png" alt="">
                    <p>一程有财（实体卡）</p>
                    <span class="two">02</span></li>
                    <li><img src="../assets/images/tp3.jpg" alt="">
                    <p>牛郎织女（电子卡）</p>
                    <span class="three">03</span></li>
                </ul>
        </div>
        <ul class="tips">
            <li> <span class="kl">关于扫码刷单返现风险提示通知</span></li>
           <span class="smallbell"></span>
        </ul>
        <div class="surprise">
             <div class="subject">
                  <strong>| 礼品卡福袋 买卡送卡</strong> 
                  <span>查看全部 ></span>
             </div>
             <div class="ghs">
                  <ul>
                      <li>
                          <p class="first">买5000<span>送280</span></p>
                          <p><span>双季福袋</span> 180天后发货</p>
                          <span class="rwx"></span>
                          <span class="give"></span>
                      </li>
                      <li>
                            <p class="first">买5000<span>送220</span></p>
                            <p><span>双季福袋</span> 180天后发货</p>
                            <span class="rwy"></span>
                      </li>
                      <li>
                          <p class="first">买5000<span>送120</span></p>
                          <p><span>单季福袋</span> 90天后发货</p>
                          <span class="rwx"></span>
                      </li>
                    <li>
                        <p class="first">买5000<span>送100</span></p>
                        <p><span>单季福袋</span> 90天后发货</p>
                        <span class="rwy"></span>
                      </li>
                  </ul>
             </div>
        </div>
        <div class="exchange">
               <span class="ex-jl"></span>门票兑换券
        </div>
        <div class="recommend">
             <h2 class="rem">
                 ——为你推荐——
             </h2>
        </div>
        <div class="photo">
            <ul>
                <li v-for="(item,index) in list3">
                <img :src="item.src" alt="">
                <p>{{item.kh}}</p>
                <p class="bottom"> 
                    <span class="p-l" v-if="item.pl">{{item.pl}}</span>
                    <span class="p-r" v-if="item.pr">{{item.pr}}</span>
                </p>
               <span class="give">{{item.pa}}</span></li>
            </ul>
        </div>
        
        <div class="hxd">
            <h2 class="security">————安全保障————</h2>
            <div class="lsj">
                <p><span class="Record"></span>备案号：310000CCH0021</p>
                <div class="h4"><h4>《礼品卡章程》</h4></div>
                <div class="QR"><img src="../assets/images/hxd2.png" alt=""></div>
                <p class="big">单用途预付卡经营者信息对接标识</p>
                <p>上海携程国际旅行社有限公司（Ctrip（携程））</p>
                <p>信息对接唯一标识：310110L72718735100093</p>
            </div>
        </div>
        <div class="slide">
            <span :class="{iconfont:true,'icon-xiangxia':v==1,'icon-xiangshang':v==2}" @click="change()"></span>
        </div>
    </main>

</template>




<script>
export default {
    data(){
        
        return{
            num:0,
            v:1,
           list:[
            {
                src:'./src/assets/images/c1.png',
                txt:'账户充值',
                hz:'多送1%'
            },
            {
                src:'./src/assets/images/c2.png',
                txt:'领用/查询'
            },
            {
                src:'./src/assets/images/c3.png',
                txt:'账户明细'
            },
            {
                src:'./src/assets/images/c4.png',
                txt:'我的订单'
            },
        ] ,
        list2:[
            {
                src:'./src/assets/images/icon1.png',
                txt:'佳节祝福'
            },
            {
                src:'./src/assets/images/icon2.png',
                txt:'实体经典'
            },
            {
                src:'./src/assets/images/icon3.png',
                txt:'权益专享'
            },
            {
                src:'./src/assets/images/icon4.png',
                txt:'商务答谢'
            },
            {
                src:'./src/assets/images/icon5.png',
                txt:'生日庆贺'
            },
        ],
        list3:[
            {
                src:'./src/assets/images/p1.jpg',
                kh:'牛郎织女（电子卡）',
                pl:'微信送礼',
                pr:'七月七与你相会',
                pa:'送葡萄酒',
            },
            {
                src:'./src/assets/images/p1.jpg',
                kh:'牛郎织女（电子卡）',
                pl:'微信送礼',
                pr:'七月七与你相会',
                pa:'送葡萄酒',
            },
            {
                src:'./src/assets/images/p1.jpg',
                kh:'牛郎织女（电子卡）',
                pl:'微信送礼',
                pr:'七月七与你相会',
                pa:'送葡萄酒',
            },
            {
                src:'./src/assets/images/p1.jpg',
                kh:'牛郎织女（电子卡）',
                pl:'微信送礼',
                pr:'七月七与你相会',
                pa:'送葡萄酒',
            },
            {
                src:'./src/assets/images/p1.jpg',
                kh:'牛郎织女（电子卡）',
                pl:'微信送礼',
                pr:'七月七与你相会',
                pa:'送葡萄酒',
            },
            {
                src:'./src/assets/images/p1.jpg',
                kh:'牛郎织女（电子卡）',
                pl:'微信送礼',
                pr:'七月七与你相会',
                pa:'送葡萄酒',
            },
            {
                src:'./src/assets/images/p1.jpg',
                kh:'牛郎织女（电子卡）',
                pl:'微信送礼',
                pr:'七月七与你相会',
                pa:'送葡萄酒',
            },
            {
                src:'./src/assets/images/p1.jpg',
                kh:'牛郎织女（电子卡）',
                pl:'微信送礼',
                pr:'七月七与你相会',
                pa:'送葡萄酒',
            },
            {
                src:'./src/assets/images/p1.jpg',
                kh:'牛郎织女（电子卡）',
                pl:'微信送礼',
                pr:'七月七与你相会',
                pa:'送葡萄酒',
            },
            {
                src:'./src/assets/images/p1.jpg',
                kh:'牛郎织女（电子卡）',
                pl:'微信送礼',
                pr:'七月七与你相会',
                pa:'送葡萄酒',
            },
            {
                src:'./src/assets/images/p1.jpg',
                kh:'牛郎织女（电子卡）',
                pl:'微信送礼',
                pr:'七月七与你相会',
                pa:'送葡萄酒',
            },

        ]

        
        }
        
    },
    methods:{
        change(){
            if(this.v==1){
                this.v=2;
                $('html,body').animate({'scrollTop':$('.rem').offset().top})
            }else{
                this.v=1;
                $('html,body').animate({'scrollTop':'0px'})
            }
        },
        sow(){
            if(this.num==1){
                this.num=0;
            }else{
                this.num=1;
            }
        }
    } 
}
</script>
<style>
  *{margin: 0px;
  padding: 0px;

list-style: none;
  }
</style>
<style scoped>
div.check-box{
    z-index: 10;
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 80px;
    background-color: #fff;
 }
 span.song{
     font-size: 12px;
     left: 14%;
     top: 0px;
     position: absolute;
     border: 1px solid #ff6d5b;
     color: white;
      background-color: #ff6d5b;
 }
.c1 li{
    text-align: center;
    float: left;
    width: 25%;
    height: 80px;
 }
.c1 img{
    vertical-align:top;
    transform: scale(0.5);
    width: 56px;
    height: auto;
}
.c1 span{
    color: black;
    font-size: 12px;
    display: block;
    margin: 0px 0 -2px;
 }
 div.title{
    z-index: 10;
    width: 100%;
    position: fixed;
    top: 0px;
    background-color: #fff;
 }
h1{
    margin-left:34% ;
    float: left;
    text-align: center;
    line-height: 54px;
 }
span.icon-fanhui{
        float: left;
    margin: 15px 5px 5px 20px;
 }
span.icon-gengduo{
    float: right;
    margin: 15px 20px 5px 5px;
 }
span.icon-question{
    float: right;
    margin: 15px 20px 5px 5px;
 }
div.top{
    width: 100%;
    height: 228px;
    margin-top: 53.6px;
    padding-top: 20px;
    background-color: #fdb3b4;
 }
div.swipe{
    width: 85%;
    height: 124px;
    margin:0px auto;
    border-radius: 45px;
 }
.swipe img{
    width: 100%;
    height: auto;
 }
.lcon{
   width: 100%;
   height: 32.19%;
   margin-top: 10px;
   padding: 15px 0px;
   background-color: #fff1f1;
 }
.lcon li{
    float: left;
    text-align: center;
    width: 20%;
    height: 100%;

 }

.lcon img{
    margin:0px 18px ;
    width: 55%;
    height: auto;
 }
.mid{
    padding: 4.267% 3.2% 0px 3.2%;
}
.mid ul{
    width: 100%;
    height: 141px;
    
}
li.left{
    float: left;
    width: 50%;
    height: 100%;
    margin-left:2%;
}
li.left video{
    width: 100%;
    height: auto;
}
li.right{
    text-align: center;
    line-height: 100%;
    float: right;
    width: 45%;
    height: 45%;
    border-radius: 10px;
    background: linear-gradient(267deg, #c9f3e6 0%, rgba(153, 226, 201, 0.31) 100%);;
}
.mid li.right:nth-last-of-type(1){
    margin-top: 3%;
    background: linear-gradient(270deg, #c9e9fd 0%, #99cefb 100%);;
}
.right img{
    width: 25%;
    height: auto;
    margin: 7% 0px 0px 7%;
}
.right span{
    line-height: 100%;
    margin:0px 9% 5% 12%;
}
.hot{
    width: 100%;
    height: 16.8px;
}
.hot ul{
    width: 100%;
    height: 100%;
    text-align: center;
}
li.left1{
    float: left;
    width: auto;
    height: 100%;
    margin-left:4.2%;
}
.hot img{
    height: 100%;
    width: auto;
}
li.left2{
    float: left;
    margin: 0px 2%;
    line-height: 100%;
}
li.left2 b{
    font-size: 20px;
}
li.left3{
    float: left;
    line-height: 100%;
}
span.left-one{
    font-size: 14px;
    color: gray;
}
li.right1{
    float: right;
    line-height: 100%;
    margin-right: 2%;
}
span.right-one{
  font: 400 14px/1.5 Arial, "Lucida Grande", Verdana, "Microsoft YaHei", hei;
}
.tp{
    width: 100%;
    height: 102px;
    padding:0px 2.7% ;
    margin-top:2.7% ;
    box-sizing: border-box;
}
.tp ul{
    width: 100%;
    height: 100%;
}
.tp li{
    position: relative;
    float: left;
    text-align: center;
    width: 32.33%;
    height: 100%;
}
.tp li.middle{
    padding:0px 1%;
}
.tp img{
    width: 90%;
    height: auto;
}
.tp p{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    font: 400 14px/1.5 Arial, "Lucida Grande", Verdana, "Microsoft YaHei", hei;

}
.tp span{
    text-align: center;
    font-size: 45px;
    color: white;
   position: absolute;
   top:-25%;
   left:-5%;
   transform: scale(0.3);
   width: 60px;
   height: 69px;
   background: url('../assets/images/tp4.png') no-repeat 0px -69px;
}
.tp span.two{
    background: url('../assets/images/tp4.png') no-repeat 0px -138px;
}
.tp span.three{
    background: url('../assets/images/tp4.png') no-repeat 0px -207px;
}
.tips{
    position: relative;
    width: 100%;
    height: 30px;
    margin-top:3% ;
    padding:0px 3% ;
    box-sizing: border-box;
}
.tips li{
       
  
  padding-left: 5%;
}
span.smallbell{
    display: inline-block;
    position: absolute;
    transform: scale(0.5);
    top: -30%;
    left: 2%;
    width: 36px;
    height: 36px;
    background: url('../assets/images/smallbell.png') no-repeat 0px -298px;
}
span.kl{
    line-height: 100%;
    float: left;
    margin-left: 5%;
}
div.surprise{
    width: 100%;
    height: 200px;
    background: url('../assets/images/surprise1.png') #ffa200 no-repeat ;
} 
div.subject{
    
    width: 100%;
    height: 30%;
    padding: 5%  3%;
    box-sizing: border-box;
}
.subject strong{
    font-size: 17px;
    font-weight: bold;
    color: white;
}

.subject span{
    float:right;
    font-size: 12px;
    color: white;
}
.ghs{
    width: 100%;
    height: 70%;
    overflow: auto;
    padding:0px 0px 5% 3%;
    box-sizing: border-box;
}
.ghs ul{
    width: 170%;
    height: 100%;
    
}
.ghs li{
    border-radius: 10px;
    text-align: center;
    position: relative;
    float: left;
    width: 23%;
    height: 100%;
    margin-right: 1%;
    background-color: #fff;
}
.ghs li p.first{
    margin-top: 50px;
    font-size: 20px;
 
}
.ghs p.first span{
    color: #f60;
}
.ghs li p{
    margin-top: 3px;
    font-size: 12px;
    color: gray;
}
span.rwx{
    position: absolute;
    top: -18px;
    left: -75px;
    width: 213px;
    height: 80px;
    transform: scale(0.3);
    background: url('../assets/images/rwx.png') no-repeat 0px -160px;
}
span.rwy{
    position: absolute;
    top: -18px;
    left: -75px;
    width: 213px;
    height: 80px;
    transform: scale(0.3);
    background: url('../assets/images/rwx.png') no-repeat 0px 0px;
}
div.exchange{
    position: relative;
    width: 92%;
    height: 40px;
    margin:4%;
    text-align: center;
    line-height: 30px;
    background-color: #fff1e6;
    
}
.exchange span.ex-jl{
    position: absolute;
    transform: scale(0.6);
    left: 30%;
    width: 22px;
    height: 30px;
    background: url('../assets/images/smallbell.png') no-repeat -40px -28px;
}
.recommend{
    text-align: center;
    width: 50%;
    height: 25px;
    margin: 0px 25% 5%;

}
.recommend{
    font-size: 17px;
    font-weight: 700;
    line-height: 25px;
}
.photo{
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
    padding:1% 2% ;
    margin-bottom: 5% ;
    
}
.photo ul{
    width: 100%;
    padding:0px 1%;
    height: 100%;
}
.photo li{
    position: relative;
    margin-left: 4%;
    margin-bottom: 6%;
    float: left;
    width: 43%;

}
.photo img{
    width: 100%;
    height: auto;
}
.photo span{
    margin-right: 4%;
    border:1px solid #0086f6;
    font-size: 12px;
    color: #0086f6;
}
span.give{
    position: absolute;
    top: -7px;
    right: -11px;
    height: 16px;
    background-color: #ff6d5b;
    color: white;
    border: 1px solid #ff6d5b;
}
div.hxd{
    width: 100%;
    overflow: hidden;
    margin-bottom: 80px;

}
.security{
    width: 100%;
    height: 21.6px;
    margin: 4% 0;
    text-align: center;
}
.lsj{
    line-height: 100%;
    text-align: center;
}
span.Record{
    display: inline-block;
    transform: scale(0.6);
    width: 63px;
    height: 48px;
    background: url('../assets/images/hxd.png') no-repeat -410px -80px;
}
.h4{
    margin: 5%;
}
.QR{
    width: 30%;
    margin: 0px 35% 4%;
}
.QR img{
    width: 100%;
    height: auto;
}
p{
    font-size: 14px;
    line-height: 23px;
    color: #333;
}
p.big{
    font-weight: bold;
}
div.slide{
    position: fixed;
    bottom: 120px;
    right: 2%;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #fff;
    border: 1px solid gray;
}
span.icon-xiangxia{
    position: absolute;
    left: 50%;
    top: 50%;
    color: #0086f6;
    transform: translate(-50%,-50%);
    line-height: 100%;
    font-size: 30px;
}
span.icon-xiangshang{
    position: absolute;
    left: 50%;
    top: 50%;
    color: #0086f6;
    transform: translate(-50%,-50%);
    line-height: 100%;
    font-size: 30px;
}
div.more{
    position: fixed;
    right: 2%;
    top: 8%;
    width: 90px;
    height: 132px;
    padding: 1% 2%;
    background-color: rgba(0, 0, 0, 0.8);
}
.more p{
    line-height: 45px;
   text-align: center;
   color: white;
   font-size: 16px;
   border-bottom: 1px solid gray;
}
.more span{
    color: white;
}
</style>