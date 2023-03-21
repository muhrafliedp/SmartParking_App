import * as React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
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
const Tab = createMaterialBottomTabNavigator();

function HomeStack() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      barStyle={{ backgroundColor: "grey" }}
      activeColor="white"
      inactiveColor="#2E2E2E"
    >
      <Tab.Screen
        name="User-Out"
        component={DashboardPageOut}
        options={{
          tabBarLabel: "Inform- Out",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="update" color={"#003565"} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="User-In"
        component={DashboardPageIn}
        options={{
          tabBarLabel: "Inform- In",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="account-clock"
              color={"#003565"}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Park-Out"
        component={ParkDashboardOut}
        options={{
          tabBarLabel: "Park- Out",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="car-brake-parking"
              color={"#003565"}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Park-In"
        component={ParkDashboardIn}
        options={{
          tabBarLabel: "Park-   In",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="car-info"
              color={"#003565"}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Payment-Out"
        component={PaymentDashboardOut}
        options={{
          tabBarLabel: "Payment-Out",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="credit-card-off-outline"
              color={"#003565"}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Payment-In"
        component={PaymentDashboardIn}
        options={{
          tabBarLabel: "Payment-In",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="credit-card-clock-outline"
              color={"#003565"}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="PaymentHistory"
        component={PaymentHistory}
        options={{
          tabBarLabel: "Park-History",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="billboard"
              color={"#003565"}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="PaymentVerif"
        component={PaymentVerificationPage}
        options={{
          tabBarLabel: "Payment-Verif",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="credit-card-check-outline"
              color={"#003565"}
              size={26}
            />
          ),
        }}
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
