import React from 'react'
import { Text } from 'react-native'
import StyleFont from './../Estilo'

export default props => {
    return (
        <>
            <Text style={StyleFont.MiddleFont}>{props.a}</Text>
            <Text style={StyleFont.MiddleFont}>{props.b}</Text>
        </>
    )
}