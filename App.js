import * as React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  SplashScreen,
  LoginScreen,
  PaymentHistory,
  DashboardPageOut,
  DashboardPageIn,
  ParkDashboardOut,
  PaymentDashboardOut,
  ParkDashboardIn,
  PaymentDashboardIn,
  PaymentVerificationPage,
  SignUpScreen,
} from "./screens";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#2E2E2E" },
        tabBarActiveBackgroundColor: "#003565",
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen name="DashboardPageOut" component={DashboardPageOut} />
      <Tab.Screen name="DashboardPageIn" component={DashboardPageIn} />
      <Tab.Screen name="ParkDashboardOut" component={ParkDashboardOut} />
      <Tab.Screen name="ParkDashboardIn" component={ParkDashboardIn} />
      <Tab.Screen name="PaymentDashboardOut" component={PaymentDashboardOut} />
      <Tab.Screen name="PaymentDashboardIn" component={PaymentDashboardIn} />
      <Tab.Screen name="PaymentHistory" component={PaymentHistory} />
      <Tab.Screen
        name="PaymentVerificationPage"
        component={PaymentVerificationPage}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
        }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginPage" component={LoginScreen} />
        <Stack.Screen name="SignUpPage" component={SignUpScreen} />
        <Stack.Screen name="HomeStack" component={HomeStack} />
      </Stack.Navigator>
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
