<script setup lang="ts">
import ChangePassWordForm from './components/changePassWordForm.vue'
import { Moon, Sun } from '@lucide/vue'
import { useAppStore } from '@/stores/app.store'

const appStore = useAppStore()
</script>

<template>
  <div
    class="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0"
  >
    <!-- Theme toggle -->
    <button
      type="button"
      class="absolute right-4 top-4 md:right-8 md:top-8 z-50 flex items-center justify-center size-9 rounded-md border bg-background text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors"
      :title="appStore.theme === 'dark' ? 'Chế độ sáng' : 'Chế độ tối'"
      @click="appStore.toggleTheme"
    >
      <Sun v-if="appStore.theme === 'dark'" class="size-4" />
      <Moon v-else class="size-4" />
    </button>

    <div
      class="relative hidden h-full flex-col justify-between p-10 lg:flex dark:border-r overflow-hidden bg-blue-600 dark:bg-zinc-950 text-white transition-colors duration-500"
    >
      <!-- Background Image with zoom & pan subtle pulse -->
      <img
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
        alt="Admin Dashboard Analytics"
        class="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-25 dark:opacity-20 transition-transform duration-1000 scale-105"
      />

      <!-- Animated Ambient Glow Orbs -->
      <div
        class="pointer-events-none absolute -top-24 -left-24 size-96 rounded-full bg-blue-400/30 dark:bg-blue-600/20 blur-3xl animate-pulse"
      />
      <div
        class="pointer-events-none absolute bottom-10 right-0 size-80 rounded-full bg-indigo-500/30 dark:bg-purple-600/20 blur-3xl animate-pulse [animation-delay:2s]"
      />

      <!-- Gradient Overlay -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-blue-700/80 via-blue-600/85 to-indigo-950/90 dark:from-zinc-950/90 dark:via-zinc-900/95 dark:to-zinc-950 transition-colors duration-500"
      />

      <!-- Top Header / Logo -->
      <div class="relative z-20 flex items-center justify-between">
        <div class="flex items-center gap-3 text-lg font-semibold tracking-tight text-white">
          <div
            class="flex size-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur-md border border-white/20 shadow-md transition-transform hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="size-5 text-white"
            >
              <rect width="7" height="7" x="3" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="14" rx="1" />
              <rect width="7" height="7" x="3" y="14" rx="1" />
            </svg>
          </div>
          <div>
            <span class="block leading-none">DevSync</span>
            <span class="text-[11px] font-normal text-blue-100 dark:text-zinc-400"
              >Admin Platform</span
            >
          </div>
        </div>

        <div
          class="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur-md"
        >
          <span class="relative flex size-2">
            <span
              class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"
            />
            <span class="relative inline-flex size-2 rounded-full bg-emerald-400" />
          </span>
          <span class="text-[11px] tracking-wide text-white/90">System Active</span>
        </div>
      </div>

      <!-- Center: Interactive Floating Graphic Card with CSS Animation -->
      <div class="relative z-20 my-auto flex flex-col items-center justify-center py-6">
        <div
          class="w-full max-w-sm rounded-2xl border border-white/20 bg-white/10 dark:bg-zinc-900/60 p-5 shadow-2xl backdrop-blur-xl animate-float transition-all duration-300 hover:shadow-blue-500/20"
        >
          <!-- Card Header -->
          <div class="flex items-center justify-between border-b border-white/15 pb-3">
            <div class="flex items-center gap-2">
              <span class="size-2.5 rounded-full bg-red-400/80" />
              <span class="size-2.5 rounded-full bg-amber-400/80" />
              <span class="size-2.5 rounded-full bg-emerald-400/80" />
              <span class="ml-2 text-xs font-medium text-white/80">Realtime Analytics</span>
            </div>
            <span
              class="text-[10px] font-mono text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded-full"
            >
              +28.4%
            </span>
          </div>

          <!-- Dynamic Wave / Bars Animation -->
          <div class="mt-4 space-y-3">
            <div class="flex items-end justify-between gap-2 h-20 pt-3 px-2">
              <div
                class="w-full bg-white/20 dark:bg-white/10 rounded-t-md animate-bar-1"
                style="height: 45%"
              />
              <div
                class="w-full bg-white/30 dark:bg-white/20 rounded-t-md animate-bar-2"
                style="height: 75%"
              />
              <div
                class="w-full bg-white/40 dark:bg-white/30 rounded-t-md animate-bar-3"
                style="height: 60%"
              />
              <div
                class="w-full bg-white/60 dark:bg-blue-400/60 rounded-t-md animate-bar-4"
                style="height: 90%"
              />
              <div
                class="w-full bg-white/80 dark:bg-blue-300/80 rounded-t-md animate-bar-5"
                style="height: 70%"
              />
              <div
                class="w-full bg-white dark:bg-white rounded-t-md animate-bar-6"
                style="height: 98%"
              />
            </div>

            <div class="grid grid-cols-2 gap-2 pt-2">
              <div class="rounded-lg bg-white/10 p-2.5 backdrop-blur-xs">
                <span class="block text-[10px] text-white/70">Tổng lượt truy cập</span>
                <span class="text-sm font-bold tracking-tight">128,420</span>
              </div>
              <div class="rounded-lg bg-white/10 p-2.5 backdrop-blur-xs">
                <span class="block text-[10px] text-white/70">Tốc độ xử lý API</span>
                <span class="text-sm font-bold tracking-tight text-emerald-300">42ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Quote / Footer -->
      <div class="relative z-20">
        <div
          class="rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur-md dark:border-white/10 dark:bg-zinc-950/50"
        >
          <blockquote class="space-y-1.5">
            <p class="text-xs font-medium leading-relaxed text-white/95">
              &ldquo;Hệ thống quản trị tập trung giúp kiểm soát toàn bộ dữ liệu, người dùng và tối
              ưu hóa vận hành mượt mà, bảo mật tuyệt đối.&rdquo;
            </p>
            <footer class="text-[11px] text-blue-100 dark:text-zinc-400 font-medium">
              — DevSync Admin Control Panel
            </footer>
          </blockquote>
        </div>
      </div>
    </div>

    <div class="lg:p-8 flex h-full items-center justify-center py-12">
      <div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[380px]">
        <div class="flex flex-col space-y-2 text-center">
          <h1 class="text-2xl font-semibold tracking-tight">Đăng nhập quản trị viên</h1>
          <p class="text-sm text-muted-foreground">Nhập thông tin tài khoản để truy cập hệ thống</p>
        </div>

        <ChangePassWordForm />
        <!-- === -->
        <div class="text-center text-sm text-muted-foreground mt-4">
          Quay lại gửi lại mã OTP ?
          <router-link
            to="/forgot-password"
            class="font-medium text-primary hover:underline underline-offset-4"
          >
            Quay Lại
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

@keyframes pulseBar {
  0%,
  100% {
    transform: scaleY(0.7);
  }
  50% {
    transform: scaleY(1);
  }
}

.animate-bar-1 {
  transform-origin: bottom;
  animation: pulseBar 2.2s ease-in-out infinite;
}
.animate-bar-2 {
  transform-origin: bottom;
  animation: pulseBar 1.8s ease-in-out 0.2s infinite;
}
.animate-bar-3 {
  transform-origin: bottom;
  animation: pulseBar 2.5s ease-in-out 0.4s infinite;
}
.animate-bar-4 {
  transform-origin: bottom;
  animation: pulseBar 1.6s ease-in-out 0.1s infinite;
}
.animate-bar-5 {
  transform-origin: bottom;
  animation: pulseBar 2s ease-in-out 0.3s infinite;
}
.animate-bar-6 {
  transform-origin: bottom;
  animation: pulseBar 1.9s ease-in-out 0.5s infinite;
}
</style>
