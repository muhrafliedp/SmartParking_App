import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  Button,
  ScrollView,
  FlatList,
} from "react-native";

const ParkDashboardOut = ({ navigation }) => {
  const handleIsEntered = () => {
    // If enter detected, navigate to dashboard page 2 screen
    navigation.navigate("Park-In");
  };

  // const [parkMap, setParkMap] = useState([]);

  // useEffect(() => {
  //   fetch("http://127.0.0.1:5000/matrix")
  //     .then((response) => response.json())
  //     .then((data) => setMatrix(data))
  //     .catch(function (error) {
  //       console.log(
  //         "There has been a problem with your fetch operation: " + error.message
  //       );
  //     });
  // }, []);

  // const [matrix, setMatrix] = useState([]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => console.log(response))
  //     // .then((data) => setMatrix(data))
  //     .catch(function (error) {
  //       console.log("There has been a problem with your fetch operation: ");
  //     });
  // }, []);

  // const renderCell = ({ item }) => (
  //   <Text>
  //     {item.map((value, index) => (
  //       <Text key={index}>{value}</Text>
  //     ))}
  //   </Text>
  // );

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        paddingTop: 30,
      }}
    >
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: "10%",
            paddingBottom: 30,
          }}
        >
          <Text style={{ fontSize: 20 }}>Kamu</Text>
          <Text style={{ fontSize: 20, color: "red", fontWeight: 900 }}>
            {" "}
            BELUM{" "}
          </Text>
          <Text style={{ fontSize: 20 }}>masuk kawasan parkir</Text>
        </View>

        {/* <FlatList
          data={matrix}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderCell}
        />
        <Text>{JSON.stringify(matrix)}</Text> */}

        <Image
          source={require("../assets/images/parkMap.png")}
          style={{
            width: 360,
            height: 409,
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
          Rekomendasi lokasi parkir terdekat:
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 400,
            color: "black",
            paddingLeft: 23,
          }}
        >
          ...
        </Text>

        <View
          style={{
            columnGap: 15,
            flexDirection: "row",
            paddingTop: 110,
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
        <Button title="enter" color="green" onPress={handleIsEntered} />
      </View>
    </View>
  );
};

export default ParkDashboardOut;

const style = StyleSheet.create({});
