<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  Sun,
  Moon,
  Building2,
  FolderGit2,
  ArrowRight,
  ArrowLeft,
  Loader2,
  Sparkles,
} from '@lucide/vue'
import { Button } from '@/shared/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/components/ui/select'
import { useAppStore } from '@/stores/app.store'

const router = useRouter()
const appStore = useAppStore()

const selectedCompany = ref('')
const selectedProject = ref('')
const isSubmitting = ref(false)

const companies = [
  {
    id: 'company-a',
    name: 'Công ty Cổ phần Công nghệ DevSync',
    code: 'DEVSYNC',
    type: 'Tổng công ty',
  },
  {
    id: 'company-b',
    name: 'Tập đoàn Giải pháp Số Thăng Long',
    code: 'TL-CORP',
    type: 'Đối tác chiến lược',
  },
  {
    id: 'company-c',
    name: 'Công ty TNHH Tư vấn & Phần mềm Alpha',
    code: 'ALPHA-TECH',
    type: 'Chi nhánh vận hành',
  },
]

const projects = [
  {
    id: 'project-1',
    name: 'Hệ thống Quản lý Vận tải Xe Du lịch',
    code: 'PRJ-TRANS',
    environment: 'Production',
  },
  {
    id: 'project-2',
    name: 'Cổng thông tin Quản trị Nội bộ Dashboard',
    code: 'PRJ-ADMIN',
    environment: 'Production',
  },
  {
    id: 'project-3',
    name: 'Ứng dụng Thương mại Điện tử B2B',
    code: 'PRJ-B2B',
    environment: 'Staging',
  },
]

const handleContinue = async () => {
  if (!selectedCompany.value || !selectedProject.value || isSubmitting.value) return

  isSubmitting.value = true

  // Save selected workspace info to localStorage for session persistence
  try {
    localStorage.setItem('selectedCompany', selectedCompany.value)
    localStorage.setItem('selectedProject', selectedProject.value)
  } catch (e) {
    console.error(e)
  }

  setTimeout(() => {
    isSubmitting.value = false
    router.push('/dashboard')
  }, 400)
}
</script>

<template>
  <div
    class="relative min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-6 bg-background text-foreground transition-colors duration-300 overflow-hidden"
  >
    <div
      class="pointer-events-none absolute -top-32 -left-32 size-96 rounded-full bg-primary/10 dark:bg-primary/15 blur-3xl"
    />
    <div
      class="pointer-events-none absolute -bottom-32 -right-32 size-96 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"
    />

    <div
      class="fixed top-4 inset-x-4 sm:inset-x-8 flex items-center justify-between z-50 pointer-events-none"
    >
      <router-link
        to="/login"
        class="pointer-events-auto inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border/60 bg-background/80 backdrop-blur-md text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors shadow-xs"
      >
        <ArrowLeft class="size-3.5" />
        <span>Quay lại đăng nhập</span>
      </router-link>

      <button
        type="button"
        class="pointer-events-auto flex items-center justify-center size-9 rounded-lg border border-border/60 bg-background/80 backdrop-blur-md text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors shadow-xs"
        :title="appStore.theme === 'dark' ? 'Chế độ sáng' : 'Chế độ tối'"
        @click="appStore.toggleTheme"
      >
        <Sun v-if="appStore.theme === 'dark'" class="size-4" />
        <Moon v-else class="size-4" />
      </button>
    </div>

    <div
      class="w-full max-w-[480px] mx-auto p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/90 backdrop-blur-xl shadow-xl shadow-black/5 dark:shadow-black/40 space-y-6 relative z-10 transition-all duration-300"
    >
      <div class="flex flex-col items-center space-y-3 text-center">
        <div
          class="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-md shadow-primary/20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="size-6"
          >
            <rect width="7" height="7" x="3" y="3" rx="1" />
            <rect width="7" height="7" x="14" y="3" rx="1" />
            <rect width="7" height="7" x="14" y="14" rx="1" />
            <rect width="7" height="7" x="3" y="14" rx="1" />
          </svg>
        </div>

        <div class="space-y-1.5">
          <div
            class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-primary/10 text-primary border border-primary/20"
          >
            <Sparkles class="size-3" />
            <span>Thiết lập không gian làm việc</span>
          </div>
          <h1 class="text-2xl font-bold tracking-tight text-foreground">Chọn Công ty & Dự án</h1>
          <p class="text-sm text-muted-foreground max-w-sm mx-auto">
            Vui lòng chọn công ty trực thuộc và dự án bạn muốn truy cập để bắt đầu làm việc.
          </p>
        </div>
      </div>

      <div class="space-y-4 pt-1">
        <!-- Select 1: Công ty -->
        <div class="space-y-2">
          <label
            class="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
          >
            <Building2 class="size-3.5 text-muted-foreground" />
            <span>Công ty / Tổ chức</span>
          </label>
          <Select v-model="selectedCompany">
            <SelectTrigger
              class="h-11 w-full rounded-lg border border-input bg-background/50 px-3.5 text-sm shadow-xs transition-all hover:bg-accent/30 focus-visible:ring-2 focus-visible:ring-primary/20"
            >
              <SelectValue placeholder="Chọn công ty quản lý..." />
            </SelectTrigger>
            <SelectContent class="w-full">
              <SelectItem
                v-for="comp in companies"
                :key="comp.id"
                :value="comp.id"
                class="cursor-pointer py-2 px-3"
              >
                <div class="flex flex-col text-left gap-0.5">
                  <span class="font-medium text-foreground text-sm">{{ comp.name }}</span>
                  <span class="text-xs text-muted-foreground"
                    >{{ comp.type }} • {{ comp.code }}</span
                  >
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <!-- Select 2: Dự án -->
        <div class="space-y-2">
          <label
            class="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
          >
            <FolderGit2 class="size-3.5 text-muted-foreground" />
            <span>Dự án (Project)</span>
          </label>
          <Select v-model="selectedProject">
            <SelectTrigger
              class="h-11 w-full rounded-lg border border-input bg-background/50 px-3.5 text-sm shadow-xs transition-all hover:bg-accent/30 focus-visible:ring-2 focus-visible:ring-primary/20"
            >
              <SelectValue placeholder="Chọn dự án làm việc..." />
            </SelectTrigger>
            <SelectContent class="w-full">
              <SelectItem
                v-for="proj in projects"
                :key="proj.id"
                :value="proj.id"
                class="cursor-pointer py-2 px-3"
                :disabled="!selectedCompany"
              >
                <div class="flex flex-col text-left gap-0.5">
                  <span class="font-medium text-foreground text-sm">{{ proj.name }}</span>
                  <span class="text-xs text-muted-foreground"
                    >{{ proj.environment }} • {{ proj.code }}</span
                  >
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div class="pt-2">
        <Button
          type="button"
          :disabled="!selectedCompany || !selectedProject || isSubmitting"
          @click="handleContinue"
          class="h-11 w-full rounded-lg bg-primary text-primary-foreground font-medium shadow-md shadow-primary/20 hover:bg-primary/90 transition-all active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          <Loader2 v-if="isSubmitting" class="size-4 animate-spin" />
          <template v-else>
            <span>Tiếp tục vào hệ thống</span>
            <ArrowRight class="size-4" />
          </template>
        </Button>
      </div>

      <!-- Footer Note -->
      <div class="pt-2 border-t border-border/50">
        <p class="text-center text-xs text-muted-foreground leading-relaxed">
          Bạn có thể nhanh chóng chuyển đổi qua lại giữa các dự án khác ở thanh điều hướng sau khi
          đăng nhập.
        </p>
      </div>
    </div>
  </div>
</template>
