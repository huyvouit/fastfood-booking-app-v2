const initValue = {
  selectedTab: 'Home',
};

export const rootReducer = (state = initValue, action) => {
  const {type, payload} = action;
  switch (type) {
    case 'SET_SELECTED_TAB':
      return {
        ...state,
        selectedTab: payload,
      };

    default:
      return state;
  }
};
