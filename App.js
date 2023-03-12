import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  SplashScreen,
  LoginScreen,
  DashboardPage,
  DashboardPage2,
  ParkDashboard,
  PaymentDashboard,
  PaymentHistory,
} from "./screens";

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="SplashScreen" component={SplashScreen} />
        <Tab.Screen name="LoginPage" component={LoginScreen} />
        <Tab.Screen name="DashboardPage" component={DashboardPage} />
        <Tab.Screen name="DashboardPage2" component={DashboardPage2} />
        <Tab.Screen name="ParkDashboard" component={ParkDashboard} />
        <Tab.Screen name="PaymentDashboard" component={PaymentDashboard} />
        <Tab.Screen name="PaymentHistory" component={PaymentHistory} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
});
