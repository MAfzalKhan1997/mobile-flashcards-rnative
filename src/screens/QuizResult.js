import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

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
          <TouchableOpacity
            style={{
              borderRadius: 5,
              backgroundColor: "black",
              margin: 10,
              padding: 15,
            }}
            onPress={() => this.props.navigation.navigate("Quiz")}
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
