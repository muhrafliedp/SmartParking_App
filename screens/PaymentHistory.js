import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Button,
  RefreshControl,
  SafeAreaView,
} from "react-native";
import { Table, Row } from "react-native-table-component";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class PaymentHistory extends Component {
  constructor({ props, navigation }) {
    super(props);

    handleIsClicked = () => {
      navigation.navigate("Payment-Out");
    };

    this.state = {
      HeadTable: [
        "Waktu Masuk",
        "Waktu Keluar",
        "Plat",
        "Tempat Parkir",
        "Bill (Rp)",
      ],
      widthArr: [100, 100, 95, 100, 70],
      DataTable: [],
      refreshing: false,
      vehicleNumber: "",
    };
  }

  componentDidMount() {
    this.getDataParking();
  }

  async getDataParking() {
    const userInfoString = await AsyncStorage.getItem("userInfo");
    if (userInfoString !== null) {
      const userInfo = JSON.parse(userInfoString);
      this.setState({ vehicleNumber: userInfo.vehicleNumber });
    }
    fetch(
      "https://newparkingclub.000webhostapp.com/getData.php?op=getAllRiwayatParkir&vehicle_number=" +
        this.state.vehicleNumber
    )
      .then((response) => response.json())
      .then((json) => {
        this.setState({ DataTable: json.map((row) => Object.values(row)) });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onRefresh() {
    this.setState({ refreshing: true });
    this.getDataParking();
    this.setState({ refreshing: false });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          horizontal={true}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => this.onRefresh()}
            />
          }
        >
          <View>
            <Table borderStyle={{ borderColor: "#C1C0B9" }}>
              <Row
                data={this.state.HeadTable}
                widthArr={this.state.widthArr}
                style={styles.head}
                textStyle={styles.textHead}
              />
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{ borderColor: "#C1C0B9" }}>
                {this.state.DataTable.map((dataRow, index) => (
                  <Row
                    key={index}
                    data={dataRow}
                    widthArr={this.state.widthArr}
                    style={[
                      styles.row,
                      index % 2 === 1 && { backgroundColor: "#ffffff" },
                    ]}
                    textStyle={styles.text}
                  />
                ))}
              </Table>
            </ScrollView>
          </View>
        </ScrollView>

        <View
          style={{
            paddingHorizontal: "15%",
            paddingTop: 10,
          }}
        >
          <Button title="kembali" color="#003565" onPress={handleIsClicked} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 50,
    backgroundColor: "#ffffff",
  },
  head: {
    height: 50,
    backgroundColor: "#003565",
  },
  text: {
    textAlign: "center",
    fontWeight: "400",
  },
  textHead: {
    textAlign: "center",
    fontWeight: "700",
    color: "white",
  },
  dataWrapper: {
    marginTop: -1,
  },
  row: {
    height: 40,
    backgroundColor: "#F7F8FA",
  },
});
