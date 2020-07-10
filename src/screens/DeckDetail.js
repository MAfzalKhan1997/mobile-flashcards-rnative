import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

import Button from "../components/Button";

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
          <Button
            onBtnPress={() =>
              this.props.navigation.navigate("AddCard", {
                id: deckObj.id,
              })
            }
            style={{
              backgroundColor: "white",
              borderWidth: 1,
              border: "black",
            }}
            text="Add Card"
            textColor="black"
          />
          <Button
            onBtnPress={() => this.redirect(deckObj)}
            style={{
              backgroundColor: "black",
            }}
            text="Start Quiz"
            textColor="white"
          />
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
