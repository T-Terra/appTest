import React from 'react'
import { Text, FlatList } from 'react-native'
import StyleFont from '../Estilo'

import Produtos from './Produtos'

export default props => {
    const produtoRender = ({item: p}) => {
        return <Text>{p.id}) {p.nome} - {p.preco}</Text>
    }
    return (
        <>
            <Text style={StyleFont.MiddleFont}>Lista de Produtos V2</Text>
            <FlatList 
                data={Produtos}
                renderItem={produtoRender}
            />
        </>
    )
}