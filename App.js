import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import Screen01 from "./src/screen/Screen01";
import Screen02 from "./src/screen/Screen02";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import 'react-native-gesture-handler'; // Import bắt buộc
import { GestureHandlerRootView } from 'react-native-gesture-handler';
const Stack = createNativeStackNavigator();

export default function App() {
  return (

    // <SafeAreaView style={styles.container}>
    //   <StatusBar style="auto" />
    //   <Screen02 />
    // </SafeAreaView>
    // <Stack.Navigator initialRouteName="Order">
    //   <Stack.Screen name="Order" component={Screen01} />
    //   <Stack.Screen name="Details" component={Screen02} />
    // </Stack.Navigator>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="Order" component={Screen01} options={{ headerShown: false }} />
          <Stack.Screen name="Details" component={Screen02} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
