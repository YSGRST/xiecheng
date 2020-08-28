<template>
    <main>
        <div v-show="num==1">
            <div class="top" >
                <img src="../assets/images/h1.jpg" alt="">
                <input  type="text" placeholder="搜索:目的地/酒店/景点/航班号"  @click="change(num)">
                <span class="top-ss"></span>
                
                <p><router-link :to="{path:'my'}">
                <span class="top-wd"></span>
                </router-link><br>
                我 的</p>
                <ul class="t12">
                    <li>
                        <b class="one"></b>
                        <i>攻略·风景</i>
                    </li>
                    <li>
                        <b class="two"></b>
                        <i>门票·玩乐</i>
                        
                    </li>
                    <li>
                        <b class="three"></b>
                        <i>美食林</i>
                        
                    </li>
                    <li>
                        <b class="four"></b>
                        <i>周边游</i>
                        
                    </li>
                    <li>
                        <router-link :to="{path:'/oneday'}"><b class="five"></b>
                        <i>一日游</i></router-link>
                        
                    </li>
                </ul>
            </div>
            <section>
                <ul class="top2">
                    <li class="t1">
                        <span class="left">酒店</span>
                    </li>
                    <li class="t2">
                        <span>民宿·客栈</span>
                    </li>
                        
                    <li class="t3">
                        <span>特价·爆款</span>
                    </li>
                </ul>
                <ul class="middle">
                
                    <li class="m1"><span class="left">机票</span></li>
                        
                    <li class="m2"><span>火车票</span></li>
                        
                    <li class="m3"><span>汽车·船票</span></li>
                        
                    <router-link :to="{path:'/rentcar'}"><li class="m4"><span>专车·租车</span></li></router-link>
                </ul>
                <ul class="bottom">
                    <li class="b1"><span class="left">旅游</span></li>
                    <li class="b2"><span>高铁游</span></li>
                    <li class="b3"><span>邮轮游</span></li>
                    <li class="b4"><span>定制游</span></li>
                </ul>
            </section>
            <nav>
                <ul>
                    <li><span class="s1"></span>
                    <p class="nsp">自由行</p>
                    </li>
                    <li><span class="s2"></span>
                    <p class="nsp">WiFi电话卡</p>
                    </li>
                    <li><span class="s3"></span>
                    <p class="nsp">保险·签证</p>
                    </li>
                    <li><span class="s4"></span>
                    <p class="nsp">换钞·购物</p>
                    </li>
                    <li><span class="s5"></span>
                    <p class="nsp">向导·包车</p>
                    </li>
                    <li><span class="s6"></span>
                    <p class="nsp">特价机票</p>
                    </li>
                    <router-link :to="{path:'giftcard'}">
                        <li><span class="s7"></span>
                    <p class="nsp">礼品卡</p>
                    </li></router-link>
                    <li><span class="s8"></span>
                    <p class="nsp">申卡·借钱</p>
                    </li>
                    <router-link :to="{path:'/photo'}"><li>
                    <span class="s9"></span>
                    <p class="nsp">旅拍</p>
                    </li> </router-link>
                    
                    <li><span class="s10"></span>
                    <p class="nsp">更多</p>
                    </li>
                </ul>
            </nav>
            <footer>
                <ul class="f1">
                    <li class="f1-left">
                    </li>
                    <li class="f1-middle"><img src="../assets/images/h15.png" alt=""></li>
                    <li class="f1-right">
                        <p>获取更多福利</p>
                        <span></span>
                        </li>
                </ul>
                <ul class="f2">
                    <li class="f2-left"><img src="../assets/images/h16.png" alt=""></li>
                    <li class="f2-right"><img src="../assets/images/h17.jpg" alt=""></li>
                </ul>
                <ul class="f3">
                    <li><span class="iconfont icon-dianhua"></span>
                        <p>电话预定</p>
                    </li>
                    <li><span class="iconfont icon-xiazai"></span>
                    <p>下载客户端</p>
                    </li>
                    <li>
                        <span class="last-one"></span>
                        <p>我的</p>
                    </li>
                </ul>
                    <p class="fz">网站地图｜Language｜ 电脑版</p>
                    <p class="fz2">©2020携程旅行｜沪ICP备08023580号</p>
            </footer>
             
        </div>
        <div v-show="num==2">
            <div class="sous" >
                    <span class="s-one" @click="kl(num)"><i></i></span>
                    <input type="text" placeholder="搜索:目的地/酒店/景点/航班号">
                    <button>搜索</button>
            </div>
            <h4 class="khk">热门搜索</h4>
            <ul class="khs">
                <li>机票<span><img src="../assets/images/khs.png" alt=""></span></li>
                <li>酒店<span><img src="../assets/images/khs.png" alt=""></span></li>
                <li>门票<span><img src="../assets/images/khs.png" alt=""></span></li>
                <li>旅游<span><img src="../assets/images/khs.png" alt=""></span></li>
                <li>火车票<span><img src="../assets/images/khs.png" alt=""></span></li>
                <li>一日游<span><img src="../assets/images/khs.png" alt=""></span></li>
            </ul>
        </div>
    </main>

</template>

<script>
export default {
    data(){
        return{
            num:1,
        }
    },
    methods:{
        change(){
            if(this.num==1){
                   this.num=2;
            }
        },
        kl(){
            if(this.num==2){
                this.num=1
            }
        }
    }
}
</script>
<style>
*{
    margin: 0px;
    padding: 0px;
    list-style: none;
}
</style>
<style scoped>


div.top{
    width: 100%;
    height: auto;
    overflow: hidden;
}
img{
    width: 100%;
}
.top input{
    outline: none;
    position: absolute;
    top: 1%;
    left: 2%;
    border-radius: 45px;
    height: 5%;
    width: 75%;
    border: 1px solid white;
    padding-left: 10%;
    }
span.top-ss{
    left: 4%;
    top: 1.5%;
    position: absolute;
     display: inline-block;
      transform: scale(0.5);
      width: 28px;
      height: 28px;
      background: url('../assets/images/h2.png')  no-repeat -1px -1px;
}
span.top-wd{
      top: -40%;
      right: -20%;
      position: absolute;
      display: inline-block;
      transform: scale(0.5);
      width: 40px;
      height: 40px;
      background: url('../assets/images/h2.png')  no-repeat -1px -73px;
}
div.top p{
     position: absolute;  
     top:2%;
     right:4%; 
     display: inline-block;
     color: white;
     font-size: 12px; 
}
ul.t12{
    width: 90%;
    height: auto;
    left: 3%;
    top:-30px;
    padding-left: 4%;
    border: 1px solid gray;
    overflow: hidden;
    position: relative;
    border-radius: 10px;
    background-color: white;
}
ul.t12 li{
    font-size: 12px;
    float: left;
    height: 77.2px;
    width: 20%;
    text-align: center;
}
.t12 i{
    display: block;
    font-style: normal;
}
b.one{
    margin-left: 15%;
    transform: scale(0.5);
    display: inline-block;
    width: 42px;
    height: 48px;
    background: url('../assets/images/h3.png')  no-repeat -18px -15px;
}
b.two{
    transform: scale(0.5);
    display: inline-block;
    margin-top: 3%;
    margin-bottom: 5%;
    width: 58px;
    height: 42px;
    background: url('../assets/images/h3.png')  no-repeat -10px -98px;
}
b.three{
    transform: scale(0.5);
    display: inline-block;
    margin-top: -10%;
    margin-bottom: -5%;
    width: 58px;
    height: 58px;
    background: url('../assets/images/h3.png')  no-repeat -11px -170px;
}
b.four{
    transform: scale(0.5);
    display: inline-block;
    margin-top: -1%;
    margin-bottom: 5%;
    width: 60px;
    height: 46px;
    background: url('../assets/images/h3.png')  no-repeat -10px -256px;
}
b.five{
    transform: scale(0.5);
    display: inline-block;
    margin-top: -5%;
    margin-bottom: -5%;

    width: 56px;
    height: 55px;
    background: url('../assets/images/h3.png')  no-repeat -12px -329px;
}
.t12 li p{
    text-align: center;
    position: absolute;
    top: 71%;
    font-size: 12px;
}
p.mn{
    position: absolute;
    left: 46%;
   
}
section{
    width: 90%;
    height: auto;
    position: relative;
    margin-top: -20px;
    left: 5.5%;
    overflow: hidden;
    border-radius: 20px;
}
section ul{
    width: 100%;
    height: 32.33%;
    overflow: hidden;
    margin-bottom:1%;
}
section li{
    float: left;
    text-align: center;
    margin:0px 0px 0.5%;
    height: 0px;
}
section li.t1{
    padding-bottom: 20%;
    text-align: left;
    width: 30%;
    background: url("../assets/images/h6.png") #fb6155 no-repeat right bottom;
    background-size: 100%;

}
section li.t2{
    padding-bottom: 20%;
    width: 21%;
    margin: 0px 0.5%;
    background: url("../assets/images/h7.png") #fb6155 no-repeat left bottom;
    background-size: 100%;
    
}
section li.t3{
    width: 48%;
    padding-bottom: 20%;
    background: url("../assets/images/h8.png") #ffbe4a no-repeat right bottom;
    background-size: 100%;
}
section span{
    color: white;
    position: relative;
    top: 25px;
}
section span.left{
    color: white;
    position: relative;
    top: 25px;
    left:5px;
}

section li.m1{
    padding-bottom: 20%;
    text-align: left;
    width: 30%;
    background: url("../assets/images/h9.png") #4c97ed no-repeat right bottom;
    background-size: 100%;

}
section li.m2{
    padding-bottom: 20%;
    width: 21%;
    margin: 0px 0.5%;
    background: url("../assets/images/h10.png") #4c97ed no-repeat left bottom;
    background-size: 100%;
    
}
section li.m3{
    width: 23%;
    margin: 0px 0.5% 0px 0px;
    padding-bottom: 20%;
    background:  #51b5ed no-repeat right bottom;
    background-size: 100%;
}
section li.m4{
    width: 24.5%;
    padding-bottom: 20%;
    background:  #51b5ed no-repeat right bottom;
    background-size: 100%;
}
section li.b1{
    text-align: left;
    padding-bottom: 20%;
    width: 30%;
    background: url("../assets/images/h11.png") #4ac988 no-repeat left bottom;
    background-size: 100%;
    
}
section li.b2{
    padding-bottom: 20%;
    width: 21%;
    margin: 0px 0.5%;
    background: url("../assets/images/h12.png") #4ac988 no-repeat left bottom;
    background-size: 100%;
    
}
section li.b3{
    width: 23%;
    margin: 0px 0.5% 0px 0px;
    padding-bottom: 20%;
    background:#59ce72 no-repeat right bottom;
    background-size: 100%;
}
section li.b4{
    width: 24.5%;
    padding-bottom: 20%;
    background:#59ce72 no-repeat right bottom;
    background-size: 100%;
}
nav{
    overflow: hidden;
    width: 90%;
    height: auto;
    margin: 7% 5% 0px;
}
nav ul{

   width: 100%;
   height: auto;
}
nav ul li{
    float: left;
    width: 20%;
    margin: 0px;
    height: 70px;
    font-size: 12px;
    text-align: center;
}
span.s1{
    display: inline-block;
    transform: scale(0.5);
   width: 42px;
    height: 46px;
    background:url('../assets/images/h13.png') no-repeat -7px -6px;
}
span.s2{
    display: inline-block;
    transform: scale(0.5);
   width: 36px;
    height: 46px;
    background:url('../assets/images/h13.png') no-repeat -10px -65px;
}
span.s3{
    display: inline-block;
    transform: scale(0.5);
   width: 40px;
    height: 46px;
    background:url('../assets/images/h13.png') no-repeat -8px -118px;
}
span.s4{
    display: inline-block;
    transform: scale(0.5);
   width: 38px;
    height: 46px;
    background:url('../assets/images/h13.png') no-repeat -8px -172px;
}
span.s5{
    display: inline-block;
    transform: scale(0.5);
   width: 46px;
    height: 46px;
    background:url('../assets/images/h13.png') no-repeat -5px -231px;
}
span.s6{
    display: inline-block;
    transform: scale(0.5);
    width: 38px;
    height: 46px;
    background:url('../assets/images/h13.png') no-repeat -9px -289px;
}
span.s7{
    display: inline-block;
    transform: scale(0.5);
   width: 44px;
    height: 46px;
    background:url('../assets/images/h13.png') no-repeat -6px -349px;
}
span.s8{
    display: inline-block;
    transform: scale(0.5);
   width: 44px;
    height: 46px;
    background:url('../assets/images/h13.png') no-repeat -6px -405px;
}
span.s9{
    display: inline-block;
    transform: scale(0.5);
   width: 41px;
    height: 46px;
    background:url('../assets/images/h13.png') no-repeat -7px -457px;
}
span.s10{
    display: inline-block;
    transform: scale(0.5);
    width: 43px;
    height: 46px;
    background:url('../assets/images/h13.png') no-repeat -7px -511px;
}
footer{
    overflow: hidden;
    position: relative;
    text-align: center;
    width: 100%;
    margin-top:9%;
    margin-bottom: 5%;
}
.f1{
    position: relative;
    overflow: hidden;
    margin: 0px;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;

}
.f1 li{
    margin: 0px;
    padding: 0px;
    float: left;

}
.f1-left{
    left: 1%;
    display: inline-block;
    transform: scale(0.5);
    width: 145px;
    height: 30px;
    background: url('../assets/images/h14.png') no-repeat 0px -39px;
}
.f1-middle img{
    width: 100%;
    transform: scale(0.5);
}

.f1-right{
    position: relative;
    width: 120px;
    text-align: center;
    background-color: #ff506a;
    font-size: 13px;
    border-radius: 10px;
}
.f1 span{
    position: absolute;
    top: 4px;
    right: 8px;
    width: 7px;
    height: 7px;
    transform: rotate(-45deg);
    border-right: 2px solid white;
    border-bottom: 2px solid white;
}
.f2{
    width: 100%;
    overflow: hidden;
}
.f2 li{
    width: 49%;
    float: left;
    margin: 0px;
    border-bottom: 1px solid gray;
}
.f3{
    margin: 1% 0px 0px;
    overflow: hidden;
    
}
.f3 li{
    margin: 10px 0px;
    text-align: center;
    float: left;
    width: 33.33%;
}
.last{
    width: 100%;
    height: auto;
    text-align: center;
}
span.last-one{
      display: inline-block;
      transform: scale(0.7);
      width: 40px;
      height: 40px;
      background: url('../assets/images/h2.png')  no-repeat -1px -157px;
}
.f3 span{
    font-size: 40px;
}
 p.fz{
    width: 100%;
    font-size: 12px;
    overflow: hidden;
    text-align: center;
    margin: 2% 0;
}
p.fz2{
    font-size: 12px;
    color: #999;
}
div.sous{
    position: relative;
    text-align: center;
    width: 100%;
    height: 44px;
    background-color: #e6f0f7;
}
span.s-one{
    position: absolute;
    top: 0;
    left: 0;
    width: 45px;
    height: 44px;
}
.s-one i{
    position: absolute;
    top: 17px;
    left: 10px;
    width: 12px;
    height: 12px;
    border-left:1px solid black ;
    border-top:1px solid black ;
    transform: rotate(-45deg)
}
.sous input{
    width: 310px;
    margin-top: 10px;
    position: relative;
}
.sous button{
    position: absolute;
    top: 0;
    right: 0;
    height: 44px;
    width: 50px;
    border: none;
    background-color: #e6f0f7;
    color: #099fde;
}
h4.khk{
    width: 90%;
    font-size: 13px;
    color: #666;
    overflow: hidden;
    padding: 2% 5%;
    border-bottom:1px solid #fafafc ;
}
.khs{
    width: 100%;
    overflow: hidden;
}
.khs li{
    position: relative;
    width: 80%;
    padding: 2% 10%;
    border-bottom:1px solid #fafafc ;
}
.khs span{
    right: 10px;
    top: 10px;
    width: 14px;
    height: 14px;
    position: absolute;
}
 .khs img{
     width: 100%;
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
