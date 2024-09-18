import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

function Screen01() {
  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: 20,
          flex: 40,
          width: "100%",

          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../../assets/vs_blue.png")}
          style={{ width: 300, height: 360 }}
        />{" "}
        <Text style={{ fontSize: 20, color: "black" }}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng{" "}
        </Text>{" "}
      </View>{" "}
      <View
        style={{
          flex: 60,
          width: "100%",
          alignItems: "space-between",
        }}
      >
        <View
          style={{
            flex: 50,
            marginTop: 15,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flex: 10,
              marginTop: 15,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row", gap: 2 }}>
              <Image
                source={require("../../assets/star.png")}
                style={{ width: 25, height: 25 }}
              />{" "}
              <Image
                source={require("../../assets/star.png")}
                style={{ width: 25, height: 25 }}
              />{" "}
              <Image
                source={require("../../assets/star.png")}
                style={{ width: 25, height: 25 }}
              />{" "}
              <Image
                source={require("../../assets/star.png")}
                style={{ width: 25, height: 25 }}
              />{" "}
              <Image
                source={require("../../assets/star.png")}
                style={{ width: 25, height: 25 }}
              />{" "}
            </View>{" "}
            <Text style={{ fontSize: 20, color: "black" }}>
              (Xem 828 đánh giá){" "}
            </Text>{" "}
          </View>{" "}
          <View
            style={{
              flex: 10,
              marginTop: 15,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          ></View>{" "}
        </View>{" "}
        <View
          style={{
            flex: 50,
            marginTop: 15,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 25, color: "black", fontWeight: "bold" }}>
            {" "}
            1.790 .000 đ{" "}
          </Text>{" "}
          <Text
            style={{
              fontSize: 20,
              color: "gray",
              textDecorationLine: "line-through",
            }}
          >
            1.790 .000 đ{" "}
          </Text>{" "}
        </View>{" "}
      </View>{" "}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 100,
    width: "100%",

    alignItems: "center",
    justifyContent: "center",
  },
});
export default Screen01;
