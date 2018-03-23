import Home from './components/Home.vue'
import Menu from './components/Menu.vue'
import Admin from './components/Admin.vue'
import About from './components/About/About.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'

//About下二级路由
import Contact from './components/About/Contact.vue'
import Delivery from './components/About/Delivery.vue'
import History from './components/About/History.vue'
import OrderingGuide from './components/About/OrderingGuide.vue'

//三极路由
import PersonName from './components/About/Contact/PersonName.vue'
import Phone from './components/About/Contact/Phone.vue'


export const routes = [{
    path: '/',
    name: 'homeLink',
    components: {
        default: Home,
        'orderingGuide': OrderingGuide,
        'delivery': Delivery,
        'history': History,
    }
  },
  {
    path: '/menu',
    name: 'menuLink',
    component: Menu
  },
  {
    path: '/admin',
    name: 'adminLink',
    component: Admin,
    // beforeEnter: (to, from, next) => {
    //   // if (to.path == '/login' || to.path == '/register') {
    //   //   next()
    //   // } else {
    //   //   alert('还没有登录,请先登录');
    //   //   next('/login');
    //   // }
    // }
  },
  {
    path: '/about',
    name: 'aboutLink',
    component: About,
    redirect: '/about/contact',
    children: [{
        path: '/about/contact',
        name: 'contactLink',
        redirect: '/personName',
        component: Contact,
        children: [{
            path: '/personName',
            name: 'personNameLink',
            component: PersonName
          },
          {
            path: '/phone',
            name: 'phoneLink',
            component: Phone
          }
        ]
      },
      {
        path: 'about/delivery',
        name: 'deliveryLink',
        component: Delivery
      },
      {
        path: 'about/history',
        name: 'historyLink',
        component: History
      },
      {
        path: 'about/orderingGuide',
        name: 'orderingGuideLink',
        component: OrderingGuide
      },
    ]
  },
  {
    path: '/login',
    name: 'loginLink',
    component: Login
  },
  {
    path: '/register',
    name: 'registerLink',
    component: Register
  },
  {
    path: '*',
    redirect: '/'
  }
];
