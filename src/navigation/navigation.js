import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Platform } from "react-native";
import AllDecks from "../screens/AllDecks";
import CreateDeck from "../screens/CreateDeck";
import DeckDetail from "../screens/DeckDetail";
import AddCard from "../screens/AddCard";
import Quiz from "../screens/Quiz";
import QuizResult from "../screens/QuizResult";
import { Feather } from "@expo/vector-icons";
// import store from "../store";
// import { getDecks } from "../actions";
// import { themeColor } from "../utils/helper";
// import * as DecksApi from "../utils/DecksApi";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

AllDeckStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AllDecks"
        component={AllDecks}
        options={{
          headerTitle: "All Decks",
        }}
      />
    </Stack.Navigator>
  );
};

CreateDeckStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CreateDeck"
        component={CreateDeck}
        options={{
          headerTitle: "Create Deck",
        }}
      />
      <Stack.Screen name="DeckDetail" component={DeckDetail} />
      <Stack.Screen
        name="AddCard"
        component={AddCard}
        options={{
          headerTitle: "Add Card",
        }}
      />
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen
        name="QuizResult"
        component={QuizResult}
        options={{
          headerTitle: "Result",
        }}
      />
    </Stack.Navigator>
  );
};

export default class navigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: "blue",
            labelStyle: { fontSize: 15 },
          }}
        >
          <Tab.Screen
            name="Decks"
            component={AllDeckStack}
            options={() => ({
              tabBarIcon: ({ color }) => (
                <Feather size={30} color={color} name="layers" />
              ),
            })}
          />
          <Tab.Screen
            name="Add Deck"
            component={CreateDeckStack}
            options={() => ({
              tabBarIcon: ({ color }) => (
                <Feather size={30} color={color} name="plus-square" />
              ),
            })}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
// const StackOptions = {
//   headerTintColor: "#fff",
//   headerStyle: {
//     backgroundColor: themeColor,
//   },
//   headerTitleStyle: {
//     fontSize: 20,
//   },
//   headerBackTitleVisible: false,
// };

// const DecksStack = () => {
//   return (
//     <Navigator>
//       <Screen
//         name="Decks"
//         component={Decks}
//         options={{
//           headerTitle: "",
//           ...StackOptions,
//         }}
//       />
//       <Screen name="Deck" component={Deck} options={StackOptions} />
//       <Screen
//         name="AddCard"
//         component={AddCard}
//         options={{
//           headerTitle: "Add Card",
//           ...StackOptions,
//         }}
//       />
//       <Screen name="Quiz" component={Quiz} options={StackOptions} />
//       <Screen name="Result" component={Result} options={StackOptions} />
//     </Navigator>
//   );
// };

// const AddDeckStack = () => {
//   return (
//     <Navigator>
//       <Screen
//         name="AddDeck"
//         component={AddDeck}
//         options={{
//           headerTitle: "",
//           ...StackOptions,
//         }}
//       />
//     </Navigator>
//   );
// };

// const DecksScreens = ["Deck", "Quiz", "Result", "AddCard"];

// const bgColor = Platform.OS === "ios" ? "#fff" : "#fff";
// const tintColor = Platform.OS === "ios" ? themeColor : themeColor;
// const tabOptions = {
//   activeTintColor: tintColor,
//   style: { backgroundColor: bgColor },
//   labelStyle: { fontSize: 14, paddingTop: 0 },
//   indicatorStyle: { backgroundColor: "#fff", height: 2.5 },
// };

// const getTabBarVisible = (route, array) => {
//   const routeName =
//     route.state &&
//     route.state.routes &&
//     route.state.index &&
//     route.state.routes.length > 0 &&
//     route.state.routes[route.state.index].name
//       ? route.state.routes[route.state.index].name
//       : "";
//   if (array.includes(routeName)) return false;
//   return true;
// };

// const Navigation = () => {
//   const fetchData = async () => {
//     const data = await DecksApi.getDecks();
//     store.dispatch(getDecks(data));
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);
// };

// export default Navigation;
