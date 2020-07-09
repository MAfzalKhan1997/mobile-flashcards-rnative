import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import * as actions from "../redux/actions";

const deckId = () => Math.random().toString(36).substring(2, 15);

export class CreateDecks extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = { deckTitle: "" };
  }

  handleChange = (deckTitle) => {
    this.setState({
      deckTitle,
    });
  };

  createDeck = () => {
    const { deckTitle } = this.state;

    const deckObj = {
      id: deckId(),
      title: deckTitle,
      questions: [],
    };
    this.props.createDeck(deckObj);
    this.setState({
      deckTitle: "",
    });

    this.props.navigation.navigate("DeckDetail", {
      id: deckObj.id,
      title: deckObj.title,
      questions: deckObj.questions,
    });
  };

  render() {
    const { deckTitle } = this.state;
    return (
      <View style={{ flex: 1, justifyContent: "space-between", margin: 10 }}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={{ fontSize: 30 }}>Title of your new deck?</Text>
          <TextInput
            value={deckTitle}
            placeholder="React Native"
            onChangeText={this.handleChange}
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
          <TouchableOpacity
            style={{
              backgroundColor: "black",
              justifyContent: "center",
              alignItems: "center",
              height: 60,
              width: 300,
              borderRadius: 5,
            }}
            onPress={() => this.createDeck()}
          >
            <Text style={{ color: "white", fontSize: 20 }}>Create Deck</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

export default connect(mapStateToProps, actions)(CreateDecks);
