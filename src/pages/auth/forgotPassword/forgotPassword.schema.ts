import z from 'zod'
export const forgotPassWord = z.object({
  email: z.string().email('Invalid email address'),
})
export type ForgotPassWord = z.infer<typeof forgotPassWord>
