import type { RouteRecordRaw } from 'vue-router'
import LoginPage from './login/LoginPage.vue'
import RegisterPage from './register/RegisterPage.vue'
import ForgotPasswordPage from './forgotPassword/forgotPasswordPage.vue'
import ChangePassWordPage from './changePassWord/changePassWordPage.vue'
import { defineComponent, h } from 'vue'
// Trang placeholder tạm thời để xem layout
const PlaceholderPage = defineComponent({
  name: 'PlaceholderPage',
  setup() {
    return () =>
      h(
        'div',
        {
          class:
            'flex flex-col items-center justify-center h-full min-h-64 gap-4 text-muted-foreground',
        },
        [
          h('div', { class: 'text-5xl' }, '🚧'),
          h('div', { class: 'text-lg font-semibold text-foreground' }, 'Trang đang được xây dựng'),
          h(
            'p',
            { class: 'text-sm text-muted-foreground' },
            'Đây là khu vực nội dung chính (main). Header & Sidebar đã sẵn sàng!',
          ),
        ],
      )
  },
})

export const authRoute: RouteRecordRaw[] = [
  {
    path: '/',
    children: [
      {
        path: 'login',
        name: 'login',
        component: LoginPage,
        meta: {
          title: 'login',
          layout: 'auth',
        },
      },

      {
        path: 'register',
        name: 'register',
        component: RegisterPage,
        meta: {
          title: 'register',
          layout: 'auth',
        },
      },

      {
        path: 'forgot-password',
        name: 'forgot-password',
        component: ForgotPasswordPage,
        meta: {
          title: 'forgot-password',
          layout: 'auth',
        },
      },
      {
        path: 'changePassword',
        name: 'changePassword',
        component: ChangePassWordPage,
        meta: {
          title: 'changePassword',
          layout: 'auth',
        },
      },
    ],
  },
]
