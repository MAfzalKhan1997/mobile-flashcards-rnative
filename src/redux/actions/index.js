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
        await AsyncStorage.setItem("Flashcard:DECKS", JSON.stringify(decks));
        dispatch({
          type: "ALL_DECKS",
          decks,
        });
        return;
      }
      await AsyncStorage.setItem("Flashcard:DECKS", JSON.stringify([object]));
      dispatch({
        type: "ALL_DECKS",
        decks: [object],
      });
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

export const addCard = (questionObj, id) => (dispatch) => {
  console.log("QUESTION_OBJ", questionObj);
  (async () => {
    try {
      let decks = await AsyncStorage.getItem("Flashcard:DECKS");
      decks = JSON.parse(decks);
      const index = decks.findIndex((deck) => deck.id === id);
      decks[index].questions.push(questionObj);
      await AsyncStorage.setItem("Flashcard:DECKS", JSON.stringify(decks));
      dispatch({
        type: "GET_DECK",
        deck: decks[index],
      });
      dispatch({
        type: "ALL_DECKS",
        decks,
      });
    } catch (error) {
      console.log("ERROR", error);
    }
  })();
};

export const getDeck = (id) => (dispatch) => {
  console.log("GET_DECK");
  (async () => {
    try {
      let decks = await AsyncStorage.getItem("Flashcard:DECKS");
      decks = JSON.parse(decks);
      const deck = decks.find((deck) => deck.id === id);
      console.log(deck);
      dispatch({
        type: "GET_DECK",
        deck,
      });
    } catch (error) {
      console.log("ERROR", error);
    }
  })();
};
