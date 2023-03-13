import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  SplashScreen,
  LoginScreen,
  PaymentHistory,
  DashboardPageOut,
  DashboardPageIn,
  ParkDashboardOut,
  PaymentDashboardOut,
  ParkDashboardIn,
} from "./screens";

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="SplashScreen" component={SplashScreen} />
        <Tab.Screen name="LoginPage" component={LoginScreen} />
        <Tab.Screen name="DashboardPageOut" component={DashboardPageOut} />
        <Tab.Screen name="DashboardPageIn" component={DashboardPageIn} />
        <Tab.Screen name="ParkDashboardOut" component={ParkDashboardOut} />
        <Tab.Screen name="ParkDashboardIn" component={ParkDashboardIn} />
        <Tab.Screen
          name="PaymentDashboardOut"
          component={PaymentDashboardOut}
        />
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
