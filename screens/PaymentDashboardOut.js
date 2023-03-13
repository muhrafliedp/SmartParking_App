import React from "react";
import { View, Text, Button } from "react-native";

const PaymentDashboardOut = ({ navigation }) => {
  const handleIsClicked = () => {
    // If enter detected, navigate to dashboard page 2 screen
    navigation.navigate("PaymentHistory");
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: "10%",
        }}
      >
        <Text style={{ fontSize: 20 }}>Kamu</Text>
        <Text style={{ fontSize: 20, color: "red", fontWeight: 900 }}>
          {" "}
          BELUM{" "}
        </Text>
        <Text style={{ fontSize: 20 }}>masuk kawasan parkir</Text>
      </View>

      <View
        style={{
          flex: 0.1,
          flexDirection: "column",
          paddingHorizontal: "15%",
          paddingTop: 50,
        }}
      >
        <Button
          title="Riwayat Pembayaran"
          color="#003565"
          onPress={handleIsClicked}
        />
      </View>
    </View>

    // <NavigationContainer>
    //   <Tab.Navigator>
    //     <Tab.Screen name="outside park area" component={DashboardPage} />
    //     <Tab.Screen name="inside park area" component={DashboardPage2} />
    //   </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default PaymentDashboardOut;
