import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

export class DeckDetail extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setTitle(nextProps);
  }

  setTitle = (props) => {
    props.navigation.setOptions({ title: props?.deckObj?.title || "" });
  };

  redirect = (deck) => {
    if (deck.questions.length === 0) {
      alert("Sorry you don't have any card to start quiz");
    } else this.props.navigation.navigate("Quiz");
  };

  render() {
    const { deckObj } = this.props;
    return (
      <View style={{ flex: 1, justifyContent: "space-between", margin: 10 }}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 30 }}>{deckObj?.title}</Text>
          <Text style={{ fontSize: 20, color: "grey" }}>
            {deckObj?.questions.length} cards
          </Text>
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
            onPress={() =>
              this.props.navigation.navigate("AddCard", {
                id: deckObj.id,
              })
            }
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
            onPress={() => this.redirect(deckObj)}
          >
            <Text style={{ color: "white", fontSize: 20 }}>Start Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ data }) => ({
  deckObj: data.deck || null,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DeckDetail);
