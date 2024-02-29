import type { SORT_TYPES } from '@/constants/sort'

export interface ISort {
  name?: string
  field?: string
  type?: SORT_TYPES
}
