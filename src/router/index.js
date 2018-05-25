import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 五大页面
// 首页
// import HomePage from "@/pages/home/home";
const HomePage = r => require.ensure([], () => r(require('@/pages/home/home')), 'HomePage');

// 服务商入住页面
const ShopPage = r => require.ensure([], () => r(require('@/pages/shop/shop')), 'ShopPage');


// 呼叫服务页面
const CallPage = r => require.ensure([], () => r(require('@/pages/call/call')), 'CallPage');


// 供求页面
const SupplyDemandPage = r => require.ensure([], () => r(require('@/pages/supply-demand/supply-demand')), 'SupplyDemandPage');


// 个人中心页面
const PersonalPage = r => require.ensure([], () => r(require('@/pages/personal/personal')), 'PersonalPage');

// 顶级辅助性页面   3个
// 登录页面
const LoginPage = r => require.ensure([], () => r(require('@/pages/login/login')), 'LoginPage');

// 注册页面
const RegisterPage = r => require.ensure([], () => r(require('@/pages/register/register')), 'RegisterPage');

// 忘记密码页面forget-pwd-page
const ForgetPwdPage = r => require.ensure([], () => r(require('@/pages/forget-pwd/forget-pwd')), 'ForgetPwdPage');



// 首页
// 进入类别详情页面
const ProvidersPage = r => require.ensure([], () => r(require('@/pages/home-detail/home-detail')), 'ProvidersPage');


// 服务商入住页面
// 进入服务商公司基本信息界面
const ShopMsgPage = r => require.ensure([], () => r(require('@/pages/shop-msg/shop-msg')), 'ShopMsgPage');
// 进入服务商公司上传身份证页面界面
const ShopImgPage = r => require.ensure([], () => r(require('@/pages/shop-img/shop-img')), 'ShopImgPage');
// 进入服务商公司选择服务类型界面页面
const ShopSuccessPage = r => require.ensure([], () => r(require('@/pages/shop-success/shop-success')), 'ShopSuccessPage');


// 呼叫服务页面
// 呼叫服务页面进入选择指定的点的页面
const CallCompanyDetailPage = r => require.ensure([], () => r(require('@/pages/call-company-detail/call-company-detail')), 'CallCompanyDetailPage');
// 呼叫服务页面进入立刻预约表单页面
const CallSubscribePage = r => require.ensure([], () => r(require('@/pages/call-subscribe/call-subscribe')), 'CallSubscribePage');

// 供求页面
// 个人中心页面


// 顶级辅助性页面   3个
// 登录页面


// 注册页面
// 进入手机号码输入页面,同时发送验证码页面
const RegisterSmsPage = r => require.ensure([], () => r(require('@/pages/register-sms/register-sms')), 'RegisterSmsPage');
const RegisterSuccessPage = r => require.ensure([], () => r(require('@/pages/register-success/register-success')), 'RegisterSuccessPage');


// 忘记密码页面forget-pwd-page
// 忘记密码发送验证码页面
const ForgetSmsPage = r => require.ensure([], () => r(require('@/pages/forget-sms/forget-sms')), 'ForgetSmsPage');

const ForgetSuccessPage = r => require.ensure([], () => r(require('@/pages/forget-success/forget-success')), 'ForgetSuccessPage');


// 原生接口路由
// 首页路由
const NativeHomePage = r => require.ensure([], () => r(require('@/native-page/home/home')), 'NativeHomePage');
const NativeHomeDetailPage = r => require.ensure([], () => r(require('@/native-page/home-detail/home-detail')), 'NativeHomeDetailPage');


//路由配置根路由方便开发, 以后会全部改掉,来自赵哲云2018年5月23日 16:52:45

// 设计路由

export default new Router({


  routes: [
    //默认页面
    {
      path: '',
      name: 'home-page',
      component: HomePage
    },
    {
      path: '/',
      name: 'home-page',
      component: HomePage
    },
    // 首页
    {
      path: '/home',
      name: 'home-page',
      component: HomePage,
     
    },
   {
      path: '/providers',
      name: 'providers-page',
      component: ProvidersPage
    } ,
    //服务商入住页面
    {
      path: '/shop',
      name: 'shop-page',
      component: ShopPage,
      children: [

      ]
    },
    
    {
      path: '/shop-img',
      name: 'shop-img-page',
      component: ShopImgPage
    },
    {
      path: '/shop-success',
      name: 'shop-success-page',
      component: ShopSuccessPage
    },
    {
      path: '/shop-msg',
      name: 'shop-msg-page',
      component: ShopMsgPage
    },
    // 呼叫服务页面
    {
      path: '/call',
      name: 'call-page',
      component: CallPage,
      children: [
      ]
    },
  
    {
      path: '/call-company-detail',
      name: 'call-company-detail-page',
      component: CallCompanyDetailPage
    },

    {
      path: '/call-subscribe',
      name: 'call-subscribe-page',
      component: CallSubscribePage
    },
    // 供求页面
    {
      path: "/supply-demand",
      name: 'supply-demand-page',
      component: SupplyDemandPage
    },
    // 个人中心页面
    {
      path: '/personal',
      name: 'personal-page',
      component: PersonalPage,

    },
    // 登录页面
    {
      path: '/login',
      name: 'login-page',
      component: LoginPage
    },
    // 注册页面
    {
      path: '/register',
      name: 'register-page',
      component: RegisterPage,
      children: [
      ]
    },
    {
      path: '/register-sms',
      name: 'register-sms-page',
      component: RegisterSmsPage
    },
    {
      path: '/register-success',
      name: 'register-success',
      component: RegisterSuccessPage
    },
    // 忘记密码页面
    {
      path: '/forget',
      name: 'forget-pwd-page',
      component: ForgetPwdPage,
      children: [
      ]

    },
    {
      path: "/forget-sms",
      name: 'forget-sms-page',
      component: ForgetSmsPage
    },
    {
      path: "/forget-success",
      name: 'forget-success-page',
      component: ForgetSuccessPage
    },


    // 原生接口路由

    {
      path: '/native-home',
      name: "native-home-page",
      component: NativeHomePage
    },
    {
      path: '/native-home-detail',
      name: "native-home-detail-page",
      component: NativeHomeDetailPage
    },
    // {
 //     path: '/native-home',
      // name: "native-home-page",
      // component: NativeHomePage
    // }






































    //   {
    //     path: '/register',
    //     name: 'register-page',
    //     component: RegisterPage
    //   },
    //   {
    //     path: '/register-sms',
    //     name: 'register-sms-page',
    //     component: RegisterSmsPage
    //   }, {
    //     path: '/reg-success',
    //     name: 'reg-success-page',
    //     component: RegisterSuccessPage
    //   }, 
    //   {
    //     path: '/forget-pwd',
    //     name: 'forget-pwd-page',
    //     component: ForgetPwdPage
    //   }, 
    //   {
    //     path: '/forget-sms',
    //     name: 'forget-sms-page',
    //     component: ForgetSmsPage
    //   }, 
    //   // {
    //   //   path: '/forget-sms',
    //   //   name: 'forget-sms-page',
    //   //   component: ForgetSmsPage
    //   // },
    //   {
    //     path: '/forget-success',
    //     name: 'forget-success-page',
    //     component: ForgetSuccessPage
    //   },
    //   {
    //     path: '/home',
    //     name: 'home-page',
    //     component: HomePage
    //   },

    //   {
    //     path: '/shop',
    //     name: 'shop-page',
    //     component: ShopPage
    //   },
    //   {
    //     path: '/home-detail',
    //     name: 'home-detail',
    //     component: HomeDetailPage
    //   },
    //   {
    //     path:'/native-home',
    //     name: 'native-home',
    //     component: NativeHomePage
    //   }
  ]
})
