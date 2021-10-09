import axios from "axios";
import { Dispatch } from "redux";

import { SET_DICTIONARY_RESULTS } from "./types";

export const searchTerm = (term: string, dispatch: any) => {
  axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${term}`)
    .then(res => {
      // dispatch({ type: SET_DICTIONARY_RESULTS, payload: res.data });
      dispatch({ results: res.data });
    })
    .catch(err => {

    });
}