<script setup lang="ts">
import { useForm } from 'vee-validate'
import { ref } from 'vue'
import { Eye, EyeOff } from '@lucide/vue'
import { Input } from '@/shared/components/ui/input'
import { Button } from '@/shared/components/ui/button'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/shared/components/ui/form'
// ===
import { useRouter } from 'vue-router'
import { toTypedSchema } from '@vee-validate/zod'
import { registerSchema } from '../register.schema'
const showPassword = ref(false)
const showconfirmPassword = ref(false)
const route = useRouter()
const { handleSubmit, errors, defineField, isSubmitting } = useForm({
  validationSchema: toTypedSchema(registerSchema),
  initialValues: {
    username: '',
    password: '',
  },
})

const onSubmit = handleSubmit(async (values) => {
  // =========
})
</script>

<template>
  <Form class="w-full">
    <form class="space-y-4" @submit="onSubmit">
      <FormField name="username" v-slot="{ componentField }">
        <FormItem class="space-y-1.5">
          <FormLabel class="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            username
          </FormLabel>
          <FormControl>
            <Input
              type="username"
              placeholder="admin@example.com"
              class="h-11 rounded-lg border-input bg-background/50 px-3.5 py-2 text-sm shadow-sm transition-all duration-200 placeholder:text-muted-foreground/50 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20"
              v-bind="componentField"
            />
          </FormControl>
          <FormMessage class="text-xs text-destructive font-medium" />
        </FormItem>
      </FormField>
      <!-- ======= -->
      <FormField name="email" v-slot="{ componentField }">
        <FormItem class="space-y-1.5">
          <FormLabel class="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Email
          </FormLabel>
          <FormControl>
            <Input
              type="email"
              placeholder="admin@example.com"
              class="h-11 rounded-lg border-input bg-background/50 px-3.5 py-2 text-sm shadow-sm transition-all duration-200 placeholder:text-muted-foreground/50 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20"
              v-bind="componentField"
            />
          </FormControl>
          <FormMessage class="text-xs text-destructive font-medium" />
        </FormItem>
      </FormField>
      <!-- ============== -->
      <FormField name="yourName" v-slot="{ componentField }">
        <FormItem class="space-y-1.5">
          <FormLabel class="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Your Name
          </FormLabel>
          <FormControl>
            <Input
              type="yourName"
              placeholder="admin@example.com"
              class="h-11 rounded-lg border-input bg-background/50 px-3.5 py-2 text-sm shadow-sm transition-all duration-200 placeholder:text-muted-foreground/50 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20"
              v-bind="componentField"
            />
          </FormControl>
          <FormMessage class="text-xs text-destructive font-medium" />
        </FormItem>
      </FormField>
      <!-- =================== -->

      <FormField name="password" v-slot="{ componentField }">
        <FormItem class="space-y-1.5">
          <div class="flex items-center justify-between">
            <FormLabel class="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Password
            </FormLabel>
          </div>
          <FormControl>
            <div class="relative">
              <Input
                :type="showPassword ? 'text' : 'password'"
                placeholder="••••••••"
                class="h-11 rounded-lg border-input bg-background/50 px-3.5 py-2 pr-12 text-sm shadow-sm transition-all duration-200 placeholder:text-muted-foreground/50 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20"
                v-bind="componentField"
              />

              <button
                type="button"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-1"
                @click="showPassword = !showPassword"
              >
                <Eye v-if="showPassword" class="size-4" />
                <EyeOff v-else class="size-4" />
              </button>
            </div>
          </FormControl>
          <FormMessage class="text-xs text-destructive font-medium" />
        </FormItem>
      </FormField>
      <!-- ================== -->
      <FormField name="confirmPassword" v-slot="{ componentField }">
        <FormItem class="space-y-1.5">
          <div class="flex items-center justify-between">
            <FormLabel class="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Confirm Password
            </FormLabel>
          </div>
          <FormControl>
            <div class="relative">
              <Input
                :type="showconfirmPassword ? 'text' : 'password'"
                placeholder="••••••••"
                class="h-11 rounded-lg border-input bg-background/50 px-3.5 py-2 pr-12 text-sm shadow-sm transition-all duration-200 placeholder:text-muted-foreground/50 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20"
                v-bind="componentField"
              />

              <button
                type="button"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-1"
                @click="showconfirmPassword = !showconfirmPassword"
              >
                <Eye v-if="showconfirmPassword" class="size-4" />
                <EyeOff v-else class="size-4" />
              </button>
            </div>
          </FormControl>
          <FormMessage class="text-xs text-destructive font-medium" />
        </FormItem>
      </FormField>

      <div class="pt-2 space-y-3">
        <Button
          type="submit"
          class="h-11 w-full rounded-lg bg-primary text-primary-foreground font-medium shadow-md shadow-primary/20 hover:bg-primary/90 transition-all active:scale-[0.99]"
        >
          Đăng nhập quản trị
        </Button>

        <div class="relative flex py-2 items-center">
          <div class="flex-grow border-t border-border/60"></div>
          <span
            class="flex-shrink mx-4 text-xs text-muted-foreground uppercase tracking-widest font-medium"
            >Hoặc</span
          >
          <div class="flex-grow border-t border-border/60"></div>
        </div>

        <Button
          type="button"
          variant="outline"
          class="h-11 w-full rounded-lg border-input bg-background font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-all flex items-center justify-center gap-2"
        >
          <svg class="h-4 w-4" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
          Login With Google
        </Button>
      </div>
    </form>
  </Form>
</template>
