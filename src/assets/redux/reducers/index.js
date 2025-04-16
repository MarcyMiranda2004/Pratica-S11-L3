const initialState = {
  main: {
    favorites: [],
  },
};

const mainReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default mainReducer;
