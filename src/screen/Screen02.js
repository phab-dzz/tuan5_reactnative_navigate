import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable, Alert } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
function Screen02() {
    const navigation = useNavigation();
    const [isVisible, setIsVisible] = useState(true);
    const [selectedColor, setSelectedColor] = useState({
        color: 'xanh',
        image: require('../../assets/vs_blue.png'),
        price: '1.790.000 đ',
        backgroundColor: '#234896'
    });
    const handleDone = () => {

        navigation.navigate('Order', {
            image: selectedColor.image,
            color: selectedColor.color,
            price: selectedColor.price,
        });
    };
    const colors = [
        { color: 'trắng', backgroundColor: '#C5F1FB', image: require('../../assets/vs_silver.png'), price: '1.780.000 đ' },
        { color: 'đỏ', backgroundColor: '#F30D0D', image: require('../../assets/vs_red.png'), price: '1.800.000 đ' },
        { color: 'đen', backgroundColor: '#000000', image: require('../../assets/vs_black.png'), price: '1.770.000 đ' },

        { color: 'xanh', backgroundColor: '#234896', image: require('../../assets/vs_blue.png'), price: '1.790.000 đ' },
    ];
    const handleColorChange = (color) => {
        setSelectedColor(color);
    };
    return (

        <View style={styles.container}>
            <View style={styles.containerheader}>
                <Image
                    source={selectedColor.image}
                    style={{ width: 110, height: 130, }}
                />
                <View style={{ flex: 1, height: 130, marginLeft: 10 }}>
                    <Text style={{ fontSize: 18, color: "black", fontWeight: 'bold' }}>
                        Điện Thoại Vsmart Joy 3{'\n'}Hàng chính hãng
                    </Text>
                    {isVisible && (
                        <View style={{ flex: 1, gap: 3, fontSize: 'black' }}>
                            <Text>
                                Màu:{selectedColor.color}
                            </Text>
                            <Text>
                                Cung cấp bởi Tiki Tradding
                            </Text>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                {selectedColor.price}
                            </Text>

                        </View>

                    )}


                </View>

            </View>
            <View style={styles.containerbody}>
                <Text style={{ fontSize: 18, color: "black", marginLeft: 10, fontWeight: 'bold' }}>Chọn một màu bên dưới:</Text>
                <View style={styles.box}>
                    {/* <Pressable onPress={() => setIsVisible(!isVisible)}
                        style={{ width: 85, height: 85, backgroundColor: '#C5F1FB', }}
                    >
                    </Pressable>
                    <Pressable onPress={() => setIsVisible(!isVisible)}
                        style={{ width: 85, height: 85, backgroundColor: '#F30D0D', }}
                    >
                    </Pressable>
                    <Pressable onPress={() => setIsVisible(!isVisible)}
                        style={{ width: 85, height: 85, backgroundColor: '#000000', }}
                    >
                    </Pressable>
                    <Pressable onPress={() => setIsVisible(!isVisible)}
                        style={{ width: 85, height: 85, backgroundColor: '#234896', }}
                    >
                    </Pressable> */}
                    {colors.map((item, index) => (
                        <Pressable
                            key={index}
                            style={[styles.colorBlock, { backgroundColor: item.backgroundColor }]}
                            onPress={() => handleColorChange(item)}
                        />
                    ))}

                </View>
                <View style={styles.button}>
                    <Pressable style={styles.buttom_custom}
                        onPress={handleDone}
                    >
                        <Text style={{ fontSize: 22, color: "#fff", fontWeight: 'bold' }}>XONG</Text>
                    </Pressable>
                </View>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 100,
        width: "100%",
    },
    containerheader: {
        flex: 25,
        width: "100%",
        alignItems: "center",
        marginLeft: 10,
        flexDirection: "row",

    },
    containerbody: {
        flex: 75,
        width: "100%",

        backgroundColor: '#C4C4C4',
    },
    box: {
        flex: 70,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',

        gap: 10,
        // backgroundColor: 'red'
    },
    button: {
        flex: 20,
        width: "100%",

        justifyContent: 'center',
        alignItems: 'center',


    },
    buttom_custom: {
        backgroundColor: '#1952E294', height: 50, borderColor: 'red', borderWidth: 1, width: '90%', justifyContent: 'center', alignItems: 'center', borderRadius: 10
    },
    colorBlock: {
        width: 85,
        height: 85,
        borderRadius: 10,
    },
});

export default Screen02;