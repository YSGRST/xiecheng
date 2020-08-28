<template>
    <div>
        <div v-show="num==1">
            <div class="first">
                <router-link :to="{path:'/login'}"><span class="left"></span></router-link>
                <span class="center">注册1/3</span>
            </div>
            <h2>输入手机号</h2>
            <div class="main">
                <p @click="add(num)" class="a">
                    中国大陆86
                    <span></span>
                </p>
                <input type="text" placeholder="常用手机号" class="b">
                <p class="deng">下一步，验证手机号</p>
            </div>
            <p class="f">
                登录即代表您同意我们的
                <a href="https://contents.ctrip.com/huodong/privacypolicyh5/index?type=1">服务协议</a>
                和
                <a href="https://contents.ctrip.com/huodong/privacypolicyh5/index?type=2">隐私政策</a>
            </p>
        </div>
        <div v-show="num==2">
            <div class="top">
                <span @click="del()" class="left"></span>
                <p class="center">选择国家或地区</p>
            </div>
            <div class="list">
                <mt-index-list>
                <mt-index-section index="热门">
                    <mt-cell title="中国"></mt-cell>
                    <mt-cell title="中国香港"></mt-cell>
                    <mt-cell title="中国澳门"></mt-cell>
                    <mt-cell title="中国台湾"></mt-cell>
                </mt-index-section>
                <mt-index-section index="A">
                    <mt-cell title="安道尔"></mt-cell>
                    <mt-cell title="奥地利"></mt-cell>
                    <mt-cell title="澳大利亚"></mt-cell>
                </mt-index-section>
                <mt-index-section index="B">
                    <mt-cell title="冰岛"></mt-cell>
                    <mt-cell title="巴哈马"></mt-cell>
                    <mt-cell title="保加利亚"></mt-cell>
                    <mt-cell title="巴基斯坦"></mt-cell>
                </mt-index-section>
                <mt-index-section index="C">
                    <mt-cell title="赤道几内亚"></mt-cell>
                    <mt-cell title="朝鲜"></mt-cell>
                </mt-index-section>
                <mt-index-section index="D">
                    <mt-cell title="多哥"></mt-cell>
                    <mt-cell title="德国"></mt-cell>
                    <mt-cell title="东帝汶"></mt-cell>
                    <mt-cell title="丹麦"></mt-cell>
                </mt-index-section>
                <mt-index-section index="E">
                    <mt-cell title="厄瓜多尔"></mt-cell>
                    <mt-cell title="俄罗斯"></mt-cell>
                    <mt-cell title="厄立特里亚"></mt-cell>
                </mt-index-section>
                <mt-index-section index="F">
                    <mt-cell title="梵蒂冈"></mt-cell>
                    <mt-cell title="佛得角"></mt-cell>
                    <mt-cell title="法国"></mt-cell>
                    <mt-cell title="斐济"></mt-cell>
                </mt-index-section>
                <mt-index-section index="G">
                    <mt-cell title="古巴"></mt-cell>
                    <mt-cell title="关岛"></mt-cell>
                    <mt-cell title="哥伦比亚"></mt-cell>
                    <mt-cell title="格陵兰"></mt-cell>
                </mt-index-section>
                <mt-index-section index="H">
                    <mt-cell title="海地"></mt-cell>
                    <mt-cell title="韩国"></mt-cell>
                    <mt-cell title="荷兰"></mt-cell>
                    <mt-cell title="洪都拉斯"></mt-cell>
                </mt-index-section>
                <mt-index-section index="I">
                </mt-index-section>
                <mt-index-section index="J">
                    <mt-cell title="几内亚"></mt-cell>
                    <mt-cell title="加拿大"></mt-cell>
                    <mt-cell title="柬埔寨"></mt-cell>
                    <mt-cell title="基里巴斯"></mt-cell>
                </mt-index-section>
                <mt-index-section index="K">
                    <mt-cell title="库克群岛"></mt-cell>
                    <mt-cell title="克罗地亚"></mt-cell>
                    <mt-cell title="科摩罗"></mt-cell>
                    <mt-cell title="开曼群岛"></mt-cell>
                </mt-index-section>
                <mt-index-section index="L">
                    <mt-cell title="利比里亚"></mt-cell>
                    <mt-cell title="卢森堡"></mt-cell>
                    <mt-cell title="卢旺达"></mt-cell>
                    <mt-cell title="罗马尼亚"></mt-cell>
                </mt-index-section>
                <mt-index-section index="M">
                    <mt-cell title="缅甸"></mt-cell>
                    <mt-cell title="马达加斯加"></mt-cell>
                    <mt-cell title="马尔代夫"></mt-cell>
                    <mt-cell title="摩尔多瓦"></mt-cell>
                </mt-index-section>
                <mt-index-section index="N">
                    <mt-cell title="尼泊尔"></mt-cell>
                    <mt-cell title="南非"></mt-cell>
                    <mt-cell title="挪威"></mt-cell>
                    <mt-cell title="尼日利亚"></mt-cell>
                </mt-index-section>
                <mt-index-section index="O">
                </mt-index-section>
                <mt-index-section index="P">
                    <mt-cell title="葡萄牙"></mt-cell>
                    <mt-cell title="帕劳群岛"></mt-cell>
                    <mt-cell title="皮特肯群岛"></mt-cell>
                </mt-index-section>
                <mt-index-section index="Q">
                </mt-index-section>
                <mt-index-section index="R">
                    <mt-cell title="瑞典"></mt-cell>
                    <mt-cell title="日本"></mt-cell>
                    <mt-cell title="瑞士"></mt-cell>
                </mt-index-section>
                <mt-index-section index="S">
                    <mt-cell title="苏丹"></mt-cell>
                    <mt-cell title="圣巴泰勒米"></mt-cell>
                    <mt-cell title="塞尔维亚"></mt-cell>
                    <mt-cell title="塞拉利昂"></mt-cell>
                </mt-index-section>
                <mt-index-section index="T">
                    <mt-cell title="土耳其"></mt-cell>
                    <mt-cell title="泰国"></mt-cell>
                    <mt-cell title="汤加"></mt-cell>
                    <mt-cell title="图瓦卢"></mt-cell>
                </mt-index-section>
                <mt-index-section index="U">
                </mt-index-section>
                <mt-index-section index="V">
                </mt-index-section>
                <mt-index-section index="W">
                    <mt-cell title="乌克兰"></mt-cell>
                    <mt-cell title="文莱"></mt-cell>
                    <mt-cell title="瓦努阿图"></mt-cell>
                    <mt-cell title="乌拉圭"></mt-cell>
                </mt-index-section>
                <mt-index-section index="X">
                    <mt-cell title="西班牙"></mt-cell>
                    <mt-cell title="新加坡"></mt-cell>
                    <mt-cell title="新西兰"></mt-cell>
                    <mt-cell title="匈牙利"></mt-cell>
                </mt-index-section>
                <mt-index-section index="Y">
                    <mt-cell title="意大利"></mt-cell>
                    <mt-cell title="印度"></mt-cell>
                    <mt-cell title="英国"></mt-cell>
                    <mt-cell title="伊拉克"></mt-cell>
                </mt-index-section>
                <mt-index-section index="Z">
                    <mt-cell title="中国"></mt-cell>
                    <mt-cell title="中国澳门"></mt-cell>
                    <mt-cell title="中国香港"></mt-cell>
                    <mt-cell title="中国台湾"></mt-cell>
                </mt-index-section>
                </mt-index-list>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .first{
        height: 44px;
        width: 100%;
        text-align: center;
    }
    .first .left{
        height: 11px;
        width: 11px;
        border-left: 2px black solid;
        border-bottom: 2px black solid;
        transform: rotate(45deg);
        float: left;
        margin-left: 5%;
        margin-top: 14.5px;
    }
    .first .center{
        font-size: 15px;
        color: #9d9d9d;
        line-height: 44px;
        font-family: Arial,Lucida Grande,Verdana,Microsoft YaHei,hei;
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
   .main .a{
       font-size: 17px;
       line-height: 54px;
       font-family: Arial,Lucida Grande,Verdana,Microsoft YaHei,hei;
   }
   .main .a span{
       height: 10px;
       width: 10px;
       border-left: 2px #cccccc solid;
       border-bottom: 2px #cccccc solid;
       transform: rotate(-135deg);
       float: right;
       margin: 20px 5px auto auto;
   }
   .main .b{
       height: 54px;
       width: 100%;
       color: #cccccc;
       border-top: #cccccc 0.5px solid;
       border-bottom: solid 0.5px #cccccc;
       font-size: 17px;
       line-height: 54px;
       font-family: Arial,Lucida Grande,Verdana,Microsoft YaHei,hei;
   }
   .main input{
       border: none;
       outline: none;
   }
   .main .deng{
       background-color: #ff9a14;
       font-size: 17px;
       text-align: center;
       line-height: 44px;
       margin: 30px auto 0px;
       color: white;
       font-family: Arial,Lucida Grande,Verdana,Microsoft YaHei,hei;
       border-radius: 5px;
   }
   .f{
       font-size: 12px;
       text-align: center;
       margin-top: 5vh;
       color: #9d9d9d;
       font-family: Arial,Lucida Grande,Verdana,Microsoft YaHei,hei;
   }
   .f a{
       color: blueviolet;
   }
   .router-link-active {    
        text-decoration: none;
        color: black;
    }
    a {
    text-decoration: none;
    color: #9d9d9d;
    }
    .top{
        height: 44px;
        width: 100%;
        background-color: #099fde;
    }
    .top .left{
        height: 11px;
        width: 11px;
        border-left: 2px white solid;
        border-bottom: 2px white solid;
        transform: rotate(45deg);
        float: left;
        margin-left: 5%;
        margin-top: 14.5px;
    }
    .top p{
        line-height: 44px;
        text-align: center;
    }
</style>

<script>
export default {
    data(){
        return{
            num:1
        }
    },
    methods:{
        add(){
            if(this.num==1){
                this.num=2
            }
        },
        del(){
            if(this.num==2){
                this.num=1
            }
        }
    }
}
</script>