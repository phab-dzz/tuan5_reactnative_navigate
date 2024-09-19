import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

function Screen01({ route }) {
  const showAlert = () => {
    Alert.alert(
      'Thông báo',
      'Đã thêm giỏ hàng thành công!!',
      [
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
        },
        {
          text: 'Hủy',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      { cancelable: false }
    );
  };
  const { image, color, price } = route.params || {};
  const defaultImage = {
    Image: require('../../assets/vs_blue.png'),
    price: '1.790.000 đ',

  }


  const stars = Array(5).fill(0);
  const navigation = useNavigation();

  const goToDetails = () => {
    navigation.navigate('Details');
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 60,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={image || defaultImage.Image}
          style={{ width: 300, height: 360, }}
        />
        <Text style={{ fontSize: 20, color: "black" }}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng{" "}
        </Text>
      </View>
      <View
        style={{
          flex: 40,
          width: "100%",
        }}
      >
        <View
          style={{
            flex: 50,
            width: "100%",
          }}
        >
          <View
            style={{
              flex: 5,
              flexDirection: "row",
              alignItems: "center",
              gap: 10

            }}
          >
            <View style={{ flexDirection: "row", marginLeft: 10, }}>
              {stars.map((_, index) => (
                <Image
                  key={index}
                  source={require("../../assets/star.png")}
                  style={{ width: 25, height: 25, }}
                />))}

            </View>
            <Text style={{ fontSize: 18, color: "black", fontWeight: 'bold' }}>
              (Xem 828 đánh giá){" "}
            </Text>
          </View>
          <View
            style={{
              flex: 5,
              flexDirection: "row",
              marginLeft: 15,
              alignItems: "center",

              gap: 10
            }}
          >
            <Text style={{ fontSize: 22, color: "black", fontWeight: "bold" }}>

              {price || defaultImage.price}
            </Text>
            <Text
              style={styles.price}
            >
              1.790 .000 đ
            </Text>

          </View>
          <View style={{ flexDirection: 'row', marginLeft: 10, gap: 5, alignItems: 'center' }}>
            <Text style={{ fontSize: 18, color: "red", fontWeight: "bold" }}>  Ở ĐÂU RẺ HƠN HOÀN TIỀN </Text>
            <Ionicons name="help-circle" size={24} color="black" />
          </View>

        </View>
        <View
          style={{
            flex: 80,
            justifyContent: 'space-between',

          }}
        >
          <View style={{ flex: 40, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity
              style={styles.button_color}
              onPress={goToDetails}
            >
              <Text style={{ fontSize: 20, width: '95%', textAlign: 'center' }}>4 MÀU-CHỌN MÀU</Text>
              <FontAwesome name="chevron-right" size={16} color="black" style={{}} />

            </TouchableOpacity>
          </View>
          <View style={{ flex: 60, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity
              style={styles.button_submit}
              onPress={showAlert}

            >
              <Text style={{ fontSize: 25, width: '95%', textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>CHỌN MUA</Text>

            </TouchableOpacity>
          </View>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 100,
    width: "100%",
    overflow: 'hidden',
    alignItems: "center",
    justifyContent: "center",
  },
  price: {
    fontSize: 18,
    color: "gray",
    textDecorationLine: "line-through",
    marginLeft: 10,
  },
  button_color: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    borderColor: 'black',
  },
  button_submit: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    backgroundColor: 'red',
    alignItems: 'center',
    flexDirection: 'row',
  }

});
export default Screen01;
