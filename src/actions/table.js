import { MR, DEL } from '@/constants/actionTypes'

export function defaultData (options) {
  return {
    type: MR,
    payload: options,
  }
}

export function delData (options) {
  return {
    type: DEL,
    payload: options,
  }
}