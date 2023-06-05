import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Button,
  ScrollView,
  SafeAreaView,
} from "react-native";

const ParkDashboardOut = ({ navigation }) => {
  const [gambarMap, setGambarMap] = useState("");
  const [fileDesc, setFileDesc] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://newparkingclub.000webhostapp.com/getData.php/?op=getPeta&map_type=IN&filled_slot=0"
        );
        const json = await response.json();
        setGambarMap(json.gambar_map);
        setFileDesc(json.file_text);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const gambarUri = `data:image/png;base64,${gambarMap}`;

  const handleIsEntered = () => {
    navigation.navigate("Park-In");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.viewTopText}>
          <Text style={{ fontSize: 20 }}>Kendaraan kamu</Text>
          <Text style={styles.textTopText}> BELUM </Text>
          <Text style={{ fontSize: 20 }}>diparkirkan</Text>
        </View>

        <Image source={{ uri: gambarUri }} style={styles.mapImage} />
        <Text style={styles.textPreDesc}>
          Rekomendasi lokasi parkir oleh sistem:
        </Text>
        <Text style={styles.textMapDesc}>
          {fileDesc ? fileDesc : "Loading..."}
        </Text>
      </ScrollView>

      <View style={styles.viewButton}>
        <Button title="sedang parkir" color="green" onPress={handleIsEntered} />
      </View>
    </SafeAreaView>
  );
};

export default ParkDashboardOut;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 30,
  },
  viewTopText: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "10%",
    paddingBottom: 30,
  },
  textTopText: { fontSize: 20, color: "red", fontWeight: 900 },
  mapImage: {
    width: 360,
    height: 522.2,
    marginHorizontal: 23,
  },
  textPreDesc: {
    fontSize: 18,
    fontWeight: 600,
    color: "black",
    paddingTop: 30,
    paddingLeft: 23,
  },
  textMapDesc: {
    fontSize: 18,
    fontWeight: 400,
    color: "black",
    paddingHorizontal: 23,
  },
  viewButton: {
    flexDirection: "column",
    paddingHorizontal: "15%",
    paddingTop: 10,
    paddingBottom: 20,
  },
});
