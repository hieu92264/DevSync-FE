import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export type ThemeMode = 'light' | 'dark' | 'system'

export const useAppStore = defineStore(
  'app',
  () => {
    // Sidebar state
    const isSidebarCollapsed = ref(false)
    const isMobileSidebarOpen = ref(false)

    // Theme state
    const theme = ref<ThemeMode>('light')

    // App state
    const isLoading = ref(false)
    const locale = ref('vi')

    function toggleSidebar() {
      isSidebarCollapsed.value = !isSidebarCollapsed.value
    }

    function setSidebarCollapsed(collapsed: boolean) {
      isSidebarCollapsed.value = collapsed
    }

    function toggleMobileSidebar() {
      isMobileSidebarOpen.value = !isMobileSidebarOpen.value
    }

    function closeMobileSidebar() {
      isMobileSidebarOpen.value = false
    }

    function applyTheme(newTheme: ThemeMode) {
      const root = document.documentElement
      const isDark =
        newTheme === 'dark' ||
        (newTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)

      if (isDark) {
        root.classList.add('dark')
      } else {
        root.classList.remove('dark')
      }
    }

    function setTheme(newTheme: ThemeMode) {
      theme.value = newTheme
      applyTheme(newTheme)
    }

    function toggleTheme() {
      const nextTheme: ThemeMode = theme.value === 'dark' ? 'light' : 'dark'
      setTheme(nextTheme)
    }

    function initTheme() {
      applyTheme(theme.value)
      if (typeof window !== 'undefined') {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        mediaQuery.addEventListener('change', () => {
          if (theme.value === 'system') {
            applyTheme('system')
          }
        })
      }
    }

    function setLoading(loading: boolean) {
      isLoading.value = loading
    }

    function setLocale(newLocale: string) {
      locale.value = newLocale
    }

    return {
      isSidebarCollapsed,
      isMobileSidebarOpen,
      theme,
      isLoading,
      locale,
      toggleSidebar,
      setSidebarCollapsed,
      toggleMobileSidebar,
      closeMobileSidebar,
      setTheme,
      toggleTheme,
      initTheme,
      setLoading,
      setLocale,
    }
  },
  {
    persist: {
      pick: ['isSidebarCollapsed', 'theme', 'locale'],
    },
  },
)
