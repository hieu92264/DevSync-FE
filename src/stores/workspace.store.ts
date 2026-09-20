import { defineStore } from 'pinia'

type Item = {
  id: number
  code: string
  name: string
}

export const useWorkspaceStore = defineStore('workspace', {
  state: () => ({
    organization: null as Item | null,
    project: null as Item | null,
    roles: [] as string[],
    permissions: [] as string[],
  }),

  actions: {
    setContext(data: {
      organization: Item
      project: Item
      roles: string[]
      permissions: string[]
    }) {},

    clearContext() {
      this.organization = null
      this.project = null
      this.roles = []
      this.permissions = []
    },
  },

  persist: true,
})
