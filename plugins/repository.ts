import { Repository } from '@/repository/index'

export default defineNuxtPlugin(context => {
  return {
    provide: {
      repo: new Repository(context),
    },
  }
})
