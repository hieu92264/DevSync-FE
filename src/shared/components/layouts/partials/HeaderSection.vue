<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  PanelLeft,
  ChevronDown,
  Search,
  CirclePlus,
  FileCode2,
  Bell,
  CircleHelp,
  Moon,
  Sun,
} from '@lucide/vue'
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/components/ui/dropdown-menu'
import { useAppStore } from '@/stores/app.store'

const appStore = useAppStore()
const route = useRoute()
const router = useRouter()
</script>

<template>
  <header
    class="sticky top-0 z-30 flex h-12 w-full items-center justify-between border-b border-border/60 bg-background px-4 gap-3 select-none"
  >
    <!-- left -->
    <div class="flex items-center gap-2 shrink-0">
      <!-- nut phóng to thu nhỏ  -->
      <button
        type="button"
        class="inline-flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        :title="appStore.isSidebarCollapsed ? 'Mở rộng Sidebar' : 'Thu nhỏ Sidebar'"
        @click="appStore.toggleSidebar"
      >
        <PanelLeft class="size-4" />
      </button>
      <!-- Brand / Breadcrumb -->
      <div class="flex items-center gap-1.5 text-sm">
        <span class="font-semibold text-foreground">DevSync</span>
        <span class="text-muted-foreground/50">/</span>
        <span class="text-muted-foreground">E-Commerce</span>
      </div>

      <!-- Environment badge -->
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <button
            type="button"
            class="flex items-center gap-1.5 rounded-full border border-border/60 bg-muted/40 px-2.5 py-1 text-xs font-medium text-foreground hover:bg-muted/70 transition-colors"
          >
            <span class="size-1.5 rounded-full bg-emerald-500 shrink-0" />
            <span>Production</span>
            <ChevronDown class="size-3 text-muted-foreground" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" class="w-40 text-xs">
          <DropdownMenuLabel class="text-[11px]">Environment</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem class="gap-2">
            <span class="size-1.5 rounded-full bg-emerald-500" /> Production
          </DropdownMenuItem>
          <DropdownMenuItem class="gap-2">
            <span class="size-1.5 rounded-full bg-yellow-400" /> Staging
          </DropdownMenuItem>
          <DropdownMenuItem class="gap-2">
            <span class="size-1.5 rounded-full bg-blue-400" /> Development
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <!-- Search  -->
      <div class="relative flex items-center w-52">
        <Search
          class="pointer-events-none absolute left-2.5 size-3.5 text-muted-foreground shrink-0"
        />
        <input
          type="text"
          placeholder="Search or jump to..."
          class="h-7 w-full rounded-md border border-border/60 bg-muted/30 pl-8 pr-10 text-xs text-foreground placeholder:text-muted-foreground hover:bg-muted/50 focus:bg-muted/50 focus:outline-none focus:ring-1 focus:ring-border transition-colors"
        />
        <kbd
          class="pointer-events-none absolute right-2 hidden sm:inline-flex items-center gap-0.5 rounded border border-border/60 bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground"
        >
          <span class="text-xs">⌘</span>K
        </kbd>
      </div>
    </div>

    <!-- right -->
    <div class="flex items-center gap-1.5 shrink-0">
      <!-- New Task button -->
      <button
        type="button"
        class="flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/30 px-3 py-1.5 text-xs font-medium text-foreground hover:bg-muted/60 transition-colors"
      >
        <CirclePlus class="size-3.5 text-muted-foreground" />
        New Task
      </button>

      <!-- API button -->
      <button
        type="button"
        class="flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/30 px-3 py-1.5 text-xs font-medium text-foreground hover:bg-muted/60 transition-colors"
      >
        <FileCode2 class="size-3.5 text-muted-foreground" />
        API
      </button>

      <div class="mx-0.5 h-4 w-px bg-border/60" />

      <!-- Notification Bell -->
      <button
        type="button"
        class="relative flex items-center justify-center size-8 rounded-md text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors"
        title="Thông báo"
      >
        <Bell class="size-4" />
        <span class="absolute top-1.5 right-1.5 size-1.5 rounded-full bg-destructive" />
      </button>

      <!-- Help -->
      <button
        type="button"
        class="flex items-center justify-center size-8 rounded-md text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors"
        title="Trợ giúp"
      >
        <CircleHelp class="size-4" />
      </button>

      <!-- Theme toggle -->
      <button
        type="button"
        class="flex items-center justify-center size-8 rounded-md text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors"
        :title="appStore.theme === 'dark' ? 'Light mode' : 'Dark mode'"
        @click="appStore.toggleTheme"
      >
        <Sun v-if="appStore.theme === 'dark'" class="size-4" />
        <Moon v-else class="size-4" />
      </button>

      <!-- User avatar -->
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <button
            type="button"
            class="flex items-center gap-1.5 rounded-full p-0.5 hover:ring-2 hover:ring-border transition-all"
          >
            <Avatar class="size-7">
              <AvatarImage
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=faces"
                alt="Admin"
              />
              <AvatarFallback class="text-[10px] font-semibold bg-primary/10 text-primary">
                AD
              </AvatarFallback>
            </Avatar>
            <ChevronDown class="size-3 text-muted-foreground" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" class="w-52 text-xs">
          <DropdownMenuLabel class="font-normal">
            <div class="flex flex-col gap-0.5">
              <span class="font-semibold text-foreground">Admin DevSync</span>
              <span class="text-[11px] text-muted-foreground">admin@devsync.io</span>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem @click="router.push('/team')">Profile</DropdownMenuItem>
            <DropdownMenuItem @click="router.push('/settings')">Settings</DropdownMenuItem>
            <DropdownMenuItem @click="appStore.toggleTheme">
              Toggle {{ appStore.theme === 'dark' ? 'light' : 'dark' }} mode
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            class="text-destructive focus:bg-destructive/10 focus:text-destructive"
            @click="router.push('/login')"
          >
            Sign out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </header>
</template>
