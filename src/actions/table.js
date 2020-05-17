import { MR } from '@/constants/actionTypes'

export function defaultData (options) {
  return {
    type: MR,
    payload: options,
  }
}