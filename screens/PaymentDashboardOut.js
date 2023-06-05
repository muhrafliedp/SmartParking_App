import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const PaymentDashboardOut = ({ navigation }) => {
  const handleIsClicked = () => {
    navigation.navigate("PaymentHistory");
  };

  const handleIsEntered = () => {
    navigation.navigate("Payment-In");
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewTopText}>
        <Text style={{ fontSize: 20 }}>Kamu</Text>
        <Text style={styles.textTopText}> BELUM </Text>
        <Text style={{ fontSize: 20 }}>sampai gerbang parkir</Text>
      </View>

      <View style={styles.viewHistoryButton}>
        <Button
          title="Riwayat Pembayaran"
          color="#003565"
          onPress={handleIsClicked}
        />
      </View>

      <View style={styles.viewCheckoutButton}>
        <Button title="checkout" color="green" onPress={handleIsEntered} />
      </View>
    </View>
  );
};

export default PaymentDashboardOut;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 330,
  },
  viewTopText: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "10%",
  },
  textTopText: { fontSize: 20, color: "red", fontWeight: 900 },
  viewHistoryButton: {
    flexDirection: "column",
    paddingHorizontal: "15%",
    paddingTop: 50,
  },
  viewCheckoutButton: {
    flexDirection: "column",
    paddingHorizontal: "15%",
    paddingTop: 282,
  },
});
