import { BASIC } from '@/constants/actionTypes'

export function  basicData (options) {
  return {
    type: BASIC,
    payload: options,
  }
}