<script setup lang="ts">
import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { X, RotateCw, MoreHorizontal, FolderClosed, LayoutGrid } from '@lucide/vue'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/components/ui/dropdown-menu'
import { useTabsStore, type TabItem } from '@/stores/tabs.store'

const tabsStore = useTabsStore()
const route = useRoute()
const router = useRouter()

watch(
  () => route.fullPath,
  () => tabsStore.syncRouteTab(route),
  { immediate: true },
)

function handleSelectTab(tab: TabItem) {
  tabsStore.setActiveTab(tab.id)
  if (route.fullPath !== tab.path) {
    router.push(tab.path)
  }
}

function handleCloseTab(tabId: string, e: MouseEvent) {
  e.stopPropagation()
  const next = tabsStore.closeTab(tabId)
  if (next && route.fullPath !== next) router.push(next)
}

function handleCloseOtherTabs() {
  tabsStore.closeOtherTabs(tabsStore.activeTabId)
}

function handleCloseAllTabs() {
  const path = tabsStore.closeAllTabs()
  if (route.fullPath !== path) router.push(path)
}

function handleReload() {
  router.go(0)
}
</script>

<template>
  <div
    class="relative flex h-9 w-full items-end justify-between border-b border-border/50 bg-background px-2 select-none overflow-hidden"
  >
    <!-- Tab list -->
    <div class="flex items-end gap-0 overflow-x-auto no-scrollbar flex-1 h-full">
      <button
        v-for="tab in tabsStore.tabs"
        :key="tab.id"
        type="button"
        class="group relative flex h-full items-center gap-2 px-4 text-xs font-medium transition-colors duration-150 shrink-0 border-b-2"
        :class="
          tabsStore.activeTabId === tab.id
            ? 'border-foreground text-foreground'
            : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border'
        "
        @click="handleSelectTab(tab)"
      >
        <span class="truncate max-w-32 pb-1">{{ tab.title }}</span>

        <!-- Close button -->
        <span
          v-if="tab.closable !== false"
          class="pb-1 rounded p-0.5 text-muted-foreground/50 hover:text-foreground hover:bg-muted/60 transition-colors"
          role="button"
          tabindex="0"
          aria-label="Close tab"
          @click="handleCloseTab(tab.id, $event)"
        >
          <X class="size-2.5" />
        </span>
      </button>
    </div>

    <!-- Right actions -->
    <div class="flex items-center gap-0.5 pb-1.5 shrink-0">
      <button
        type="button"
        class="flex size-6 items-center justify-center rounded text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors"
        title="Reload"
        @click="handleReload"
      >
        <RotateCw class="size-3" />
      </button>

      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <button
            type="button"
            class="flex size-6 items-center justify-center rounded text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors"
            title="Tab options"
          >
            <MoreHorizontal class="size-3.5" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" class="w-44 text-xs">
          <DropdownMenuItem @click="handleReload">
            <RotateCw class="size-3.5 mr-2" />
            <span>Reload</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem @click="handleCloseOtherTabs">
            <LayoutGrid class="size-3.5 mr-2" />
            <span>Close other tabs</span>
          </DropdownMenuItem>
          <DropdownMenuItem @click="handleCloseAllTabs">
            <FolderClosed class="size-3.5 mr-2" />
            <span>Close all tabs</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
