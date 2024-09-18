import React, { Component } from "react";
import { Button, Text, TextInput, View } from "react-native"
import StyleFont from "../Estilo"

import Numero from "./Numero";

export default class Mega extends Component {

    state = {
        qtdNumeros: this.props.qtdNumeros
    }

    setNum = (qtd) => {
        this.setState({ qtdNumeros:  +qtd })
    }

    gerarNumeroNaocontido = nums => {
        const novo = Math.floor(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaocontido(nums) : novo
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.qtdNumeros)
            .fill()
            .reduce(n => [...n, this.gerarNumeroNaocontido(n)], [])
            .sort((a, b) => a - b)
        this.setState({ numeros })
    }

    exibirNumero = () => {
        const nums = this.state.numeros
        return nums ? nums.map(num => {
            return <Numero num={num}/>
        }) : false
    }

    render() {
        return (
            <>
                <Text style={StyleFont.MiddleFont}>
                    Gerador de Mega-Sena
                </Text>
                <TextInput
                    keyboardType="numeric"
                    style={{borderBottomWidth: 1}}
                    placeholder="Digite a quantidade de número"
                    value={this.state.qtdNumeros}
                    onChangeText={this.setNum}
                />
                <Button 
                    title="Gerar Numeros"
                    onPress={this.gerarNumeros}
                />
                <View style={{flexDirection: "row", flexWrap: 'wrap', justifyContent: "center", marginTop: 20}}>
                    {this.exibirNumero()}
                </View>
            </>
        )
    }
}