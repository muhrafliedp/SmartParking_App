import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  Button,
  ScrollView,
  RefreshControl,
  SafeAreaView,
} from "react-native";

const ParkDashboardOut = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [descPeta, setDescPeta] = useState("");

  const componentDidMount = () => {
    getParkirData();
  };

  async function handleRefresh() {
    setRefreshing(true);

    try {
      const response = await fetch(
        "https://1parkingclub.000webhostapp.com/getData.php/?op=getTextPeta&map_type=IN"
      );
      const json = await response.json();
      const descPeta = json.file_text;
      setDescPeta(descPeta);
    } catch (error) {
      console.log(error);
    }

    setRefreshing(false);
  }

  const handleIsEntered = () => {
    // If enter detected, navigate to dashboard page 2 screen
    navigation.navigate("Park-In");
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
          <Text style={{ fontSize: 20, color: "red", fontWeight: 900 }}>
            {" "}
            BELUM{" "}
          </Text>
          <Text style={{ fontSize: 20 }}>diparkirkan</Text>
        </View>

        {/* <FlatList
          data={matrix}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderCell}
        />
        <Text>{JSON.stringify(matrix)}</Text> */}

        <Image
          source={require("../assets/images/in-example.png")}
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
          Rekomendasi lokasi parkir oleh sistem:
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
          {/* 1. Maju ke depan sejauh 4 meter.{"\n"}
          2. Belok ke kiri.{"\n"}
          3. Maju ke depan sejauh 2 meter.{"\n"}
          4. Belok ke kanan.{"\n"}
          5. Maju ke depan sejauh 1 meter.{"\n"}
          6. Slot parkir ada di sebelah kiri. */}
        </Text>

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
          paddingTop: 38,
          paddingBottom: 20,
        }}
      >
        <Button title="sedang parkir" color="green" onPress={handleIsEntered} />
      </View>
    </SafeAreaView>
  );
};

export default ParkDashboardOut;

const style = StyleSheet.create({});
