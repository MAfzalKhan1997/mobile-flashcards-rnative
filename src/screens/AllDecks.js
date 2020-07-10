import React, { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { connect } from "react-redux";

import * as actions from "../redux/actions";

export class AllDecks extends Component {
  componentDidMount() {
    this.props.getAllDecks();
  }

  redirect = (id) => {
    this.props.getDeck(id);
    this.props.navigation.navigate("DeckDetail");
  };

  render() {
    const { decks } = this.props;
    if (decks.length > 0)
      return (
        <View>
          <ScrollView>
            {decks.map(({ id, title, questions }, index) => (
              <TouchableOpacity
                key={id}
                style={{
                  flex: 1,
                  justifyContent: "center",
                  backgroundColor: "white",
                  minHeight: 130,
                  margin: 10,
                  padding: 10,
                  borderRadius: 10,
                }}
                onPress={() => this.redirect(id)}
              >
                <Text
                  style={{
                    fontSize: 40,
                    textAlign: "center",
                    marginBottom: 10,
                  }}
                >
                  {title}
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    textAlign: "center",
                    color: "grey",
                    marginBottom: 5,
                  }}
                >
                  {questions.length} Cards
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      );
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 20 }}>You don't have any decks yet</Text>
      </View>
    );
  }
}

const mapStateToProps = ({ data }) => {
  return {
    decks: data.decks || [],
  };
};

// const mapDispatchToProps = {};

export default connect(mapStateToProps, actions)(AllDecks);
