import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  Button,
  RefreshControl,
  SafeAreaView,
  ScrollView,
} from "react-native";

const ParkDashboardIn = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);

    // fetch or update data here
    setTimeout(() => {
      // setData(`updated data at ${new Date().toLocaleTimeString()}`);
      setRefreshing(false);
    }, 2000);
  };

  const handleIsExit = () => {
    // If leave detected, navigate to dashboard page screen
    navigation.goBack("Park-Out");
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
        paddingTop: 30,
      }}
    >
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: "10%",
            paddingBottom: 30,
          }}
        >
          <Text style={{ fontSize: 20 }}>Kendaraan kamu</Text>
          <Text style={{ fontSize: 20, color: "green", fontWeight: 900 }}>
            {" "}
            TELAH{" "}
          </Text>
          <Text style={{ fontSize: 20 }}>diparkirkan</Text>
        </View>

        <Image
          source={require("../assets/images/out-example.png")}
          style={{
            width: 360,
            height: 436.72,
            marginHorizontal: 23,
          }}
        />
        <Text
          style={{
            fontSize: 18,
            fontWeight: 600,
            color: "black",
            paddingTop: 30,
            paddingLeft: 23,
          }}
        >
          Rekomendasi keluar lokasi parkir:
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 400,
            color: "black",
            paddingLeft: 23,
          }}
        >
          1. Maju ke depan sejauh 1 meter.{"\n"}
          2. Belok ke kanan.{"\n"}
          3. Maju ke depan sejauh 4 meter.{"\n"}
          4. Sudah sampai pintu keluar
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: "10%",
            paddingTop: 20,
          }}
        >
          <Text style={{ fontSize: 20 }}>Kamu</Text>
          <Text style={{ fontSize: 20, color: "green", fontWeight: 900 }}>
            {" "}
            SUDAH{" "}
          </Text>
          <Text style={{ fontSize: 20 }}>parkir dengan</Text>
          <Text style={{ fontSize: 20, color: "#003565", fontWeight: 900 }}>
            {" "}
            RAPI
          </Text>
        </View>

        <View
          style={{
            columnGap: 15,
            flexDirection: "row",
            paddingTop: 20,
            paddingLeft: 23,
          }}
        >
          <Image
            source={require("../assets/images/CCTV_logo.png")}
            style={{ width: 50, height: 50 }}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: 600,
              paddingVertical: 13,
              color: "black",
            }}
          >
            Monitoring parkir via CCTV.
          </Text>
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: "column",
          paddingHorizontal: "15%",
          paddingTop: 8,
          paddingBottom: 20,
        }}
      >
        <Button title="tidak parkir" color="red" onPress={handleIsExit} />
      </View>
    </SafeAreaView>
  );
};

export default ParkDashboardIn;

const style = StyleSheet.create({});
