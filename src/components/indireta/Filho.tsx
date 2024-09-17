import React from 'react'
import { Button } from 'react-native'

export default props => {

    function gerarNumero(min, max) {
        const delta = max - min + 1
        const num = Math.floor(Math.random() * delta) + min
        return num
    }

    return (
        <Button 
            title='Executar'
            onPress={function() {
                const n = gerarNumero(props.min, props.max)
                props.funcao(n)
            }}
        />
    )
}