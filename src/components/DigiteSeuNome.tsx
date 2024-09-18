import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import StyleFont from './Estilo'

export default props => {
    const [nome, setNome] = useState('Teste')

    return (
        <View>
            <Text style={StyleFont.MiddleFont}>{nome}</Text>
            <TextInput
                placeholder='Digite seu Nome'
                value={nome}
                onChangeText={nome => setNome(nome)}
            />
        </View>
    )
}