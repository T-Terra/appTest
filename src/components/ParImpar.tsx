import React from 'react'
import { Text, View } from 'react-native'
import StyleFont from './Estilo'

export default ({num = 0}) => {
    return (
        <View>
            <Text style={StyleFont.MiddleFont}>O resultado é: </Text>
            {
                num % 2 === 0
                ? <Text style={StyleFont.MiddleFont}>Par</Text>
                : <Text style={StyleFont.MiddleFont}>Ímpar</Text>
            }
        </View>
    )
}