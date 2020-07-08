import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

export class Quiz extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isAnswer: false,
    };
  }

  render() {
    const { isAnswer } = this.state;
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
              2/5
              {/* {currentQuestionIndex + 1}/
                {this.getDeckData().cards.length} */}
            </Text>

            {/* {this.state.showQuestion ? ( */}
            <Text
              style={{
                marginTop: 50,
                fontSize: 25,
              }}
            >
              {/* {card.question} */}
              {!isAnswer ? `Hello Whats your name?` : "Muhammad Afzal Khan"}
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
            <TouchableOpacity
              style={{
                backgroundColor: "green",
                justifyContent: "center",
                alignItems: "center",
                height: 60,
                width: 300,
                borderRadius: 5,
                margin: 10,
              }}
              // onPress={() => this.props.navigation.navigate("AddCard")}
            >
              <Text style={{ color: "white", fontSize: 20 }}>Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "red",
                justifyContent: "center",
                alignItems: "center",
                height: 60,
                width: 300,
                borderRadius: 5,
                margin: 10,
              }}
              onPress={() => this.props.navigation.navigate("QuizResult")}
            >
              <Text style={{ color: "white", fontSize: 20 }}>InCorrect</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
