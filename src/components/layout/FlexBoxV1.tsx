import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from "./Quadrado";

export default props => {
    return (
        <View style={style.Flexv1}>
            <Quadrado color="#7b68ee"/>
            <Quadrado color="#9acd32"/>
            <Quadrado color="#000080"/>
            <Quadrado color="#ff6347"/>
        </View>
    )
}

const style = StyleSheet.create({
    Flexv1: {
        flexGrow: 1,
        justifyContent: 'space-evenly',
        backgroundColor: '#000',
    }
})