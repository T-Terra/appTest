import React from 'react'
import { Text, Platform } from 'react-native'
import StyleFont from './Estilo'

export default _ => {
    if(Platform.OS === "android") {
        return <Text style={StyleFont.BigFont}>Android</Text>
    } else if (Platform.OS === "ios") {
        return <Text style={StyleFont.BigFont}>IOS</Text>
    } else {
        return <Text style={StyleFont.BigFont}>Outra Plataforma {Platform.OS}</Text>
    }
}