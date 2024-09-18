import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import StyleFont from './../Estilo'

export default props => {
    return (
        <View style={style.Display}>
            <Text style={[StyleFont.MiddleFont, style.DisplayText]}>
                {props.num}
            </Text>
        </View> 
    )
}

const style = StyleSheet.create({
    Display: {
        backgroundColor: '#000',
        padding: 15,
        width: 300
    },
    DisplayText: {
        color: '#FFF'
    }
})