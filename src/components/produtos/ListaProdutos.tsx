import React from 'react'
import { Text } from 'react-native'
import StyleFont from '../Estilo'

import Produtos from './Produtos'

export default props => {

    function obterLista() {
        return Produtos.map(p => {
            return (
                <Text key={p.id}>{p.id}) {p.nome} - R${p.preco}</Text>
            )
        })
    }

    return (
        <>
            <Text style={StyleFont.MiddleFont}>Lista de Produtos</Text>
            {obterLista()}
        </>
    )
}