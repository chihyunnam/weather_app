import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const weatherOptions = {
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0","#D39D38"],
        Title: "Haze",
        subTitle: "Just don't go outside"
    },
    Thunderstorm: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0","#D39D38"],
        Title: "Thunderstorm",
        subTitle: "Just don't go outside"
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#89F7FE","#66A6FF"],
        Title: "Drizzle",
        subTitle: "Just don't go outside"
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#00c6FB","#005BEA"],
        Title: "Rain",
        subTitle: "Take umbrella"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC","#B9B6E5"],
        Title: "Snow",
        subTitle: "Just don't go outside"
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89F7FE","#66A6FF"],
        Title: "Atmosphere",
        subTitle: "Just don't go outside"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FEF253","#FF7300"],
        Title: "Clear",
        subTitle: "Just go outside"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC","#304352"],
        Title: "Clouds",
        subTitle: "Just don't go outside"
    },
    Dust: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0","#D39D38"],
        Title: "Dust",
        subTitle: "Just don't go outside"
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ["4DA0B0","#D39D38"],
        Title: "Mist",
        subTitle: "Just don't go outside"
    }
};

export default function Weather({temp, condition}){
    return (
        <LinearGradient
            colors={weatherOptions[condtion].grardient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfcontainer}>
            <MaterialCommunityIcons
                size={96}
                name={weatherOptions[condtion].iconName}
                color="white"/>
            <Text style={styles.temp}> {temp} </Text>
            </View>
            <View style={{...styles.halfcontainer, ...styles.textContainer}}>
                <Text style={styles.Title}>{weatherOptions[condition].Title}</Text>
                <Text style={styles.subTitle}>{weatherOptions[condition].subTitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Dust",
        "Haze",
        "Mist"
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"

    },
    temp:{
        fontSize: 42,
        color: "white"
    },
    halfcontainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    Title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subTitle: {
        fontWeight: "600",
        color: "white",
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
});