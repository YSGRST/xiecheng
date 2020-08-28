import VueRouter from 'vue-router'

// import 自己命名 from 路径/如果是文件包，直接书写文件名字
// import my from '../../components/my.vue'
import homepage from '../../components/homepage.vue'
import my from '../../components/my.vue'
import giftcard from '../../components/giftcard.vue'
import rentcar from '../../components/rentcar.vue'
import login from '../../components/login.vue'
import accountlogin from '../../components/accountlogin.vue'
import oversealogin from '../../components/oversealogin.vue'
import photo from '../../components/photo.vue'
import electronic from '../../components/electronic.vue'
import register from '../../components/register.vue'
import oneday from '../../components/oneday.vue'

export default new VueRouter({
    routes:[
        {
            path:'/',
            component:homepage,
        },
        {
            path:'/homepage',
            component:homepage,
        },
        {
            path:'/rentcar',
            component:rentcar,
        },
        {
            path:'/my',
            component:my
        },
        {
            path:'/giftcard',
            component:giftcard
        },
        {
            path:'/login',
            component:login
        },
        {
            path:'/accountlogin',
            component:accountlogin
        },
        {
            path:'/oversealogin',
            component:oversealogin
        },
        {
            path:'/photo',
            component:photo
        },
        {
            path:'/electronic',
            component:electronic
        },
        {
            path:'/register',
            component:register
        },
        {
            path:'/oneday',
            component:oneday
        },
    ]
})