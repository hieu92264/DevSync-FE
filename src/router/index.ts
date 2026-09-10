import { authRoute } from '@/pages/auth/auth.route'
import BaseLayout from '@/shared/components/layouts/BaseLayout.vue'
import { createRouter, createWebHistory } from 'vue-router'
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

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: PlaceholderPage,
          meta: { title: 'Overview', layout: 'base' },
        },
        {
          path: 'tasks',
          name: 'Tasks',
          component: PlaceholderPage,
          meta: { title: 'Tasks', layout: 'base' },
        },
        {
          path: 'apis',
          name: 'APIs',
          component: PlaceholderPage,
          meta: { title: 'APIs', layout: 'base' },
        },
        {
          path: 'environments',
          name: 'Environments',
          component: PlaceholderPage,
          meta: { title: 'Environments', layout: 'base' },
        },
        {
          path: 'incidents',
          name: 'Incidents',
          component: PlaceholderPage,
          meta: { title: 'Incidents', layout: 'base' },
        },
        {
          path: 'logs',
          name: 'Logs',
          component: PlaceholderPage,
          meta: { title: 'Logs', layout: 'base' },
        },
        {
          path: 'traces',
          name: 'DistributedTraces',
          component: PlaceholderPage,
          meta: { title: 'Distributed Traces', layout: 'base' },
        },
        {
          path: 'ai',
          name: 'DevSyncAI',
          component: PlaceholderPage,
          meta: { title: 'DevSync AI' },
        },
        {
          path: 'team',
          name: 'Team',
          component: PlaceholderPage,
          meta: { title: 'Team', layout: 'base' },
        },
        {
          path: 'settings',
          name: 'Settings',
          component: PlaceholderPage,
          meta: { title: 'Settings', layout: 'base' },
        },
      ],
    },
    ...authRoute,
  ],
})

export default router
