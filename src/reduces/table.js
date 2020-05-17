import _ from 'loadsh'
import { MR, DEL } from '@/constants/actionTypes'

const stateDefault = {
  data: [],
}

export default function table (state = stateDefault, action) {
  switch (action.type) {
    case MR:
      state.data = _.cloneDeep(action.payload.users)
      return {...state, data: state.data}
    case DEL:
      state.data = state.data.filter(i =>{
        return i.id !== action.payload
      })
      return {...state, data: _.cloneDeep(state.data)}
    default:
      return state
  }
}
