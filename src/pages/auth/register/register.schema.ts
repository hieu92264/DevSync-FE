import z from 'zod'

export const registerSchema = z
  .object({
    username: z.string().min(1, 'Username is required'),

    email: z.string().email('Invalid email address'),

    yourName: z.string().min(1, 'Name is required'),

    password: z.string().min(6, 'Password must be at least 6 characters'),

    confirmPassword: z.string().min(6, 'Confirm password must be at least 6 characters'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })
export type RegiserSchema = z.infer<typeof registerSchema>
