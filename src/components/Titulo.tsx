import React from "react";
import { Text } from "react-native";
import StyleFont from "./Estilo"

export default props => {
    return (
        <>
            <Text style={StyleFont.BigFont}>
                {props.principal}
            </Text>
            <Text style={StyleFont.SmallFont}>
                {props.secundario}
            </Text>
        </>
    )
}
