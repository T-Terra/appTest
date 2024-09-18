import React from 'react'
import { View, StyleSheet } from 'react-native'

export default props => {
    return (
        <View style={style.Flexv4}>
            <View style={style.V0}/>
            <View style={style.V1}/>
            <View style={style.V2}/>
        </View>
    )
}

const style = StyleSheet.create({
    Flexv4: {
        flexGrow: 1,
        width: 100,
        backgroundColor: '#000',
    },
    V0: {
        backgroundColor: '#000080',
        height: 300
    },
    V1: {
        backgroundColor: '#7b68ee',
        flexGrow: 3
    },
    V2: {
        backgroundColor: '#9acd32',
        flexGrow: 1
    }
})