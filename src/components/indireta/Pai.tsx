import React, { useState } from 'react'
import { Text } from 'react-native'
import StyleFont from '../Estilo'
import Filho from './Filho'

export default props => {
    const [num, setNum] = useState(0)

    function exibirValor(numero) {
        setNum(numero)
    }

    return (
        <>
            <Text style={StyleFont.MiddleFont}>{num}</Text>
            <Filho 
                min={1} 
                max={60} 
                funcao={exibirValor}
            />
        </>
    )
}