import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import UserList from "./UserList";

export default function HomeScreen({ navigation }) {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/ORT-PabloFernandez/PNTP2-REACT-EJEMPLO/main/src/data/Users.json"
    );
    const json = await response.json();
    setUsers(json);
  };

  useEffect(() => {
    console.log("Se ejecuta el useEffect");
    getUsers();
  }, []);

  return (
    <View style={styles.container}>
      <UserList items={users} navigation={navigation} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
