// React Native - A framework for building native apps with React.
// https://facebook.github.io/react-native
//
// Mac
// brew install node - https://nodejs.org/en/
// brew install watchman - https://facebook.github.io/watchman/docs/install.html
// sudo gem install cocoapods - https://guides.cocoapods.org/using/getting-started.html
// npx react-native init day92
// npm start
// npm run ios
//
import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Header from "./components/header";
import Item from "./components/item";
import Add from "./components/add";

export default  App = () => {
  const [goals, setGoals] = useState([
    { text: "Front-lever e Back-lever", key: "1" },
    { text: "Viagem de início de ano", key: "2" },
    { text: "Série Togakure", key: "3" }
  ]);

  const handleDelete = key => {
    setGoals(prevGoals => {
      return prevGoals.filter(item => item.key != key);
    });
  };

  const handleAdd = text => {
    console.log(text);

    setGoals(prevGoals => {
      return [{ text: text, key: Math.random().toString() }, ...prevGoals];
    });

  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Add handleAdd={handleAdd} />
        <View style={styles.list}>
          <FlatList
            data={goals}
            renderItem={({ item }) => (
              <Item item={item} handleDelete={handleDelete} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  content: {
    padding: 30
  },
  list: {
    marginTop: 30
  }
});
