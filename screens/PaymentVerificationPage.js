import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const PaymentVerificationPage = ({ navigation }) => {
  const handleIsClicked = () => {
    navigation.navigate("PaymentHistory");
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewTopText}>
        <Text style={{ fontSize: 30 }}>Pembayaran telah</Text>
        <Text style={styles.textTopText}> terverifikasi </Text>
      </View>

      <View style={styles.viewButton}>
        <Button title="Kembali" color="#003565" onPress={handleIsClicked} />
      </View>
    </View>
  );
};

export default PaymentVerificationPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  viewTopText: {
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: "10%",
  },
  textTopText: { fontSize: 30, color: "green", fontWeight: "bold" },
  viewButton: {
    paddingHorizontal: "15%",
    paddingTop: 300,
  },
});
