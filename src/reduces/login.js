import { BASIC } from '@/constants/actionTypes'
import _ from 'loadsh'
const stateDefault = {
  userName: '',
  userId: '',
}

export default function login (state = stateDefault, action) {
  switch (action.type) {
    case BASIC:
      state.userId = _.cloneDeep(action.payload.user_id)
      state.userName = _.cloneDeep(action.payload.user_name)
      return {...state, userId: state.userId, userName: state.userName}
    default:
      return state
  }
}
