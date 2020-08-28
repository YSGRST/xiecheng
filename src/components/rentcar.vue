<template>
    <div>
        <div class="header">
            <img src="../assets/images/pc3.jpg" alt="" class="c">
            <router-link :to="{path:'/photo'}"><img src="../assets/images/a.png" alt="" class="red"></router-link>
        </div>
        <h4>专车接送/包车</h4>
        <div class="nav">
            <ul>
                <li><img src="../assets/images/tb1.png" alt="">
                    <p>国内接送机</p>
                    <span>无忧行</span>
                </li>
                <li><img src="../assets/images/tb2.png" alt="">
                    <p>境外接送机</p>
                    </li>
                <li><img src="../assets/images/tb3.png" alt="">
                    <p>接送火车</p>
                </li>
                <li class="current"><img src="../assets/images/tb4.png" alt="">
                    <p>境外打车</p>
                </li>
                <li class="current"><img src="../assets/images/tb5.png" alt="">
                    <p>包车</p>
                    <span>导期游</span>
                </li>
            </ul>
        </div>
        <h4>租车自驾</h4>
        <div class="navi">
            <ul>
                <li><img src="../assets/images/tb6.png" alt="">
                    <p>国内自驾租车</p>
                </li>
                <li><img src="../assets/images/tb7.png" alt="">
                    <p>境外自驾租车</p>
                </li>
            </ul>
        </div>
        <div class="buttom">
            
            <div class="left"><router-link :to="{path:'/login'}"><span class="iconfont icon-dingdan"></span>
            <p>订单</p>
            </router-link></div>
            <div class="right"><span class="iconfont icon-erji"></span>
            <p>客服</p>
            </div>
        </div>
        
    </div>
    
</template>

<style scoped>
    body{
        background-color: #c7c9cb;
    }
    .header{
        position: relative;
        background-color: white;
    }
    .header .c{
        width: 100%;
    }
    .header .red{
        position: absolute;
        width: 8%;
        top: 5px;
        right: 5px;
    }
    h4{
        margin:10px 0px 10px 3%;
    }
    .nav{
        width: 94%;
        margin: 0px auto;
        background-color: white;
        border-radius: 5px;
    }
    .nav>ul{
        overflow: hidden;
    }
    .nav ul li{
        float: left;
        width: 26%;
        margin-top: 5%;
        margin-left: 4%;
        text-align: center;
        position: relative;
    }
    .nav li span{
        height: 15px;
        width: 45px;
        font-size: 10px;
        position: absolute;
        top: 0px;
        right: 0px;
        background: rgba(255, 119, 0, 0.7);
        border-radius: 15px;
    }
    .current{
        margin-bottom: 5%;
    }
    .nav p{
        font-size: 14px;
    }
    .nav img{
        width: 65%;
        /* z-index: 0; */
    }
    .navi{
        width: 94%;
        background-color: white;
        margin: 0px auto 20px auto;
    }
    .navi ul{
        overflow: hidden;
    }
    .navi ul li{
        float: left;
        width: 28%;
        margin: 5% 0px 5% 4%;
        text-align: center;
    }
    .navi img{
        width: 60%;
    }
    .navi p{
        font-size: 14px;
    }
    .buttom{
        background-color: white;
        width: 100%;
        height: 60px;
        /* position: fixed;
        bottom: 0px; */
        margin-top: 20px;
    }
    .buttom span{
        font-size: 33px;
    }
    .buttom p{
        font-size: 14px;
    }
    .buttom .left{
        float: left;
        margin-left: 25%;
        text-align: center;
    }
    .buttom .right{
        float: right;
        margin-right: 25%;
        text-align: center;
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
    

