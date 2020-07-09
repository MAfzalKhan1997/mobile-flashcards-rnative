const INITIAL_STATE = {};

const reducer = (state = INITIAL_STATE, action) => {
  const { type, decks } = action;

  switch (type) {
    case "ALL_DECKS": {
      return { ...state, decks };
    }
    default:
      return state;
  }
};

export default reducer;
