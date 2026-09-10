import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { RouteLocationNormalized } from 'vue-router'

export interface TabItem {
  id: string
  title: string
  path: string
  icon?: string
  closable?: boolean
}

const DEFAULT_TAB: TabItem = {
  id: 'overview',
  title: 'Overview',
  path: '/overview',
  closable: false,
}

export const useTabsStore = defineStore(
  'tabs',
  () => {
    const tabs = ref<TabItem[]>([{ ...DEFAULT_TAB }])
    const activeTabId = ref<string>(DEFAULT_TAB.id)

    function setActiveTab(tabId: string) {
      activeTabId.value = tabId
    }

    function openTab(tab: TabItem) {
      const existing = tabs.value.find((t) => t.id === tab.id || t.path === tab.path)
      if (existing) {
        activeTabId.value = existing.id
      } else {
        tabs.value.push({
          ...tab,
          closable: tab.closable ?? true,
        })
        activeTabId.value = tab.id
      }
    }

    function closeTab(tabId: string): string | null {
      const index = tabs.value.findIndex((t) => t.id === tabId)
      if (index === -1) return null

      const tabToClose = tabs.value[index]
      if (!tabToClose || tabToClose.closable === false) return null

      tabs.value.splice(index, 1)

      // If closed tab was active, activate adjacent tab
      if (activeTabId.value === tabId) {
        const nextTab = tabs.value[index] || tabs.value[index - 1] || DEFAULT_TAB
        activeTabId.value = nextTab.id
        return nextTab.path
      }

      return null
    }

    function closeOtherTabs(keepTabId: string) {
      tabs.value = tabs.value.filter((t) => t.id === keepTabId || t.closable === false)
      activeTabId.value = keepTabId
    }

    function closeAllTabs(): string {
      tabs.value = tabs.value.filter((t) => t.closable === false)
      if (tabs.value.length === 0) {
        tabs.value = [{ ...DEFAULT_TAB }]
      }
      const firstTab = tabs.value[0] || DEFAULT_TAB
      activeTabId.value = firstTab.id
      return firstTab.path
    }

    function syncRouteTab(route: RouteLocationNormalized) {
      if (!route.name && !route.path) return

      const path = route.fullPath || route.path
      const id = (route.name as string) || path
      const title = (route.meta?.title as string) || (route.name as string) || 'Trang'

      // Skip login/auth routes
      if (path.startsWith('/auth') || path.startsWith('/login')) return

      openTab({
        id,
        title,
        path,
        closable: path !== '/dashboard',
      })
    }

    return {
      tabs,
      activeTabId,
      setActiveTab,
      openTab,
      closeTab,
      closeOtherTabs,
      closeAllTabs,
      syncRouteTab,
    }
  },
  {
    persist: {
      pick: ['tabs', 'activeTabId'],
    },
  },
)
