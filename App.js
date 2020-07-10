import "react-native-gesture-handler";
import React, { Component } from "react";
import { Provider } from "react-redux";

import store from "./src/redux/store";
import Navigation from "./src/navigation/navigation";

import { setLocalNotification } from "./src/services/notifications";

export default class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
