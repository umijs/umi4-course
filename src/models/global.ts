import { Reducer } from "umi";

export interface GlobalModelState {
  unaccessible: string[];
}

export interface GlobalModelType {
  namespace: "global";
  state: GlobalModelState;
  reducers: {
    save: Reducer<GlobalModelState>;
  };
}

const GlobalModel: GlobalModelType = {
  namespace: "global",

  state: {
    unaccessible: [],
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};

export default GlobalModel;
