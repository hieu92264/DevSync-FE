<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import {
  LayoutGrid,
  CheckCircle,
  Diamond,
  Cloud,
  TriangleAlert,
  Monitor,
  Network,
  Sparkles,
  Users,
  Settings,
  ChevronRight,
  type LucideIcon,
} from '@lucide/vue'

interface MenuItem {
  title: string
  path: string
  icon: LucideIcon
  badge?: string | number
  badgeVariant?: 'default' | 'destructive'
  suffix?: 'chevron'
}

interface MenuGroup {
  groupTitle: string
  items: MenuItem[]
}
//  biến này để phóng to thu nhỏ
defineProps<{
  isCollapsed?: boolean
}>()

const route = useRoute()
const router = useRouter()

const menuGroups: MenuGroup[] = [
  {
    groupTitle: 'General',
    items: [
      {
        title: 'Overview',
        path: '/dashboard',
        icon: LayoutGrid,
      },
    ],
  },
  {
    groupTitle: 'Workflow',
    items: [
      {
        title: 'Tasks',
        path: '/tasks',
        icon: CheckCircle,
        badge: 42,
        badgeVariant: 'default',
      },
      {
        title: 'APIs',
        path: '/apis',
        icon: Diamond,
        badge: 128,
        badgeVariant: 'default',
      },
      {
        title: 'Environments',
        path: '/environments',
        icon: Cloud,
      },
    ],
  },
  {
    groupTitle: 'Observability',
    items: [
      {
        title: 'Incidents',
        path: '/incidents',
        icon: TriangleAlert,
        badge: 7,
        badgeVariant: 'destructive',
      },
      {
        title: 'Logs',
        path: '/logs',
        icon: Monitor,
      },
      {
        title: 'Distributed Traces',
        path: '/traces',
        icon: Network,
      },
    ],
  },
  {
    groupTitle: 'Intelligence',
    items: [
      {
        title: 'DevSync AI',
        path: '/ai',
        icon: Sparkles,
        suffix: 'chevron',
      },
    ],
  },
  {
    groupTitle: 'Management',
    items: [
      {
        title: 'Team',
        path: '/team',
        icon: Users,
      },
      {
        title: 'Settings',
        path: '/settings',
        icon: Settings,
      },
    ],
  },
]

function isActive(path: string) {
  return route.path === path
}

function navigate(path: string) {
  router.push(path)
}
</script>

<template>
  <nav class="flex-1 overflow-y-auto px-3 py-2">
    <div
      v-for="(group, gIdx) in menuGroups"
      :key="group.groupTitle"
      :class="gIdx > 0 ? 'mt-5' : 'mt-2'"
    >
      <!-- Name group  -->
      <div
        v-if="!isCollapsed"
        class="mb-1.5 px-2 text-[11px] font-semibold tracking-widest uppercase text-sidebar-foreground/40 select-none"
      >
        {{ group.groupTitle }}
      </div>

      <!-- Thanh ngang -->
      <div v-else-if="gIdx > 0" class="mb-2 border-t border-sidebar-border/40" />

      <!-- Loop item -->
      <ul class="space-y-0.5">
        <li v-for="item in group.items" :key="item.path">
          <button
            type="button"
            class="group flex w-full items-center gap-3 rounded-md px-2 py-1.5 text-sm transition-colors"
            :class="[
              isActive(item.path)
                ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                : 'text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground',
              isCollapsed ? 'justify-center px-0' : '',
            ]"
            :title="isCollapsed ? item.title : undefined"
            @click="navigate(item.path)"
          >
            <!-- Icon -->
            <component
              :is="item.icon"
              class="size-4 shrink-0"
              :class="
                item.title === 'Incidents'
                  ? 'text-orange-400'
                  : isActive(item.path)
                    ? 'text-sidebar-accent-foreground'
                    : 'text-sidebar-foreground/50 group-hover:text-sidebar-foreground/90'
              "
            />

            <!-- từng item thuộc group -->
            <template v-if="!isCollapsed">
              <span class="flex-1 truncate text-left text-[13px] font-medium">
                {{ item.title }}
              </span>

              <!-- Badge -->
              <span
                v-if="item.badge !== undefined"
                class="flex items-center justify-center rounded text-[11px] font-semibold px-1.5 min-w-[22px] h-[18px]"
                :class="
                  item.badgeVariant === 'destructive'
                    ? 'bg-destructive text-white'
                    : 'bg-sidebar-foreground/10 text-sidebar-foreground/60'
                "
              >
                {{ item.badge }}
              </span>

              <!-- Suffix chevron (e.g. DevSync AI) -->
              <ChevronRight
                v-if="item.suffix === 'chevron'"
                class="size-3.5 text-violet-500 shrink-0"
              />
            </template>
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>
