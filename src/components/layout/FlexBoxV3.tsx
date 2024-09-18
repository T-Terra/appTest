import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from "./Quadrado";

export default props => {
    return (
        <View style={style.Flexv3}>
            <Quadrado color="#7b68ee"/>
            <Quadrado color="#9acd32"/>
            <Quadrado color="#000080"/>
            <Quadrado color="#ff6347"/>
        </View>
    )
}

const style = StyleSheet.create({
    Flexv3: {
        flexDirection: "row",
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 350,
        width: '100%',
        backgroundColor: '#000',
    }
})