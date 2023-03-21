import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import moment from "moment";

const PaymentDashboardIn = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [current, setCurrent] = useState("");

  //   const handleIsEntered = () => {
  //     // If enter detected, navigate to dashboard page 2 screen
  //     navigation.navigate("DashboardPageIn");
  //   };

  useEffect(() => {
    var date = moment()
      .utcOffset("+07:00")
      .format("dddd, DD MMMM YYYY | hh:mm:ss A");

    setCurrentDate(date);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        paddingTop: 30,
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
        <Text style={{ fontSize: 20, color: "green", fontWeight: 900 }}>
          {" "}
          TELAH{" "}
        </Text>
        <Text style={{ fontSize: 20 }}>masuk kawasan parkir</Text>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "column",
          paddingLeft: 30,
          paddingTop: 40,
        }}
      >
        <Text style={{ fontWeight: 900, fontSize: 20 }}>
          Informasi User Parkir
        </Text>
        <Text style={{ fontWeight: 900, fontSize: 17, color: "green" }}>
          {currentDate}
        </Text>
        <Text style={{ paddingTop: 25, paddingBottom: 45, fontSize: 16 }}>
          Plat Kendaraan
        </Text>
        <Text style={{ paddingBottom: 46, fontSize: 16 }}>Waktu Masuk</Text>
        <Text style={{ paddingBottom: 46, fontSize: 16 }}>Lokasi Parkir</Text>
        <Text style={{ paddingBottom: 70, fontSize: 16, fontWeight: 900 }}>
          Tagihan Parkir
        </Text>
        <Text style={{ fontSize: 16 }}>
          Pilihan Metode Pembayaran (default)
        </Text>

        <View style={{ marginTop: 20 }}>
          <RadioButtonGroup
            containerStyle={{ marginBottom: 20 }}
            selected={current}
            onSelected={(value) => setCurrent(value)}
            radioBackground="#003565"
          >
            <RadioButtonItem
              value="E-wallet"
              label={
                <Text
                  style={{ marginBottom: 15, marginLeft: 15, fontSize: 16 }}
                >
                  E-wallet
                </Text>
              }
              style={{ marginBottom: 15 }}
            />
            <RadioButtonItem
              value="Cash"
              label={<Text style={{ marginLeft: 15, fontSize: 16 }}>Cash</Text>}
            />
          </RadioButtonGroup>
        </View>

        <View
          style={{
            flexDirection: "row",
            textAlign: "center",
            paddingTop: 30,
          }}
        >
          <Text style={{ fontSize: 17 }}>Tunjukkan</Text>
          <Text style={{ fontSize: 17, color: "#003565", fontWeight: 900 }}>
            {" "}
            bukti bayar{" "}
          </Text>
          <Text style={{ fontSize: 17 }}>pada petugas parkir !</Text>
        </View>
      </View>

      {/* <View
        style={{
          flex: 0.1,
          flexDirection: "column",
          paddingHorizontal: "15%",
          paddingTop: 50,
        }}
      >
        <Button title="enter" color="green" onPress={handleIsEntered} />
      </View> */}
    </View>

    // <NavigationContainer>
    //   <Tab.Navigator>
    //     <Tab.Screen name="outside park area" component={DashboardPage} />
    //     <Tab.Screen name="inside park area" component={DashboardPage2} />
    //   </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default PaymentDashboardIn;
