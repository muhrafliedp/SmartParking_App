import React from "react";
import { View, Text, Button } from "react-native";

const PaymentDashboardOut = ({ navigation }) => {
  const handleIsClicked = () => {
    navigation.navigate("PaymentHistory");
  };

  const handleIsEntered = () => {
    navigation.navigate("Payment-In");
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        paddingTop: 330,
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
          paddingTop: 282,
        }}
      >
        <Button title="enter" color="green" onPress={handleIsEntered} />
      </View>
    </View>
  );
};

export default PaymentDashboardOut;
