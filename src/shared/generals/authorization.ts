export const authorizationEnforced = import.meta.env.VITE_AUTHORIZATION_ENFORCED === 'true'

export const can = (permission: string, permissions: string[]): boolean => {
  if (!authorizationEnforced) return true

  return permissions.includes(permission)
}
