<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useAppStore } from '@/stores/app.store'
import SidebarSection from './partials/SidebarSection.vue'
import HeaderSection from './partials/HeaderSection.vue'
import TabsSection from './partials/TabsSection.vue'

const appStore = useAppStore()

onMounted(() => {
  appStore.initTheme()
})
</script>

<template>
  <div class="relative flex min-h-screen w-full bg-background text-foreground antialiased">
    <SidebarSection />

    <!-- main container -->
    <div class="flex flex-1 flex-col min-w-0 overflow-hidden">
      <HeaderSection />

      <!-- Tabs Bar -->
      <TabsSection />

      <!-- Main Scrollable Content -->
      <main class="flex-1 overflow-y-auto p-4 md:p-6">
        <slot>
          <RouterView />
        </slot>
      </main>
    </div>
  </div>
</template>
