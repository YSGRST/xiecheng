<template>
    <div>
        <div class="header">
            <img src="../assets/images/pc1.jpg" alt="" class="a">
            <div class="top">
                <div class="first">
                    <router-link :to="{path:'homepage'}"><span class="left"><img src="../assets/images/i3.png" alt=""></span></router-link>
                    <span class="b">全球</span>
                    <i><img src="../assets/images/i4.png" alt=""></i>
                    <input type="text" placeholder="试试搜“日韩泰最美旅拍”">
                    <span class="right"><img src="../assets/images/i5.jpg" alt=""></span>
                </div>
                <div id="lis">
                <ul>
                    <li v-for="(item,index) in list" @click="change(item,index)" :class="{current:num==index}">{{item.con}}</li>

                </ul>
                </div>
            </div>
        </div>
        <main>
            <component :is="msg" :a="sh"></component>
            <div id="nav">
                <ol class="pic">
                    <li v-for="(item,index) in a.list">
                    <img :src="item.src" alt="">
                    <p class>{{item.title}}</p>
                    <span class="l"><img :src="item.src2" alt=""></span>
                    <span class="l1">{{item.y}}</span>
                    <span class="r"><img :src="item.src1" alt="">{{item.f}}</span>
                    </li>
                </ol>
            </div>
        </main>
    </div>
</template>

<style scoped>
    body{
        width: 100%;
        overflow-x: hidden;
    }
    .header .a{
        width: 100%;
    }
    
    .top .first{
        width: 100%;
    }
    .top .left img{
            height: 24px;
            width: 24px;
            position: relative;
            top: 5px;
            margin-left: 2%;
        }
        .top i img{
            height: 16px;
            width: 16px;
            position: relative;
            top:3px;
        }
        .top .b{
            height: 22px;
            width: 32px;
            text-align: center;
            line-height: 22px;
            font-size: 15px;
        }
        .top input{
            height: 31px;
            border-radius: 32px;
            border: 1px white solid;
            border-style: none;
            width: 50%;
            margin-right: 2%;
            background: url('../assets/images/i6.png') no-repeat #f4f4f4;
            background-size: 12px;
            background-position: 10px;
            font-size: 15px;
            padding-left: 25px;
        }
        .top .right img{
            height: 21px;
            width: 21px;
            border-radius: 50%;
            float: right;
            position: absolute;
            top:8px;
            right: 3%;
        }
        #lis{
            width: 100%;
            overflow-x: scroll;
            position: fixed;
            top: 8%;
            margin-bottom: 10px;
        }
        #lis ul{
            height: 30px;
            width: 180%;
        }
        #lis ul li{
            height: 30px;
            
            float: left;
            margin-left: 5%;
            font-size: 16px;
        }
        #lis ul li.current{
            font-size: 20px;
            border-bottom: 3px black solid;
        }
       
</style>
<style>
        #nav{
            position: absolute;
            top: 15%;
        }
        #nav>.pic{
            overflow: hidden;
        }
        .pic li{
            width: 47%;
            float: left;
            margin-left: 2%;
            margin-bottom: 10px;
        }
        .pic li img{
            width: 100%;
            
        }
        .pic p{
            font-size: 14px;
        color: #222;
        padding-top: 10px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        }
        .header .top{
        height: 13vh;
        position: fixed;
        top: 0px;
        width: 100%;
        background-color: white;
        z-index: 10;
        }
        #nav .pic .l{
            margin-top: 12px;
        }
        #nav .l img{
            height: 25px;
            width: 25px;
            border-radius: 50%;
            margin-top: 10px;
            float: left;
        }
        #nav .l1{
            float: left;
            font-size: 12px;
            margin-top: 15px;
            margin-left: 10px;
        }
        #nav .pic .r{
            font-size: 11px;
            float: right;
            margin-top: 15px;
        }
         #nav .r img{
            height: 18px;
            width: 18px;
            float: left;
        }
</style>

<script>
export default {
    data(){
        return {
            a:'',
            num:0,
            list:[
                 {
                    con:'推荐',
                    id:'v-nav'
                },
                {
                    con:'视频',
                    id:'v-nav'
                },
                {
                    con:'网红打卡地',
                    id:'v-nav'
                },
                {
                    con:'国内超美小岛',
                    id:'v-nav'
                },
                {
                    con:'影剧打卡地',
                    id:'v-nav'
                }
            ],
            msg:'v-nav',
            sh:'这是推荐'
        }          
    },
    components:{
        'v-nav':{
            template:`<div id="nav">
                    <ol class="pic">
                    <li v-for="(item,index) in a.list">
                    <img :src="item.src" alt="">
                    <p>{{item.title}}</p>
                    <span class="l"><img :src="item.src2" alt=""></span>
                    <span class="l1">{{item.y}}</span>
                    <span class="r"><img :src="item.src1" alt="">{{item.f}}</span>
                    </li>
                </ol>
            </div>`,
            props:['a'],
            data(){
                return{
                                
                        }
                    }
                }
                    
            },
            mounted(){
                this.change(this.list[0],0)
            },
    methods:{
        
        change(a,b){
            this.num=b;
            this.msg=a.id;

            if(a.con=='推荐'){
                this.sh={
                    list:[
                        {
                            src:'./src/assets/images/pc8.jpg',
                            title:'上海迪士尼神仙民宿 假装在巴厘岛 泳池好好看！  就是街舞2宣传片拍摄地 上海鹿绕云民宿  上上周末',
                            y:'陈苗哒',
                            f:'1888',
                            src1:'./src/assets/images/pc82.png',
                            src2:'./src/assets/images/pc81.jpg'
                        },
                        {
                            src:'./src/assets/images/pc8.jpg',
                            title:'上海迪士尼神仙民宿 假装在巴厘岛 泳池好好看！  就是街舞2宣传片拍摄地 上海鹿绕云民宿  上上周末',
                            y:'陈苗哒',
                            f:'1888',
                            src1:'./src/assets/images/pc82.png',
                            src2:'./src/assets/images/pc81.jpg'
                        },
                        {
                            src:'./src/assets/images/pc8.jpg',
                            title:'上海迪士尼神仙民宿 假装在巴厘岛 泳池好好看！  就是街舞2宣传片拍摄地 上海鹿绕云民宿  上上周末',
                            y:'陈苗哒',
                            f:'1888',
                            src1:'./src/assets/images/pc82.png',
                            src2:'./src/assets/images/pc81.jpg'
                        },
                        {
                            src:'./src/assets/images/pc8.jpg',
                            title:'上海迪士尼神仙民宿 假装在巴厘岛 泳池好好看！  就是街舞2宣传片拍摄地 上海鹿绕云民宿  上上周末',
                            y:'陈苗哒',
                            f:'1888',
                            src1:'./src/assets/images/pc82.png',
                            src2:'./src/assets/images/pc81.jpg'
                        },
                        {
                            src:'./src/assets/images/pc8.jpg',
                            title:'上海迪士尼神仙民宿 假装在巴厘岛 泳池好好看！  就是街舞2宣传片拍摄地 上海鹿绕云民宿  上上周末',
                            y:'陈苗哒',
                            f:'1888',
                            src1:'./src/assets/images/pc82.png',
                            src2:'./src/assets/images/pc81.jpg'
                        },
                        {
                            src:'./src/assets/images/pc8.jpg',
                            title:'上海迪士尼神仙民宿 假装在巴厘岛 泳池好好看！  就是街舞2宣传片拍摄地 上海鹿绕云民宿  上上周末',
                            y:'陈苗哒',
                            f:'1888',
                            src1:'./src/assets/images/pc82.png',
                            src2:'./src/assets/images/pc81.jpg'
                        },
                        {
                            src:'./src/assets/images/pc8.jpg',
                            title:'上海迪士尼神仙民宿 假装在巴厘岛 泳池好好看！  就是街舞2宣传片拍摄地 上海鹿绕云民宿  上上周末',
                            y:'陈苗哒',
                            f:'1888',
                            src1:'./src/assets/images/pc82.png',
                            src2:'./src/assets/images/pc81.jpg'
                        },
                        {
                            src:'./src/assets/images/pc8.jpg',
                            title:'上海迪士尼神仙民宿 假装在巴厘岛 泳池好好看！  就是街舞2宣传片拍摄地 上海鹿绕云民宿  上上周末',
                            y:'陈苗哒',
                            f:'1888',
                            src1:'./src/assets/images/pc82.png',
                            src2:'./src/assets/images/pc81.jpg'
                        },
                        {
                            src:'./src/assets/images/pc8.jpg',
                            title:'上海迪士尼神仙民宿 假装在巴厘岛 泳池好好看！  就是街舞2宣传片拍摄地 上海鹿绕云民宿  上上周末',
                            y:'陈苗哒',
                            f:'1888',
                            src1:'./src/assets/images/pc82.png',
                            src2:'./src/assets/images/pc81.jpg'
                        },
                        {
                            src:'./src/assets/images/pc8.jpg',
                            title:'上海迪士尼神仙民宿 假装在巴厘岛 泳池好好看！  就是街舞2宣传片拍摄地 上海鹿绕云民宿  上上周末',
                            y:'陈苗哒',
                            f:'1888',
                            src1:'./src/assets/images/pc82.png',
                            src2:'./src/assets/images/pc81.jpg'
                        },
                        {
                            src:'./src/assets/images/pc8.jpg',
                            title:'上海迪士尼神仙民宿 假装在巴厘岛 泳池好好看！  就是街舞2宣传片拍摄地 上海鹿绕云民宿  上上周末',
                            y:'陈苗哒',
                            f:'1888',
                            src1:'./src/assets/images/pc82.png',
                            src2:'./src/assets/images/pc81.jpg'
                        },
                        {
                            src:'./src/assets/images/pc8.jpg',
                            title:'上海迪士尼神仙民宿 假装在巴厘岛 泳池好好看！  就是街舞2宣传片拍摄地 上海鹿绕云民宿  上上周末',
                            y:'陈苗哒',
                            f:'1888',
                            src1:'./src/assets/images/pc82.png',
                            src2:'./src/assets/images/pc81.jpg'
                        },
                        {
                            src:'./src/assets/images/pc8.jpg',
                            title:'上海迪士尼神仙民宿 假装在巴厘岛 泳池好好看！  就是街舞2宣传片拍摄地 上海鹿绕云民宿  上上周末',
                            y:'陈苗哒',
                            f:'1888',
                            src1:'./src/assets/images/pc82.png',
                            src2:'./src/assets/images/pc81.jpg'
                        },
                        {
                            src:'./src/assets/images/pc8.jpg',
                            title:'上海迪士尼神仙民宿 假装在巴厘岛 泳池好好看！  就是街舞2宣传片拍摄地 上海鹿绕云民宿  上上周末',
                            y:'陈苗哒',
                            f:'1888',
                            src1:'./src/assets/images/pc82.png',
                            src2:'./src/assets/images/pc81.jpg'
                        },
                        {
                            src:'./src/assets/images/pc8.jpg',
                            title:'上海迪士尼神仙民宿 假装在巴厘岛 泳池好好看！  就是街舞2宣传片拍摄地 上海鹿绕云民宿  上上周末',
                            y:'陈苗哒',
                            f:'1888',
                            src1:'./src/assets/images/pc82.png',
                            src2:'./src/assets/images/pc81.jpg'
                        },
                        {
                            src:'./src/assets/images/pc8.jpg',
                            title:'上海迪士尼神仙民宿 假装在巴厘岛 泳池好好看！  就是街舞2宣传片拍摄地 上海鹿绕云民宿  上上周末',
                            y:'陈苗哒',
                            f:'1888',
                            src1:'./src/assets/images/pc82.png',
                            src2:'./src/assets/images/pc81.jpg'
                        },
                        {
                            src:'./src/assets/images/pc8.jpg',
                            title:'上海迪士尼神仙民宿 假装在巴厘岛 泳池好好看！  就是街舞2宣传片拍摄地 上海鹿绕云民宿  上上周末',
                            y:'陈苗哒',
                            f:'1888',
                            src1:'./src/assets/images/pc82.png',
                            src2:'./src/assets/images/pc81.jpg'
                        },
                        {
                            src:'./src/assets/images/pc8.jpg',
                            title:'上海迪士尼神仙民宿 假装在巴厘岛 泳池好好看！  就是街舞2宣传片拍摄地 上海鹿绕云民宿  上上周末',
                            y:'陈苗哒',
                            f:'1888',
                            src1:'./src/assets/images/pc82.png',
                            src2:'./src/assets/images/pc81.jpg'
                        },
                        {
                            src:'./src/assets/images/pc8.jpg',
                            title:'上海迪士尼神仙民宿 假装在巴厘岛 泳池好好看！  就是街舞2宣传片拍摄地 上海鹿绕云民宿  上上周末',
                            y:'陈苗哒',
                            f:'1888',
                            src1:'./src/assets/images/pc82.png',
                            src2:'./src/assets/images/pc81.jpg'
                        },
                        {
                            src:'./src/assets/images/pc8.jpg',
                            title:'上海迪士尼神仙民宿 假装在巴厘岛 泳池好好看！  就是街舞2宣传片拍摄地 上海鹿绕云民宿  上上周末',
                            y:'陈苗哒',
                            f:'1888',
                            src1:'./src/assets/images/pc82.png',
                            src2:'./src/assets/images/pc81.jpg'
                        },
                    ]
                }
            }else if(a.con=='视频'){
                this.sh={
                    list:[
                        {
                            src:'./src/assets/images/pc9.jpg',
                            title:'马尔代夫奥瑞格岛是马尔代夫六星岛屿中性价比非常高的一个岛! 超大房间200+平米面积，所有别墅都带超',
                            y:'Jacky',
                            f:'2356',
                            src2:'./src/assets/images/pc91.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc9.jpg',
                            title:'马尔代夫奥瑞格岛是马尔代夫六星岛屿中性价比非常高的一个岛! 超大房间200+平米面积，所有别墅都带超',
                            y:'Jacky',
                            f:'2356',
                            src2:'./src/assets/images/pc91.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc9.jpg',
                            title:'马尔代夫奥瑞格岛是马尔代夫六星岛屿中性价比非常高的一个岛! 超大房间200+平米面积，所有别墅都带超',
                            y:'Jacky',
                            f:'2356',
                            src2:'./src/assets/images/pc91.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc9.jpg',
                            title:'马尔代夫奥瑞格岛是马尔代夫六星岛屿中性价比非常高的一个岛! 超大房间200+平米面积，所有别墅都带超',
                            y:'Jacky',
                            f:'2356',
                            src2:'./src/assets/images/pc91.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc9.jpg',
                            title:'马尔代夫奥瑞格岛是马尔代夫六星岛屿中性价比非常高的一个岛! 超大房间200+平米面积，所有别墅都带超',
                            y:'Jacky',
                            f:'2356',
                            src2:'./src/assets/images/pc91.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc9.jpg',
                            title:'马尔代夫奥瑞格岛是马尔代夫六星岛屿中性价比非常高的一个岛! 超大房间200+平米面积，所有别墅都带超',
                            y:'Jacky',
                            f:'2356',
                            src2:'./src/assets/images/pc91.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc9.jpg',
                            title:'马尔代夫奥瑞格岛是马尔代夫六星岛屿中性价比非常高的一个岛! 超大房间200+平米面积，所有别墅都带超',
                            y:'Jacky',
                            f:'2356',
                            src2:'./src/assets/images/pc91.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc9.jpg',
                            title:'马尔代夫奥瑞格岛是马尔代夫六星岛屿中性价比非常高的一个岛! 超大房间200+平米面积，所有别墅都带超',
                            y:'Jacky',
                            f:'2356',
                            src2:'./src/assets/images/pc91.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc9.jpg',
                            title:'马尔代夫奥瑞格岛是马尔代夫六星岛屿中性价比非常高的一个岛! 超大房间200+平米面积，所有别墅都带超',
                            y:'Jacky',
                            f:'2356',
                            src2:'./src/assets/images/pc91.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc9.jpg',
                            title:'马尔代夫奥瑞格岛是马尔代夫六星岛屿中性价比非常高的一个岛! 超大房间200+平米面积，所有别墅都带超',
                            y:'Jacky',
                            f:'2356',
                            src2:'./src/assets/images/pc91.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc9.jpg',
                            title:'马尔代夫奥瑞格岛是马尔代夫六星岛屿中性价比非常高的一个岛! 超大房间200+平米面积，所有别墅都带超',
                            y:'Jacky',
                            f:'2356',
                            src2:'./src/assets/images/pc91.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc9.jpg',
                            title:'马尔代夫奥瑞格岛是马尔代夫六星岛屿中性价比非常高的一个岛! 超大房间200+平米面积，所有别墅都带超',
                            y:'Jacky',
                            f:'2356',
                            src2:'./src/assets/images/pc91.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc9.jpg',
                            title:'马尔代夫奥瑞格岛是马尔代夫六星岛屿中性价比非常高的一个岛! 超大房间200+平米面积，所有别墅都带超',
                            y:'Jacky',
                            f:'2356',
                            src2:'./src/assets/images/pc91.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc9.jpg',
                            title:'马尔代夫奥瑞格岛是马尔代夫六星岛屿中性价比非常高的一个岛! 超大房间200+平米面积，所有别墅都带超',
                            y:'Jacky',
                            f:'2356',
                            src2:'./src/assets/images/pc91.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc9.jpg',
                            title:'马尔代夫奥瑞格岛是马尔代夫六星岛屿中性价比非常高的一个岛! 超大房间200+平米面积，所有别墅都带超',
                            y:'Jacky',
                            f:'2356',
                            src2:'./src/assets/images/pc91.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc9.jpg',
                            title:'马尔代夫奥瑞格岛是马尔代夫六星岛屿中性价比非常高的一个岛! 超大房间200+平米面积，所有别墅都带超',
                            y:'Jacky',
                            f:'2356',
                            src2:'./src/assets/images/pc91.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc9.jpg',
                            title:'马尔代夫奥瑞格岛是马尔代夫六星岛屿中性价比非常高的一个岛! 超大房间200+平米面积，所有别墅都带超',
                            y:'Jacky',
                            f:'2356',
                            src2:'./src/assets/images/pc91.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },

                    ]
                }
            }else if(a.con=='网红打卡地'){
                this.sh={
                    list:[
                        {
                            src:'./src/assets/images/pc10.jpg',
                            title:'Disney打卡 早和晚都没有怎么下雨，玩着玩着淅淅沥沥的下着小雨 不过粗略算了算玩了10个项目（极',
                            y:'_WeCh****99753',
                            f:'5562',
                            src2:'./src/assets/images/pc101.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc10.jpg',
                            title:'Disney打卡 早和晚都没有怎么下雨，玩着玩着淅淅沥沥的下着小雨 不过粗略算了算玩了10个项目（极',
                            y:'_WeCh****99753',
                            f:'5562',
                            src2:'./src/assets/images/pc101.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc10.jpg',
                            title:'Disney打卡 早和晚都没有怎么下雨，玩着玩着淅淅沥沥的下着小雨 不过粗略算了算玩了10个项目（极',
                            y:'_WeCh****99753',
                            f:'5562',
                            src2:'./src/assets/images/pc101.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc10.jpg',
                            title:'Disney打卡 早和晚都没有怎么下雨，玩着玩着淅淅沥沥的下着小雨 不过粗略算了算玩了10个项目（极',
                            y:'_WeCh****99753',
                            f:'5562',
                            src2:'./src/assets/images/pc101.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc10.jpg',
                            title:'Disney打卡 早和晚都没有怎么下雨，玩着玩着淅淅沥沥的下着小雨 不过粗略算了算玩了10个项目（极',
                            y:'_WeCh****99753',
                            f:'5562',
                            src2:'./src/assets/images/pc101.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc10.jpg',
                            title:'Disney打卡 早和晚都没有怎么下雨，玩着玩着淅淅沥沥的下着小雨 不过粗略算了算玩了10个项目（极',
                            y:'_WeCh****99753',
                            f:'5562',
                            src2:'./src/assets/images/pc101.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc10.jpg',
                            title:'Disney打卡 早和晚都没有怎么下雨，玩着玩着淅淅沥沥的下着小雨 不过粗略算了算玩了10个项目（极',
                            y:'_WeCh****99753',
                            f:'5562',
                            src2:'./src/assets/images/pc101.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc10.jpg',
                            title:'Disney打卡 早和晚都没有怎么下雨，玩着玩着淅淅沥沥的下着小雨 不过粗略算了算玩了10个项目（极',
                            y:'_WeCh****99753',
                            f:'5562',
                            src2:'./src/assets/images/pc101.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc10.jpg',
                            title:'Disney打卡 早和晚都没有怎么下雨，玩着玩着淅淅沥沥的下着小雨 不过粗略算了算玩了10个项目（极',
                            y:'_WeCh****99753',
                            f:'5562',
                            src2:'./src/assets/images/pc101.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc10.jpg',
                            title:'Disney打卡 早和晚都没有怎么下雨，玩着玩着淅淅沥沥的下着小雨 不过粗略算了算玩了10个项目（极',
                            y:'_WeCh****99753',
                            f:'5562',
                            src2:'./src/assets/images/pc101.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc10.jpg',
                            title:'Disney打卡 早和晚都没有怎么下雨，玩着玩着淅淅沥沥的下着小雨 不过粗略算了算玩了10个项目（极',
                            y:'_WeCh****99753',
                            f:'5562',
                            src2:'./src/assets/images/pc101.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc10.jpg',
                            title:'Disney打卡 早和晚都没有怎么下雨，玩着玩着淅淅沥沥的下着小雨 不过粗略算了算玩了10个项目（极',
                            y:'_WeCh****99753',
                            f:'5562',
                            src2:'./src/assets/images/pc101.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                    ]
                }
            }else if(a.con=='国内超美小岛'){
                this.sh={
                    list:[
                        {
                            src:'./src/assets/images/pc11.jpg',
                            title:'黑排角海边徒步姐妹周末游（景美，免费，人少） 黑排角是广东惠州的一条海岸线，全长约14~15公里，是',
                            y:'梵霓fanny',
                            f:'6689',
                            src2:'./src/assets/images/pc111.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc11.jpg',
                            title:'黑排角海边徒步姐妹周末游（景美，免费，人少） 黑排角是广东惠州的一条海岸线，全长约14~15公里，是',
                            y:'梵霓fanny',
                            f:'6689',
                            src2:'./src/assets/images/pc111.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc11.jpg',
                            title:'黑排角海边徒步姐妹周末游（景美，免费，人少） 黑排角是广东惠州的一条海岸线，全长约14~15公里，是',
                            y:'梵霓fanny',
                            f:'6689',
                            src2:'./src/assets/images/pc111.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc11.jpg',
                            title:'黑排角海边徒步姐妹周末游（景美，免费，人少） 黑排角是广东惠州的一条海岸线，全长约14~15公里，是',
                            y:'梵霓fanny',
                            f:'6689',
                            src2:'./src/assets/images/pc111.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc11.jpg',
                            title:'黑排角海边徒步姐妹周末游（景美，免费，人少） 黑排角是广东惠州的一条海岸线，全长约14~15公里，是',
                            y:'梵霓fanny',
                            f:'6689',
                            src2:'./src/assets/images/pc111.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc11.jpg',
                            title:'黑排角海边徒步姐妹周末游（景美，免费，人少） 黑排角是广东惠州的一条海岸线，全长约14~15公里，是',
                            y:'梵霓fanny',
                            f:'6689',
                            src2:'./src/assets/images/pc111.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc11.jpg',
                            title:'黑排角海边徒步姐妹周末游（景美，免费，人少） 黑排角是广东惠州的一条海岸线，全长约14~15公里，是',
                            y:'梵霓fanny',
                            f:'6689',
                            src2:'./src/assets/images/pc111.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc11.jpg',
                            title:'黑排角海边徒步姐妹周末游（景美，免费，人少） 黑排角是广东惠州的一条海岸线，全长约14~15公里，是',
                            y:'梵霓fanny',
                            f:'6689',
                            src2:'./src/assets/images/pc111.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc11.jpg',
                            title:'黑排角海边徒步姐妹周末游（景美，免费，人少） 黑排角是广东惠州的一条海岸线，全长约14~15公里，是',
                            y:'梵霓fanny',
                            f:'6689',
                            src2:'./src/assets/images/pc111.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc11.jpg',
                            title:'黑排角海边徒步姐妹周末游（景美，免费，人少） 黑排角是广东惠州的一条海岸线，全长约14~15公里，是',
                            y:'梵霓fanny',
                            f:'6689',
                            src2:'./src/assets/images/pc111.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc11.jpg',
                            title:'黑排角海边徒步姐妹周末游（景美，免费，人少） 黑排角是广东惠州的一条海岸线，全长约14~15公里，是',
                            y:'梵霓fanny',
                            f:'6689',
                            src2:'./src/assets/images/pc111.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc11.jpg',
                            title:'黑排角海边徒步姐妹周末游（景美，免费，人少） 黑排角是广东惠州的一条海岸线，全长约14~15公里，是',
                            y:'梵霓fanny',
                            f:'6689',
                            src2:'./src/assets/images/pc111.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                    ]
                }
            }else if(a.con=='影剧打卡地'){
                this.sh={
                    list:[
                        {
                            src:'./src/assets/images/pc12.jpg',
                            title:'打卡冯小刚电影公社，穿越回复古摩登老上海',
                            y:'Q蜜思杨小妞Q',
                            f:'7768',
                            src2:'./src/assets/images/pc121.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc12.jpg',
                            title:'打卡冯小刚电影公社，穿越回复古摩登老上海',
                            y:'Q蜜思杨小妞Q',
                            f:'7768',
                            src2:'./src/assets/images/pc121.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc12.jpg',
                            title:'打卡冯小刚电影公社，穿越回复古摩登老上海',
                            y:'Q蜜思杨小妞Q',
                            f:'7768',
                            src2:'./src/assets/images/pc121.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc12.jpg',
                            title:'打卡冯小刚电影公社，穿越回复古摩登老上海',
                            y:'Q蜜思杨小妞Q',
                            f:'7768',
                            src2:'./src/assets/images/pc121.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc12.jpg',
                            title:'打卡冯小刚电影公社，穿越回复古摩登老上海',
                            y:'Q蜜思杨小妞Q',
                            f:'7768',
                            src2:'./src/assets/images/pc121.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc12.jpg',
                            title:'打卡冯小刚电影公社，穿越回复古摩登老上海',
                            y:'Q蜜思杨小妞Q',
                            f:'7768',
                            src2:'./src/assets/images/pc121.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc12.jpg',
                            title:'打卡冯小刚电影公社，穿越回复古摩登老上海',
                            y:'Q蜜思杨小妞Q',
                            f:'7768',
                            src2:'./src/assets/images/pc121.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc12.jpg',
                            title:'打卡冯小刚电影公社，穿越回复古摩登老上海',
                            y:'Q蜜思杨小妞Q',
                            f:'7768',
                            src2:'./src/assets/images/pc121.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc12.jpg',
                            title:'打卡冯小刚电影公社，穿越回复古摩登老上海',
                            y:'Q蜜思杨小妞Q',
                            f:'7768',
                            src2:'./src/assets/images/pc121.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc12.jpg',
                            title:'打卡冯小刚电影公社，穿越回复古摩登老上海',
                            y:'Q蜜思杨小妞Q',
                            f:'7768',
                            src2:'./src/assets/images/pc121.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc12.jpg',
                            title:'打卡冯小刚电影公社，穿越回复古摩登老上海',
                            y:'Q蜜思杨小妞Q',
                            f:'7768',
                            src2:'./src/assets/images/pc121.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc12.jpg',
                            title:'打卡冯小刚电影公社，穿越回复古摩登老上海',
                            y:'Q蜜思杨小妞Q',
                            f:'7768',
                            src2:'./src/assets/images/pc121.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc12.jpg',
                            title:'打卡冯小刚电影公社，穿越回复古摩登老上海',
                            y:'Q蜜思杨小妞Q',
                            f:'7768',
                            src2:'./src/assets/images/pc121.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc12.jpg',
                            title:'打卡冯小刚电影公社，穿越回复古摩登老上海',
                            y:'Q蜜思杨小妞Q',
                            f:'7768',
                            src2:'./src/assets/images/pc121.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc12.jpg',
                            title:'打卡冯小刚电影公社，穿越回复古摩登老上海',
                            y:'Q蜜思杨小妞Q',
                            f:'7768',
                            src2:'./src/assets/images/pc121.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc12.jpg',
                            title:'打卡冯小刚电影公社，穿越回复古摩登老上海',
                            y:'Q蜜思杨小妞Q',
                            f:'7768',
                            src2:'./src/assets/images/pc121.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc12.jpg',
                            title:'打卡冯小刚电影公社，穿越回复古摩登老上海',
                            y:'Q蜜思杨小妞Q',
                            f:'7768',
                            src2:'./src/assets/images/pc121.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc12.jpg',
                            title:'打卡冯小刚电影公社，穿越回复古摩登老上海',
                            y:'Q蜜思杨小妞Q',
                            f:'7768',
                            src2:'./src/assets/images/pc121.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc12.jpg',
                            title:'打卡冯小刚电影公社，穿越回复古摩登老上海',
                            y:'Q蜜思杨小妞Q',
                            f:'7768',
                            src2:'./src/assets/images/pc121.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc12.jpg',
                            title:'打卡冯小刚电影公社，穿越回复古摩登老上海',
                            y:'Q蜜思杨小妞Q',
                            f:'7768',
                            src2:'./src/assets/images/pc121.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },
                        {
                            src:'./src/assets/images/pc12.jpg',
                            title:'打卡冯小刚电影公社，穿越回复古摩登老上海',
                            y:'Q蜜思杨小妞Q',
                            f:'7768',
                            src2:'./src/assets/images/pc121.jpg',
                            src1:'./src/assets/images/pc82.png',
                        },

                    ]
                }
            }
        }
    }
}
</script>