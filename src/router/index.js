import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('@/views/Home')
const UsePage = () => import('@/components/UsePage')
const Icon = () => import('@/components/Icon')
const Button = () => import('@/components/Button')
const Input = () => import('@/components/Input')
const InputNumber = () => import('@/components/InputNumber')
const Checkbox = () => import('@/components/Checkbox')
const Radio = () => import('@/components/Radio')
const Switch = () => import('@/components/Switch')
const Card = () => import('@/components/Card')
const Uploader = () => import('@/components/Uploader')
const Message = () => import('@/components/Message')
const MessageBox = () => import('@/components/MessageBox')
const Toast = () => import('@/components/Toast')

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/home'
},
{
  path: '/home',
  component: Home,
  redirect: '/component/usepage',
  children: [{
    path: '/component/usepage',
    component: UsePage
  },
  {
    path: '/component/icon',
    component: Icon
  },
  {
    path: '/component/button',
    component: Button
  },
  {
    path: '/component/input',
    component: Input
  },
  {
    path: '/component/input-number',
    component: InputNumber
  },
  {
    path: '/component/checkbox',
    component: Checkbox
  },
  {
    path: '/component/radio',
    component: Radio
  },
  {
    path: '/component/switch',
    component: Switch
  },
  {
    path: '/component/card',
    component: Card
  },
  {
    path: '/component/uploader',
    component: Uploader
  },
  {
    path: '/component/message',
    component: Message
  },
  {
    path: '/component/message-box',
    component: MessageBox
  },
  {
    path: '/component/toast',
    component: Toast
  }
  ]
}
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

export default router
