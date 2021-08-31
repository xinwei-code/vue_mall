import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () => import('views/home/Home')
const Profile = () => import('views/profile/Profile')
const cart = () => import('views/cart/Cart')
const Category = () => import('views/category/Category')
const Detail = () => import('views/detail/Detail')

//1.安装插件
Vue.use(VueRouter)

//2.配置路由映射关系
const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/category',
        component: Category,
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/cart',
        component: cart
    },
    {
        path: '/detail/:iid',
        component: Detail
    }
]


//3.创建路由对象
const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    }

})

//4.导出
export default router



// 在 需要跳转 的逻辑中 加入:

//     window.scroll({
//         top: 0,
//         left: 0,
//         behavior: 'smooth'
//     }) // 滚动到页面最顶部