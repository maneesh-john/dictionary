import { SET_DICTIONARY_RESULTS } from "../actions/types"

const initState = {
  results: []
}

export default (state = initState, action: any) => {
  switch(action.type){
    case SET_DICTIONARY_RESULTS:
      return {
        results: action.payload
      }
    default:
      return state;
  }
}