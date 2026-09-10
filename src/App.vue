<script setup lang="ts">
import { RouterView } from 'vue-router'
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BaseLayout from './shared/components/layouts/BaseLayout.vue'

const route = useRoute()
const layouts = {
  base: BaseLayout,
  // auth: AuthLayout,
}

const layout = computed(() => {
  return layouts[route.meta.layout as keyof typeof layouts]
})
</script>

<template>
  <component :is="layout">
    <RouterView />
    <VueQueryDevtools />
  </component>
</template>
