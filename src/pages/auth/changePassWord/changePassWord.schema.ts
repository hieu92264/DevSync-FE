import z from 'zod'
export const changePassword = z
  .object({
    otp: z.string().min(6, 'opt is require'),
    newPassword: z.string().min(6, 'Password is required'),
    confirmNewPassword: z.string().min(6, 'Password is required'),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })
export type ChangePassword = z.infer<typeof changePassword>
