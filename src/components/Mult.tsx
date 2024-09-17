import React from "react";
import { Text } from "react-native";
import StyleFont from "./Estilo"

export default () => {
    return <Text style={StyleFont.BigFont}>Comp #Oficial</Text>
}

// para export sem default o nome da função importa
export function Comp2() {
    return <Text style={StyleFont.MiddleFont}>Comp #2</Text>
}

export function Comp3() {
    return <Text style={StyleFont.SmallFont}>Comp #3</Text>
}