import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

export class AllDecks extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: "center",
            backgroundColor: "white",
            minHeight: 130,
            margin: 10,
            padding: 10,
            borderRadius: 10,
          }}
          //   onPress={() =>
          //     navigation.navigate("DeckDetail", {
          //       deckId: item.id,
          //       name: item.name,
          //     })
          //   }
        >
          <Text
            style={{
              fontSize: 40,
              textAlign: "center",
              marginBottom: 10,
            }}
          >
            {/* {item.name} */}Hello world
          </Text>
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              color: "grey",
              marginBottom: 5,
            }}
          >
            {/* {item.cards.length} */}3 Cards
          </Text>
        </TouchableOpacity>
        {/* <FlatList
          // extraData={decks}
          // style={styles.flatList}
          renderItem={() => (
            
          )}
          keyExtractor={keyExtractor}
          data={Object.keys(decks).sort(
            (a, b) => decks[b].timeStamp - decks[a].timeStamp
          )}
        /> */}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AllDecks);
