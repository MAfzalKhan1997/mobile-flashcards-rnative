import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

export class QuizResult extends Component {
  render() {
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
            90%
            {/* {`${Math.round((correctAnswer * 100) / totalQuestions)}%`} */}
          </Text>
          <Text
            style={{
              fontSize: 25,
            }}
          >
            Correct Answers: 2
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={{
              borderRadius: 5,
              backgroundColor: "black",
              margin: 10,
              padding: 15,
            }}
            // onPress={() => retakeQuiz()}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                color: "white",
              }}
            >
              Restart Quiz
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderRadius: 5,
              backgroundColor: "white",
              borderWidth: 2,
              borderColor: "black",
              margin: 10,
              padding: 15,
              width: 300,
            }}
            onPress={() => this.props.navigation.navigate("DeckDetail")}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                color: "black",
              }}
            >
              Back to Deck
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(QuizResult);
