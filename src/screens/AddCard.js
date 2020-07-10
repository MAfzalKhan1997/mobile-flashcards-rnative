import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import { connect } from "react-redux";

import * as actions from "../redux/actions";
import Button from "../components/Button";

export class AddCard extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = { question: "", answer: "", deckId: "" };
  }

  componentDidMount() {
    this.setState({
      deckId: this.props.route.params.id,
    });
  }

  handleChange = (value, title) => {
    if (title === "question") {
      this.setState({
        question: value,
      });
    }
    if (title === "answer") {
      this.setState({
        answer: value,
      });
    }
  };

  submitCard = () => {
    const { question, answer, deckId } = this.state;
    if (question !== "" && answer !== "") {
      const questionObj = {
        question,
        answer,
      };
      this.props.addCard(questionObj, deckId);
      this.setState({
        question: "",
        answer: "",
      });
      this.props.navigation.navigate("DeckDetail");
    } else {
      alert("Please enter Question/Answer");
    }
  };

  render() {
    const { question, answer } = this.state;
    return (
      <View style={{ flex: 1, justifyContent: "space-between", margin: 10 }}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={{ fontSize: 20 }}>Question:</Text>
          <TextInput
            value={question}
            placeholder="Gravity on Earth"
            onChangeText={(question) => this.handleChange(question, "question")}
            style={{
              backgroundColor: "white",
              height: 60,
              fontSize: 20,
              borderWidth: 1,
              borderColor: "grey",
              borderRadius: 10,
              padding: 5,
            }}
          />
          <Text style={{ fontSize: 20 }}>Answer</Text>
          <TextInput
            value={answer}
            placeholder="9.8"
            onChangeText={(answer) => this.handleChange(answer, "answer")}
            style={{
              backgroundColor: "white",
              height: 60,
              fontSize: 20,
              borderWidth: 1,
              borderColor: "grey",
              borderRadius: 10,
              padding: 5,
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            onBtnPress={() => this.submitCard()}
            style={{
              backgroundColor: "black",
            }}
            text="Submit"
            textColor="white"
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

export default connect(mapStateToProps, actions)(AddCard);
