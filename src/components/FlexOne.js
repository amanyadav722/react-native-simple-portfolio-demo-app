import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: "blue",
        flex: 1,
        alignItems: "top",
        justifyContent: "center",
        // flexDirection: "row",
    },
    square: {
        backgroundColor: "red",
        width: 150,
        height: 150,
        margin: 30,
    },
    Wrapper1: {
        flex: 1,
        alignItems: "top",
        justifyContent: "center",
        flexDirection: "row",
    },
    Wrapper2: {
        flex: 2,
        alignItems: "top",
        justifyContent: "center",
        flexDirection: "row",
    },
    long1: {
        backgroundColor: "red",
        width: 350,
        height: 650,
        // margin: 3,
    },
    long2: {
        backgroundColor: "green",
        width: 350,
        height: 650,
        // margin: 3,
    },
    img: {
        width: 150,
        height: 150,
        margin: 30,
        borderRadius: 10,
    },
    txt: {
        width: 150,
        height: 150,
        margin: 30,
        borderWidth: 5,
        borderRadius: 4,
        color: "white",
        textAlign: "center",
    },
});

const FlexOne = () => {
    return (
        <View style={styles.container}>
            <View style={styles.Wrapper1} >
                <Image
                    style={styles.img}
                    source={require('../assets/nature.png')}
                />
                <Text style={styles.txt}>MON TEXT</Text>
            </View>
            <View style={styles.Wrapper2} >
                <View style={styles.long1} />
                <View style={styles.long2} />
            </View>
        </View>
    );
};

export default FlexOne;