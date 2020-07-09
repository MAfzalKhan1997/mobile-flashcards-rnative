import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AllDecks from "../screens/AllDecks";
import CreateDeck from "../screens/CreateDeck";
import DeckDetail from "../screens/DeckDetail";
import AddCard from "../screens/AddCard";
import Quiz from "../screens/Quiz";
import QuizResult from "../screens/QuizResult";
import { Feather } from "@expo/vector-icons";

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
