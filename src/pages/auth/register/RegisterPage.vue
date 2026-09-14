<script setup lang="ts">
import AuthPageShell from '../components/AuthPageShell.vue'
import RegisterForm from './components/RegisterForm.vue'
</script>

<template>
  <AuthPageShell
    title="Đăng kí quản trị viên"
    description="Nhập thông tin tài khoản để truy cập hệ thống"
  >
    <RegisterForm />

    <template #footer>
      Quay lại trang
      <router-link to="/login" class="font-medium text-primary hover:underline underline-offset-4">
        Login?
      </router-link>
    </template>
  </AuthPageShell>
</template>
