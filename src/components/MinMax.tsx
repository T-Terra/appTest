import React from "react";
import { Text } from "react-native";
import StyleFont from "./Estilo"

export default props => (
    <Text style={StyleFont.MiddleFont}>
        O valor {props.max} é maior que o valor {props.min}!
    </Text>
)