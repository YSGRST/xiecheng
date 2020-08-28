<template>
    <div>
        <div class="t1">
            <router-link :to="{path:'/'}"><span class="t11"></span></router-link>
            <div class="t12">
                <p>上海</p>
                <span class="t13"></span>
            </div>
            <input type="text" placeholder="目的地/景点/游玩主题" class="t14">
            <span class="t15"></span>
            <router-link :to="{path:'/login'}"><span class="iconfont icon-wode t16"></span>
            <span class="t17">登录</span></router-link>
        </div>
        <div class="t2">
            <mt-swipe :auto="4000">
            <mt-swipe-item><img src="../assets/images/c2.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../assets/images/c12.png" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../assets/images/c1.jpg" alt=""></mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="t3">
            <p><span class="iconfont icon-dianzan t31"></span>
                必游景点推荐
            </p>
        </div>
        <div class="t32">
                <ul class="t321">
                    <li class="l1">
                        <img src="../assets/images/t1.jpg" alt="">
                        <p class="t323">上海城市历史</p>
                        <p class="t322">26条路线</p>
                    </li>
                    <li>
                        <img src="../assets/images/t2.jpg" alt="">
                        <p class="t323">东方明珠</p>
                        <p class="t322">45条路线</p>
                    </li>
                    <li>
                        <img src="../assets/images/t3.jpg" alt="">
                        <p class="t323">外滩</p>
                        <p class="t322">60条路线</p>
                    </li>
                    <li class="l4">
                        <img src="../assets/images/t4.jpg" alt="">
                        <p class="t323">浦江游览</p>
                        <p class="t322">10条路线</p>
                    </li>
                    <li>
                        <img src="../assets/images/t5.jpg" alt="">
                        <p class="t323">城隍庙旅游区</p>
                        <p class="t322">32条路线</p>
                    </li>
                    <li>
                        <img src="../assets/images/t6.jpg" alt="">
                        <p class="t323">上海迪士尼度假区</p>
                        <p class="t322">42条路线</p>
                    </li>
                </ul>
            </div>
            <p class="t4">上海全部一日游</p>
            <div class="t5"></div>
            <div class="t6">
                <p class="t61">
                    <span class="iconfont icon-remen"></span>
                    周边热门城市
                </p>
                <div class="t62">
                    <li class="t621">迪士尼度假区</li>
                    <li>苏州</li>
                    <li>周庄</li>
                    <li>昆山</li>
                    <li>乌镇</li>
                    <li>嘉兴</li>
                    <li>桐乡</li>
                    <li>嘉善</li>
                </div>
            </div>
            <div class="t7"></div>
            <div class="t8">
                <p class="t81">
                    <span class="iconfont icon-xiaoche"></span>
                    包车一日游
                </p>
            </div>
            <div class="t9">
                <div class="t91">
                <img src="../assets/images/o1.png" alt="">
                </div>
                <p>尊享体验 包车畅游</p>
                <span>省心 • 自由 • 高性价比</span>
                <b>查看</b>
            </div>
            <div class="t10">
                <ul>
                    <li class="current">精选一日游</li>
                    <li>景点门票</li>
                    <li>其他娱乐</li>
                </ul>
            </div>
            <div class="t20">
                <ul class="t201">
                    <li>
                        <img src="../assets/images/t10.jpg" alt="">
                        <p class="t204">上海东方明珠+浦江游览+城隍庙旅游区+外滩一日游【1-20人小团 赠迪士尼商店精美礼品】</p>
                        <ul class="t202">
                            <li>可订明日</li>
                            <li>无购物</li>
                            <li>无自费</li>
                            <li>立即确认</li>
                        </ul>
                        <p class="t203">
                            4.9分
                            月销售199份
                        </p>
                        <p class="t205">￥268元</p>
                    </li>
                    <li>
                        <img src="../assets/images/t10.jpg" alt="">
                        <p class="t204">上海东方明珠+浦江游览+城隍庙旅游区+外滩一日游【1-20人小团 赠迪士尼商店精美礼品】</p>
                        <ul class="t202">
                            <li>可订明日</li>
                            <li>无购物</li>
                            <li>无自费</li>
                            <li>立即确认</li>
                        </ul>
                        <p class="t203">
                            4.9分
                            月销售199份
                        </p>
                        <p class="t205">￥268元</p>
                    </li>
                    <li>
                        <img src="../assets/images/t10.jpg" alt="">
                        <p class="t204">上海东方明珠+浦江游览+城隍庙旅游区+外滩一日游【1-20人小团 赠迪士尼商店精美礼品】</p>
                        <ul class="t202">
                            <li>可订明日</li>
                            <li>无购物</li>
                            <li>无自费</li>
                            <li>立即确认</li>
                        </ul>
                        <p class="t203">
                            4.9分
                            月销售199份
                        </p>
                        <p class="t205">￥268元</p>
                    </li>
                    <li>
                        <img src="../assets/images/t10.jpg" alt="">
                        <p class="t204">上海东方明珠+浦江游览+城隍庙旅游区+外滩一日游【1-20人小团 赠迪士尼商店精美礼品】</p>
                        <ul class="t202">
                            <li>可订明日</li>
                            <li>无购物</li>
                            <li>无自费</li>
                            <li>立即确认</li>
                        </ul>
                        <p class="t203">
                            4.9分
                            月销售199份
                        </p>
                        <p class="t205">￥268元</p>
                    </li>
                    <li>
                        <img src="../assets/images/t10.jpg" alt="">
                        <p class="t204">上海东方明珠+浦江游览+城隍庙旅游区+外滩一日游【1-20人小团 赠迪士尼商店精美礼品】</p>
                        <ul class="t202">
                            <li>可订明日</li>
                            <li>无购物</li>
                            <li>无自费</li>
                            <li>立即确认</li>
                        </ul>
                        <p class="t203">
                            4.9分
                            月销售199份
                        </p>
                        <p class="t205">￥268元</p>
                    </li>
                    <li>
                        <img src="../assets/images/t10.jpg" alt="">
                        <p class="t204">上海东方明珠+浦江游览+城隍庙旅游区+外滩一日游【1-20人小团 赠迪士尼商店精美礼品】</p>
                        <ul class="t202">
                            <li>可订明日</li>
                            <li>无购物</li>
                            <li>无自费</li>
                            <li>立即确认</li>
                        </ul>
                        <p class="t203">
                            4.9分
                            月销售199份
                        </p>
                        <p class="t205">￥268元</p>
                    </li>
                    <li>
                        <img src="../assets/images/t10.jpg" alt="">
                        <p class="t204">上海东方明珠+浦江游览+城隍庙旅游区+外滩一日游【1-20人小团 赠迪士尼商店精美礼品】</p>
                        <ul class="t202">
                            <li>可订明日</li>
                            <li>无购物</li>
                            <li>无自费</li>
                            <li>立即确认</li>
                        </ul>
                        <p class="t203">
                            4.9分
                            月销售199份
                        </p>
                        <p class="t205">￥268元</p>
                    </li>
                </ul>
            </div>
    </div>
</template>
<style scoped>
    *{
        list-style: none;
    }
    .t1{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 50;
        height: 54px;
        padding: 9px 0;
        box-sizing: border-box;
        line-height: 54px;
        position: relative;
    }
    .t11{
        height: 25px;
        width: 25px;
        background: url('../assets/images/i3.png') no-repeat;
        background-size: 100%;
        display: inline-block;
        margin-left: 2%;
        overflow: hidden;
        float: left;
        margin-top: 7px;
    }
    .t12{
        height: 34px;
        width: 15%;
        background-color: #f4f4f4;
        line-height: 34px;
        font-size: 18px;
        float: left;
        position: relative;
       
    }
    .t13{
        height: 14px;
        width: 14px;
        background: url('../assets/images/i4.png') no-repeat;
        background-size: 100%;
        display: inline-block;
        position: absolute;
        top: 10px;
        right: 0px;
        border-right: 1px black solid;
    }
    .t14{
        height: 34px;
        width: 40%;
        background-color: #f4f4f4;
        border: 0px white solid;
        outline: none;
        float: left;
        margin-top: 0px;
        background: url('../assets/images/i6.png') no-repeat #f4f4f4;
        background-size: 12px;
        background-position: 10px;
        font-size: 15px;
        padding-left: 25px;
    }
    .t15{
        height: 21px;
        width: 21px;
        display: inline-block;
        background: url('../assets/images/i7.png') no-repeat;
        background-size: 100%;
        margin-left: 4%;
        position: absolute;
        top: 15px;
    }
    .t16{
        font-size: 22px;
        margin-left: 12%;
        position: absolute;
        top: 0px;
    }
    .t17{
        font-size: 15px;
        margin-left: 18%;
        position: absolute;
        top: 0px;
    }
    .t3{
        width: 94%;
        margin: 10px auto 10px;
    }
    .t3 .t31{
        color: red;
    }
    .t3 p{
        font-size: 14px;
    }
    .t32 .t321{
        overflow: hidden;
    }
    .t32{
        margin-top: 10px;
    }
    .t32 li{
        width: 29.3%;
        text-align: center;
        float: left;
        margin-left: 3%;
        margin-bottom: 5px;
    }
    .t32 li img{
        width: 100%;
    }
    .t32 li .t322{
        font-size: 13px;
    }
    .t323{
        font-size: 15px;
        margin-top: 5px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    .t4{
        margin: 20px auto 20px;
        width: 50%;
        height: 35px;
        border: 1px blueviolet solid;
        border-radius: 5px;
        line-height: 35px;
        text-align: center;
    }
    .t5{
        width: 100%;
        height: 10px;
        background-color: #f4f4f4;
    }
    .t61{
        width: 94%;
        margin: 10px auto 15px;
        font-size: 14px;
    }
    .t61 span{
        color: red;
    }
    .t62 li{
        height: 35px;
        width: 22.5%;
        line-height: 35px;
        margin-left: 2%;
        margin-bottom: 10px;
        float: left;
        background-color: #f4f4f4;
        text-align: center;
    }
    .t621{
        font-size: 12px;
    }
    .t62 li:nth-of-type(4n){
        margin-right: none;
    }
    .t7{
        width: 100%;
        height: 10px;
        background-color: #f4f4f4;
        margin-top: 15vh;
    }
    .t8{
        width: 94%;
        margin: 10px auto 15px;
        font-size: 14px;
    }
    .t81 span{
        color: red;
    }
    .t9{
        height: 80px;
        border-bottom: 10px solid #f4f4f4;
    }
    .t91{
        width: 30%;
        float: left;
    }
    .t91 img{
        width: 100%;
    }
    .t9 b{
        height: 20px;
        width: 40px;
        border: 1px blueviolet solid;
        border-radius: 10px;
        color: blueviolet;
        float: right;
        font-size: 16px;
        font-weight: none;
        text-align: center;
        line-height: 20px;
    }
    .t101{
        width: 30%;
        float: left;
    }
    .t10{
        width: 100%;
        height: 43px;
    }
    .t10 ul{
        width: 100%;
        height: 43px;
        overflow: hidden;
    }
    .t10 li{
        height: 40px;
        width: 33.33%;
        float: left;
        text-align: center;
        line-height: 40px;
        font-size: 18px;
        
    }
    .t10 .current{
        border-bottom: 3px black solid;
    }
    .t20 .t201{
        overflow: hidden;
    }
    .t20 .t201>li{
        height: 110px;
        width: 100%;
        margin-bottom: 15px;
        position: relative;
    }
    .t20 img{
        height: 110px;
        width: 30%;
        float: left;
    }
    .t20 .t201>li>.t204{
        font-size: 15px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .t202{
        overflow: hidden;
    }
    .t202>li{
        float: left;
        margin-left: 5px;
        font-size: 13px;
        background-color: blueviolet;
        margin-top: 10px;
    }
    p.t203{
        font-size: 12px;
        margin-top: 30px;
    }
    p.t205{
        font-size: 20px;
        color: #ff6913;
        position: absolute;
        right: 0px;
        bottom: 0px;
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
<style>
    .t2 img{
        width: 100%;
    }
    .t2 .mint-swipe-items-wrap{
        padding-bottom: 43.75%;
    }
    .mint-tab-item-label{
        font-size: 16px;
    }
</style>
