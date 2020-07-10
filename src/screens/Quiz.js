import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import Button from "../components/Button";

export class Quiz extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isAnswer: false,
      questionNo: 0,
      correctGuess: 0,
    };
  }

  handleCorrect = (deckObj) => {
    const { correctGuess, questionNo } = this.state;
    this.setState(
      {
        correctGuess: correctGuess + 1,
      },
      () => {
        this.redirect(deckObj, questionNo, this.state.correctGuess);
      }
    );
  };

  redirect = (deckObj, questionNo, correctGuess) => {
    if (questionNo === deckObj.questions.length - 1) {
      this.props.navigation.navigate("QuizResult", {
        totalQuestions: deckObj.questions.length,
        correctGuess,
      });
      this.setState({
        isAnswer: false,
        questionNo: 0,
        correctGuess: 0,
      });
    } else {
      this.setState({
        questionNo: questionNo + 1,
      });
    }
  };

  handleInCorrect = (deckObj) => {
    const { questionNo, correctGuess } = this.state;
    if (questionNo === deckObj.questions.length - 1) {
      this.props.navigation.navigate("QuizResult", {
        totalQuestions: deckObj.questions.length,
        correctGuess,
      });
      this.setState({
        isAnswer: false,
        questionNo: 0,
        correctGuess: 0,
      });
    } else {
      this.setState({
        questionNo: questionNo + 1,
      });
    }
  };

  render() {
    const { isAnswer, questionNo } = this.state;
    const { deckObj } = this.props;
    return (
      <View
        style={{ flex: 1, justifyContent: "center", backgroundColor: "white" }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 20,
                marginTop: 10,
              }}
            >
              {questionNo + 1}/{deckObj.questions.length}
            </Text>

            <Text
              style={{
                marginTop: 50,
                fontSize: 25,
              }}
            >
              {!isAnswer
                ? deckObj.questions[questionNo].question
                : deckObj.questions[questionNo].answer}
            </Text>
            <TouchableOpacity
              style={{
                borderRadius: 5,
                borderWidth: 1,
                borderColor: !isAnswer ? "blue" : "orange",
                margin: 10,
                padding: 10,
                width: 200,
              }}
              onPress={() => this.setState({ isAnswer: !isAnswer })}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  color: !isAnswer ? "blue" : "orange",
                }}
              >
                {!isAnswer ? "Answer" : "Question"}
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              onBtnPress={() => this.handleCorrect(deckObj)}
              style={{
                backgroundColor: "green",
              }}
              text="Correct"
              textColor="white"
            />
            <Button
              onBtnPress={() => this.handleInCorrect(deckObj)}
              style={{
                backgroundColor: "red",
              }}
              text="InCorrect"
              textColor="white"
            />
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ data }) => ({
  deckObj: data.deck || null,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
