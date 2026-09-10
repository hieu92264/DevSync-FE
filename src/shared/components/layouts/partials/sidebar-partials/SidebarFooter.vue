<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ChevronsUpDown, User, Settings, LogOut, Sun, Moon, Laptop } from '@lucide/vue'
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/shared/components/ui/tooltip'
import { useAppStore } from '@/stores/app.store'

defineProps<{
  isCollapsed?: boolean
}>()

const router = useRouter()
const appStore = useAppStore()

function handleLogout() {
  // == viết logic logout======
  router.push('/login')
}
</script>

<template>
  <div class="border-t border-sidebar-border p-2">
    <DropdownMenu>
      <!-- DropdownMenuTrigger là gốc, đóng vai trò kích hoạt Menu -->
      <DropdownMenuTrigger as-child>
        <div>
          <!-- Tooltip wrap bên trong Trigger chính -->
          <TooltipProvider>
            <Tooltip :disabled="!isCollapsed">
              <TooltipTrigger as-child>
                <button
                  type="button"
                  class="flex w-full items-center gap-2.5 rounded-lg p-2 text-left text-sm transition-colors hover:bg-sidebar-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sidebar-ring cursor-pointer"
                  :class="isCollapsed ? 'justify-center p-1.5' : ''"
                >
                  <!-- Avatar -->
                  <Avatar class="size-8 rounded-lg shrink-0">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces"
                      alt="Admin"
                    />
                    <AvatarFallback
                      class="rounded-lg bg-primary/10 text-primary font-semibold text-xs"
                    >
                      AD
                    </AvatarFallback>
                  </Avatar>

                  <!-- User Info (Expanded) -->
                  <div v-if="!isCollapsed" class="grid flex-1 text-left text-xs leading-tight">
                    <span class="truncate font-semibold text-sidebar-foreground"
                      >Admin DevSync</span
                    >
                    <span class="truncate text-[11px] text-muted-foreground">admin@devsync.io</span>
                  </div>

                  <!-- Chevrons icon (Expanded) -->
                  <ChevronsUpDown
                    v-if="!isCollapsed"
                    class="size-4 shrink-0 text-muted-foreground"
                  />
                </button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <span>Admin DevSync (admin@devsync.io)</span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </DropdownMenuTrigger>

      <!-- Dropdown Popup -->
      <DropdownMenuContent
        class="w-56 rounded-lg"
        :side="isCollapsed ? 'right' : 'top'"
        align="end"
        :side-offset="8"
      >
        <DropdownMenuLabel class="p-0 font-normal">
          <div class="flex items-center gap-2 px-2 py-1.5 text-left text-sm">
            <Avatar class="size-8 rounded-lg">
              <AvatarImage
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces"
                alt="Admin"
              />
              <AvatarFallback class="rounded-lg bg-primary/10 text-primary font-semibold text-xs">
                AD
              </AvatarFallback>
            </Avatar>
            <div class="grid flex-1 text-left text-xs leading-tight">
              <span class="truncate font-semibold">Admin DevSync</span>
              <span class="truncate text-[11px] text-muted-foreground">admin@devsync.io</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem class="cursor-pointer" @click="router.push('/profile')">
            <User class="size-4 mr-2" />
            <span>Hồ sơ cá nhân</span>
          </DropdownMenuItem>
          <DropdownMenuItem class="cursor-pointer" @click="router.push('/settings')">
            <Settings class="size-4 mr-2" />
            <span>Cài đặt</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <!-- Theme Mode Switch -->
        <DropdownMenuGroup>
          <DropdownMenuItem class="cursor-pointer" @click="appStore.setTheme('light')">
            <Sun class="size-4 mr-2" />
            <span>Giao diện sáng</span>
            <span v-if="appStore.theme === 'light'" class="ml-auto text-xs text-primary font-bold"
              >✓</span
            >
          </DropdownMenuItem>
          <DropdownMenuItem class="cursor-pointer" @click="appStore.setTheme('dark')">
            <Moon class="size-4 mr-2" />
            <span>Giao diện tối</span>
            <span v-if="appStore.theme === 'dark'" class="ml-auto text-xs text-primary font-bold"
              >✓</span
            >
          </DropdownMenuItem>
          <DropdownMenuItem class="cursor-pointer" @click="appStore.setTheme('system')">
            <Laptop class="size-4 mr-2" />
            <span>Theo hệ thống</span>
            <span v-if="appStore.theme === 'system'" class="ml-auto text-xs text-primary font-bold"
              >✓</span
            >
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          class="text-destructive focus:bg-destructive/10 focus:text-destructive cursor-pointer"
          @click="handleLogout"
        >
          <LogOut class="size-4 mr-2" />
          <span>Đăng xuất</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>
