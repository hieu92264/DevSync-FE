<script setup lang="ts">
import { Workflow, Sparkles } from '@lucide/vue'
import { Badge } from '@/shared/components/ui/badge'

defineProps<{
  isCollapsed?: boolean
}>()
</script>

<template>
  <div
    class="flex h-14 items-center border-b border-sidebar-border px-3 transition-all duration-300"
    :class="isCollapsed ? 'justify-center px-2' : 'justify-between'"
  >
    <!-- Brand Info -->
    <RouterLink
      to="/"
      class="flex items-center gap-3 overflow-hidden rounded-lg p-1.5 transition-colors hover:bg-sidebar-accent"
    >
      <!-- Logo Icon -->
      <div
        class="flex size-8 shrink-0 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground shadow-xs"
      >
        <Workflow class="size-4.5" />
      </div>
      <!--  -->
      <div
        v-if="!isCollapsed"
        class="flex flex-col text-left transition-all duration-300 animate-in fade-in-50"
      >
        <div class="flex items-center gap-1.5">
          <span class="text-sm font-semibold tracking-tight text-sidebar-foreground">
            DevSync
          </span>
          <Badge variant="secondary" class="h-4 px-1 text-[10px] font-normal"> Admin </Badge>
        </div>
        <span class="text-[11px] text-muted-foreground flex items-center gap-1">
          <Sparkles class="size-2.5 text-primary" />
          Quản trị hệ thống
        </span>
      </div>
    </RouterLink>
  </div>
</template>
