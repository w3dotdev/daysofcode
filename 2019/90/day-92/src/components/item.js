import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const Item = ({ handleDelete, item }) => {
  return (
    <TouchableOpacity onPress={() => handleDelete(item.key)} style={styles.item}>
      <Text>{item.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 15,
    marginTop: 15,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10
  }
});

export default Item;
