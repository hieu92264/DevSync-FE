<script setup lang="ts">
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { X } from '@lucide/vue'
import { useAppStore } from '@/stores/app.store'
import SidebarHeader from './sidebar-partials/SidebarHeader.vue'
import SidebarContent from './sidebar-partials/SidebarContent.vue'
import SidebarFooter from './sidebar-partials/SidebarFooter.vue'

const appStore = useAppStore()
const route = useRoute()

// Close mobile sidebar on route change
watch(
  () => route.fullPath,
  () => {
    appStore.closeMobileSidebar()
  },
)
</script>

<template>
  <div>
    <!-- Desktop Sidebar -->
    <aside
      class="hidden md:flex flex-col h-screen sticky top-0 border-r border-sidebar-border bg-sidebar text-sidebar-foreground transition-[width] duration-300 ease-in-out z-20 shrink-0 select-none"
      :class="appStore.isSidebarCollapsed ? 'w-16' : 'w-64'"
    >
      <SidebarHeader :is-collapsed="appStore.isSidebarCollapsed" />
      <SidebarContent :is-collapsed="appStore.isSidebarCollapsed" />
      <SidebarFooter :is-collapsed="appStore.isSidebarCollapsed" />
    </aside>

    <!-- mobile  -->
    <!-- === em chx code mobile  -->
  </div>
</template>
