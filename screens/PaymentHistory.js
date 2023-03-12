import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Button } from "react-native";
import { Table, TableWrapper, Row } from "react-native-table-component";

export default class PaymentHistory extends Component {
  constructor({ props, navigation }) {
    super(props);
    handleIsClicked = () => {
      // If enter detected, navigate to dashboard page 2 screen
      navigation.goBack("PaymentDashboard");
    };
    this.state = {
      HeadTable: ["Tanggal", "Masuk", "Keluar", "Plat", "Bill (Rp)"],
      widthArr: [80, 65, 65, 95, 70],
      DataTable: [
        ["12-03-2023", "12:23:23", "16:23:23", "AA XXXX BCD", 2000],
        ["12-03-2023", "12:23:23", "16:23:23", "AA XXXX BCD", 2000],
        ["12-03-2023", "12:23:23", "16:23:23", "AA XXXX BCD", 2000],
        ["12-03-2023", "12:23:23", "16:23:23", "AA XXXX BCD", 2000],
        ["12-03-2023", "12:23:23", "16:23:23", "AA XXXX BCD", 2000],
        ["12-03-2023", "12:23:23", "16:23:23", "AA XXXX BCD", 2000],
        ["12-03-2023", "12:23:23", "16:23:23", "AA XXXX BCD", 2000],
        ["12-03-2023", "12:23:23", "16:23:23", "AA XXXX BCD", 2000],
        ["12-03-2023", "12:23:23", "16:23:23", "AA XXXX BCD", 2000],
        ["12-03-2023", "12:23:23", "16:23:23", "AA XXXX BCD", 2000],
        ["12-03-2023", "12:23:23", "16:23:23", "AA XXXX BCD", 2000],
        ["12-03-2023", "12:23:23", "16:23:23", "AA XXXX BCD", 2000],
        ["12-03-2023", "12:23:23", "16:23:23", "AA XXXX BCD", 2000],
        ["12-03-2023", "12:23:23", "16:23:23", "AA XXXX BCD", 2000],
        ["12-03-2023", "12:23:23", "16:23:23", "AA XXXX BCD", 2000],
        ["12-03-2023", "12:23:23", "16:23:23", "AA XXXX BCD", 2000],
        ["12-03-2023", "12:23:23", "16:23:23", "AA XXXX BCD", 2000],
        ["12-03-2023", "12:23:23", "16:23:23", "AA XXXX BCD", 2000],
        ["12-03-2023", "12:23:23", "16:23:23", "AA XXXX BCD", 2000],
        ["12-03-2023", "12:23:23", "16:23:23", "AA XXXX BCD", 2000],
        ["12-03-2023", "12:23:23", "16:23:23", "AA XXXX BCD", 2000],
        ["12-03-2023", "12:23:23", "16:23:23", "AA XXXX BCD", 2000],
        ["12-03-2023", "12:23:23", "16:23:23", "AA XXXX BCD", 2000],
        ["12-03-2023", "12:23:23", "16:23:23", "AA XXXX BCD", 2000],
        ["12-03-2023", "12:23:23", "16:23:23", "AA XXXX BCD", 2000],
        ["12-03-2023", "12:23:23", "16:23:23", "AA XXXX BCD", 2000],
        ["12-03-2023", "12:23:23", "16:23:23", "AA XXXX BCD", 2000],
        ["12-03-2023", "12:23:23", "16:23:23", "AA XXXX BCD", 2000],
        ["12-03-2023", "12:23:23", "16:23:23", "AA XXXX BCD", 2000],
      ],
    };
  }
  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{ borderColor: "#C1C0B9" }}>
              <Row
                data={state.HeadTable}
                widthArr={state.widthArr}
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
                    widthArr={state.widthArr}
                    style={[
                      styles.row,
                      index % 2 && { backgroundColor: "#ffffff" },
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
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
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
