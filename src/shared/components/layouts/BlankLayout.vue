<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useAppStore } from '@/stores/app.store'

const appStore = useAppStore()

onMounted(() => {
  appStore.initTheme()
})
</script>

<template>
  <div class="min-h-screen w-full bg-background text-foreground antialiased">
    <slot>
      <RouterView />
    </slot>
  </div>
</template>
