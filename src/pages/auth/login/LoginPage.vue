<script setup lang="ts">
import AuthPageShell from '../components/AuthPageShell.vue'
import LoginForm from './components/LoginForm.vue'
</script>

<template>
  <AuthPageShell
    title="Đăng nhập quản trị viên"
    description="Nhập thông tin tài khoản để truy cập hệ thống"
  >
    <LoginForm />

    <template #footer>
      Bạn chưa có tài khoản quản trị?
      <router-link
        to="/register"
        class="font-medium text-primary hover:underline underline-offset-4"
      >
        Đăng ký ngay
      </router-link>
    </template>
  </AuthPageShell>
</template>
