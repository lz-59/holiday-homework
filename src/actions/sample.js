import { PAGES } from '@/constants/actionTypes'

export function pageData (options) {
  return {
    type: PAGES,
    payload: options,
  }
}