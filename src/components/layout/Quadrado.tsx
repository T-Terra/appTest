import React from 'react'
import { Text, View } from 'react-native'
import StyleFont from '../Estilo'

export default props => {
    const lado = 50
    return (
        <View style={{
                height: lado,
                width: lado,
                backgroundColor: props.color || '#000'
            }}            
        />
    )
}