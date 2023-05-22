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
  const [descPeta, setDescPeta] = useState("");

  const componentDidMount = () => {
    getParkirData();
  };

  async function handleRefresh() {
    setRefreshing(true);

    try {
      const response = await fetch(
        "https://1parkingclub.000webhostapp.com/getData.php/?op=getTextPeta&map_type=OUT"
      );
      const json = await response.json();
      const descPeta = json.file_text;
      setDescPeta(descPeta);
    } catch (error) {
      console.log(error);
    }

    setRefreshing(false);
  }

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
          {descPeta ? descPeta : "Loading..."}
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

        {/* <View
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
        </View> */}
      </ScrollView>
      <View
        style={{
          flexDirection: "column",
          paddingHorizontal: "15%",
          paddingTop: 10,
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
