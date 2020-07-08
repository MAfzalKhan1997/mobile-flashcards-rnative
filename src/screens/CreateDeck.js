import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

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
              height: 70,
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
            onPress={() => this.props.navigation.navigate("DeckDetail")}
          >
            <Text style={{ color: "white", fontSize: 20 }}>Create Deck</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CreateDecks);
