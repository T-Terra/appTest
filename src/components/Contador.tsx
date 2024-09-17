import React, { useState } from "react"
import { Text, Button } from "react-native"
import StyleFont from "./Estilo"

export default ({ inicial = 0, passo = 1 }) => {
    //let numero = props.inicial
    const [numero, setNumero] = useState(inicial)

    function Inc() {
        setNumero(numero + passo)
    }

    function Dec() {
        setNumero(numero - passo)
    }

    return (
        <>
            <Text style={StyleFont.MiddleFont}>{numero}</Text>
            <Button title="+" onPress={Inc}/>
            <Button title="-" onPress={Dec}/>
        </>
    )
}
