<script setup lang="ts">
import AuthPageShell from '../components/AuthPageShell.vue'
import ChangePassWordForm from './components/changePassWordForm.vue'
</script>

<template>
  <AuthPageShell title="Đổi mật khẩu" description="Nhập mã xác thực và mật khẩu mới của bạn">
    <ChangePassWordForm />

    <template #footer>
      Quay lại gửi lại mã OTP?
      <router-link
        to="/forgot-password"
        class="font-medium text-primary hover:underline underline-offset-4"
      >
        Quay lại
      </router-link>
    </template>
  </AuthPageShell>
</template>
