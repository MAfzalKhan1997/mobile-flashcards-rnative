const INITIAL_STATE = {};

const reducer = (state = INITIAL_STATE, action) => {
  const { type, decks, deck } = action;

  switch (type) {
    case "ALL_DECKS": {
      return { ...state, decks };
    }
    case "GET_DECK": {
      return { ...state, deck };
    }
    default:
      return state;
  }
};

export default reducer;
