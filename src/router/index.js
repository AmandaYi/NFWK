import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 首页
const HomePage = r => require.ensure([], () => r(require('@/pages/home/home')), 'HomePage');
const SubscribePage = r => require.ensure([], () => r(require('@/pages/subscribe/subscribe')), 'SubscribePage');
const OrdinaryLoginPage = r => require.ensure([], () => r(require('@/pages/ordinary-login/ordinary-login')), 'OrdinaryLoginPage');
const OrdinaryRegisterPage = r => require.ensure([], () => r(require('@/pages/ordinary-register/ordinary-register')), 'OrdinaryRegisterPage');
const OrdinaryRegSmsPage = r => require.ensure([], () => r(require('@/pages/ordinary-reg-sms/ordinary-reg-sms')), 'OrdinaryRegSmsPage');
export default new Router({
  routes: [{
      path: "/",
      name: "home-page",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home-page",
      component: HomePage,
    },
    {
      path: "/subscribe",
      name: "subscribe-page",
      component: SubscribePage
    },
    {
      path: "/ordinary-login",
      name: "ordinary-login-page",
      component: OrdinaryLoginPage
    },
    {
      path: "/ordinary-register",
      name: "ordinary-register-page",
      component: OrdinaryRegisterPage
    },
    {
      path:"ordinary-reg-sms",
      name:"ordinary-reg-sms-page",
      component:OrdinaryRegSmsPage
    }

  ]
})
