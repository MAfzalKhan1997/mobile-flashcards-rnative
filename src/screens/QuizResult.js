import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import {
  setLocalNotification,
  clearLocalNotification,
} from "../services/notifications";

import Button from "../components/Button";

export class QuizResult extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      resultObj: { correctGuess: 0, totalQuestions: 0 },
    };
  }

  componentDidMount() {
    const resultObj = this.props.route.params;
    this.setState({
      resultObj,
    });
    clearLocalNotification();
    setLocalNotification();
  }

  render() {
    const { resultObj } = this.state;
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text
            style={{
              fontSize: 30,
            }}
          >
            Result
          </Text>
          <Text
            style={{
              fontSize: 100,
            }}
          >
            {(
              (resultObj?.correctGuess * 100) /
              resultObj?.totalQuestions
            ).toFixed(2)}
            %
          </Text>
          <Text
            style={{
              fontSize: 25,
            }}
          >
            Correct Answers: {resultObj?.correctGuess}
          </Text>
        </View>
        <View>
          <Button
            onBtnPress={() => this.props.navigation.navigate("Quiz")}
            style={{
              backgroundColor: "black",
            }}
            text="Restart Quiz"
            textColor="white"
          />
          <Button
            onBtnPress={() => this.props.navigation.navigate("DeckDetail")}
            style={{
              backgroundColor: "white",
              borderWidth: 1,
              border: "black",
            }}
            text="Back to Deck"
            textColor="black"
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(QuizResult);
