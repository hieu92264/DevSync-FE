<script setup lang="ts">
import AuthPageShell from '../components/AuthPageShell.vue'
import ForgotPasswordForm from './components/forgotPasswordForm.vue'
</script>

<template>
  <AuthPageShell title="Quên mật khẩu" description="Nhập thông tin tài khoản để khôi phục mật khẩu">
    <ForgotPasswordForm />

    <template #footer>
      Bạn đã có tài khoản?
      <router-link to="/login" class="font-medium text-primary hover:underline underline-offset-4">
        Đăng nhập
      </router-link>
    </template>
  </AuthPageShell>
</template>
