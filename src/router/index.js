import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 首页
const HomePage = r => require.ensure([], () => r(require('@/pages/home/home')), 'HomePage');

const SubscribePage = r => require.ensure([], () => r(require('@/pages/subscribe/subscribe')), 'SubscribePage');
const CompanyDetailPage = r => require.ensure([], () => r(require('@/pages/company-detail/company-detail')), 'CompanyDetailPage');
const ProjectDetailPage = r => require.ensure([], () => r(require('@/pages/project-detail/project-detail')), 'ProjectDetailPage');
const CartPage = r => require.ensure([], () => r(require('@/pages/cart/cart')), 'CartPage');
// 地址
const AddAddressPage = r => require.ensure([], () => r(require('@/pages/add-address/add-address')), 'AddAddressPage');
const AddressListPage = r => require.ensure([], () => r(require('@/pages/address-list/address-list')), 'AddressListPage');
// 订单确认页面
const PayOrderPage = r => require.ensure([], () => r(require('@/pages/pay-order/pay-order')), 'PayOrderPage');
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
          path: "/subscribe/:gysId",
          name: "subscribe-page",
          component: SubscribePage,
          meta: {
            keepAlive: true
          },
        },
        {
          path: "/company-detail",
          name: "company-detail-page",
          component: CompanyDetailPage,
          meta: {
            keepAlive: true
          }
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
            path: "/ordinary-reg-sms",
            name: "ordinary-reg-sms-page",
            component: OrdinaryRegSmsPage
          },
          {
            path: "/project-detail",
            name: "project-detail-page",
            component: ProjectDetailPage
          },
          {
            path: "/cart",
            name: "cart-page",
            component: CartPage
          },
          {
            path: "/pay-order",
            name: "pay-order-page",
            component: PayOrderPage
          },{
            path:"/add-address",
            name:"add-address-page",
            component:AddAddressPage
          },{
            path:"/address-list",
            name:"address-list-page",
            component:AddressListPage
          },
          {
            path: "/navtive-company-detail",
            name: "company-detail-page",
            component: CompanyDetailPage,
            meta: {
              keepAlive: true
            }
          },

        ]
      })
