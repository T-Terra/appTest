import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from "./Quadrado";

export default props => {
    return (
        <View style={style.Flexv2}>
            <Quadrado color="#7b68ee"/>
            <Quadrado color="#9acd32"/>
            <Quadrado color="#000080"/>
            <Quadrado color="#ff6347"/>
        </View>
    )
}

const style = StyleSheet.create({
    Flexv2: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'flex-end',
        backgroundColor: '#000',
    }
})