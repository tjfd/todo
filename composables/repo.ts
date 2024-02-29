import type { IRepository } from '@/repository/interface'

export const useRepository = (): IRepository => {
  const { $repo } = useNuxtApp()

  return $repo as IRepository
}
