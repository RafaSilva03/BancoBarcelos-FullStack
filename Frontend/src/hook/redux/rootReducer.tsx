import { Action } from "redux";

interface State {
  [key: string]: any;
}

const initialState: State = {};

const rootReducer = (state: State = initialState, action: Action<any>): State => {
  if (action.type === "SAVE_DATA" && action.meta && action.meta.key) {
    return {
      ...state,
      [action.meta.key]: action.payload,
    };
  }
  return state;
};

export default rootReducer;
