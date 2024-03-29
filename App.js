import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
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
  SignUpPage,
} from "./screens";

import AccountDashboard from "./screens/AccountDashboard";

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
        name="Information"
        component={InformationStack}
        options={{
          tabBarLabel: "Information",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="clipboard-clock-outline"
              color={"#003565"}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ParkDashboard"
        component={ParkDashboardStack}
        options={{
          tabBarLabel: "Parking",
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
        name="PaymentDashboard"
        component={PaymentDashboardStack}
        options={{
          tabBarLabel: "Payment",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="credit-card-check-outline"
              color={"#003565"}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AccountDashboard"
        component={AccountDashboardStack}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="clipboard-account"
              color={"#003565"}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function InformationStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Stack.Screen name="User-Out" component={DashboardPageOut} />
      <Stack.Screen name="User-In" component={DashboardPageIn} />
    </Stack.Navigator>
  );
}

function ParkDashboardStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Stack.Screen name="Park-Out" component={ParkDashboardOut} />
      <Stack.Screen name="Park-In" component={ParkDashboardIn} />
    </Stack.Navigator>
  );
}

function PaymentDashboardStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Stack.Screen name="Payment-Out" component={PaymentDashboardOut} />
      <Stack.Screen name="Payment-In" component={PaymentDashboardIn} />
      <Stack.Screen name="PaymentHistory" component={PaymentHistory} />
      <Stack.Screen
        name="PaymentVerification"
        component={PaymentVerificationPage}
      />
    </Stack.Navigator>
  );
}

function AccountDashboardStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Stack.Screen name="Account" component={AccountDashboard} />
    </Stack.Navigator>
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
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          testID="splashScreen"
        />
        <Stack.Screen
          name="LoginPage"
          component={LoginScreen}
          testID="loginPage"
        />
        <Stack.Screen
          name="SignUpPage"
          component={SignUpPage}
          testID="signUpPage"
        />
        <Stack.Screen
          name="HomeStack"
          component={HomeStack}
          testID="homeStack"
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
