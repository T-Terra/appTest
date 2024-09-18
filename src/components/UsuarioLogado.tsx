import React from 'react'
import { Text } from 'react-native'
import StyleFont from './Estilo'
import If from './If'

export default props => {
    const usuario = props.usuario || {}
    return (
        <>
            <If teste={usuario && usuario.nome && usuario.email}>
                <Text style={StyleFont.MiddleFont}>
                    Usuário Logado:
                </Text>
                <Text style={StyleFont.MiddleFont}>
                    {usuario.nome} - {usuario.email}
                </Text>
            </If>
        </>
    )
}