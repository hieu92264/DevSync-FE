<script setup lang="ts">
import { RouterView } from 'vue-router'
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BaseLayout from './shared/components/layouts/BaseLayout.vue'
import BlankLayout from './shared/components/layouts/BlankLayout.vue'

const route = useRoute()
const layouts = {
  base: BaseLayout,
  auth: BlankLayout,
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
