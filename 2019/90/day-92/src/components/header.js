import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Feliz Ano Novo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: "#6f42c1",
    paddingTop: 40
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    color: "white"
  }
});

export default Header;
