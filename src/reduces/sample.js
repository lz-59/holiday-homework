import { PAGES } from '@/constants/actionTypes'
import _ from 'loadsh'
const stateDefault = {
  data: [],
  count: 0,
}

export default function sample (state = stateDefault, action) {
  switch (action.type) {
    case PAGES:
      const { list, count} = action.payload
      state.data = _.cloneDeep(list)
      state.count =  _.cloneDeep(count)
      return {...state, data: state.data, count: state.count}
    default:
      return state
  }
}
