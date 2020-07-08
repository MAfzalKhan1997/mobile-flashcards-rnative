import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";

import store from "./src/redux/store";

import Navigation from "./src/navigation/navigation";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

// {/* <AppStatusBar backgroundColor={themeColor} barStyle="light-content" /> */}
// import AppStatusBar from './components/AppStatusBar';
// import { themeColor, setLocalNotification } from './utils/helper';
