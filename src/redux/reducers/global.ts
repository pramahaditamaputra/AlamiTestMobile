const initGlobalState = {
  isLoading: false,
};

export const globalReducer = (state: object = initGlobalState, action: any) => {
  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      isLoading: action.payload,
    };
  }
  return state;
};
