import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import HomeScreen from "./src/screens/Home/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./src/navigation/MainNavigation";





function App() {

  return (
    <NavigationContainer>
      <MainNavigation/>
    </NavigationContainer>
  );
}


export default App;