import { defineStore } from 'pinia'
import { reactive } from 'vue'

interface IThemeStore {
  theme: 'dark' | 'white'
}

export const useThemeStore = defineStore(
  'state',
  () => {
    const state = reactive<IThemeStore>({
      theme: 'white',
    })

    const setTheme = (theme: 'dark' | 'white') => {
      state.theme = theme
    }
    return {
      state,
      setTheme,
    }
  },
  {
    persist: {
      storage: persistedState.localStorage,
    },
  },
)
