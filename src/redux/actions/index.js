import { AsyncStorage } from "react-native";
// await AsyncStorage.removeItem("Flashcard:DECKS");

export const createDeck = (object) => (dispatch) => {
  console.log("CREATE_DECK");
  (async () => {
    try {
      let decks = await AsyncStorage.getItem("Flashcard:DECKS");
      decks = JSON.parse(decks);

      if (decks) {
        decks.push(object);
        dispatch({
          type: "ALL_DECKS",
          decks,
        });
        await AsyncStorage.setItem("Flashcard:DECKS", JSON.stringify(decks));
        return;
      }
      dispatch({
        type: "ALL_DECKS",
        decks: [object],
      });
      await AsyncStorage.setItem("Flashcard:DECKS", JSON.stringify([object]));
    } catch (error) {
      console.log("ERROR", error);
    }
  })();
};

export const getAllDecks = () => (dispatch) => {
  console.log("GET_ALLDECKS");
  (async () => {
    try {
      const decks = await AsyncStorage.getItem("Flashcard:DECKS");
      dispatch({
        type: "ALL_DECKS",
        decks: JSON.parse(decks),
      });
    } catch (error) {
      console.log("ERROR", error);
    }
  })();
};
