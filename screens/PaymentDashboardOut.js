import React from "react";
import { View, Text, Button } from "react-native";

const PaymentDashboardOut = ({ navigation }) => {
  const handleIsClicked = () => {
    // If enter detected, navigate to dashboard page 2 screen
    navigation.navigate("PaymentHistory");
  };

  const handleIsEntered = () => {
    // If enter detected, navigate to dashboard page 2 screen
    navigation.navigate("Payment-In");
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        paddingTop: 310,
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

      <View
        style={{
          flexDirection: "column",
          paddingHorizontal: "15%",
          paddingTop: 302,
        }}
      >
        <Button title="enter" color="green" onPress={handleIsEntered} />
      </View>
    </View>
  );
};

export default PaymentDashboardOut;
