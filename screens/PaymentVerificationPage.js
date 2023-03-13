import React from "react";
import { View, Text, Button } from "react-native";

const PaymentVerificationPage = ({ navigation }) => {
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
          flexDirection: "column",
          alignItems: "center",
          paddingHorizontal: "10%",
        }}
      >
        <Text style={{ fontSize: 30 }}>Pembayaran telah</Text>
        <Text style={{ fontSize: 30, color: "green", fontWeight: "bold" }}>
          {" "}
          terverifikasi{" "}
        </Text>
      </View>

      <View
        style={{
          paddingHorizontal: "15%",
          paddingTop: 300,
        }}
      >
        <Button title="Kembali" color="#003565" onPress={handleIsClicked} />
      </View>
    </View>
  );
};

export default PaymentVerificationPage;
