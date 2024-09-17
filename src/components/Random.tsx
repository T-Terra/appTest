import React from "react";
import { Text } from "react-native";
import StyleFont from "./Estilo"

export default ({min, max}) => {
    const delta = max - min + 1
    const ValueRandom = Math.floor(Math.random() * delta) + min
    return (
        <Text style={StyleFont.MiddleFont}>O Valor entre {min} e {max} é: {ValueRandom}</Text>
    )
}