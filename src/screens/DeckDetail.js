import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

export class DeckDetail extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "space-between", margin: 10 }}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 30 }}>Deck2</Text>
          <Text style={{ fontSize: 20, color: "grey" }}>0 cards</Text>
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
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
              height: 60,
              width: 300,
              borderWidth: 1,
              border: "black",
              borderRadius: 5,
              margin: 10,
            }}
            onPress={() => this.props.navigation.navigate("AddCard")}
          >
            <Text style={{ color: "black", fontSize: 20 }}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "black",
              justifyContent: "center",
              alignItems: "center",
              height: 60,
              width: 300,
              borderRadius: 5,
              margin: 10,
            }}
            onPress={() => this.props.navigation.navigate("Quiz")}
          >
            <Text style={{ color: "white", fontSize: 20 }}>Start Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DeckDetail);
