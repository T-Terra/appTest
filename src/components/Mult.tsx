import React from "react";
import { Text } from "react-native";

export default () => {
    return <Text>Comp #Oficial</Text>
}

// para export sem default o nome da função importa
export function Comp2() {
    return <Text>Comp #2</Text>
}

export function Comp3() {
    return <Text>Comp #3</Text>
}