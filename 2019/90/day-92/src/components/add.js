import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

const Add = ({ handleAdd }) => {
  const [text, setText] = useState(null);
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="adicione uma nova meta de 2020"
        onChangeText={val => setText(val)}
      />

      <Button title="adicionar" onPress={() => handleAdd(text)} color="#6f42c1" />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  }
});

export default Add;
