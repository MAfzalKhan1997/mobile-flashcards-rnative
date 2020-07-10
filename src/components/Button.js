import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Button(props) {
  const { onBtnPress, style, text, textColor } = props;
  return (
    <View>
      <TouchableOpacity
        style={{
          ...style,
          justifyContent: "center",
          alignItems: "center",
          height: 60,
          width: 300,
          borderRadius: 5,
          margin: 10,
        }}
        onPress={onBtnPress}
      >
        <Text style={{ color: textColor, fontSize: 20 }}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}
