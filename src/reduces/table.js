import _ from 'loadsh'
import { MR } from '@/constants/actionTypes'

const stateDefault = {
  data: [],
}

export default function table (state = stateDefault, action) {
  switch (action.type) {
    case MR:
      state.data = _.cloneDeep(action.payload.users)
      return {...state, data: state.data}
    default:
      return state
  }
}
