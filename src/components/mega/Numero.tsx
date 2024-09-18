import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import StyleFont from '../Estilo'

export default props => {
    return (
        <View style={style.Container}>

            <Text style={[StyleFont.MiddleFont, style.Num]}>
                {props.num}
            </Text>

        </View>
    )
}

const style = StyleSheet.create({
    Container: {
        height: 30,
        width: 30,
        backgroundColor: '#000',
        margin: 3,
        borderRadius: 15
    },
    Num: {
        color: '#FFF'
    }
})