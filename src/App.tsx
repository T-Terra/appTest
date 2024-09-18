import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import MinMax from "./components/MinMax"
import Oficial, { Comp2, Comp3 } from "./components/Mult";
import Primeiro from "./components/Primeiro";
import RandomValue from "./components/Random"
import Titulo from "./components/Titulo"
import BotaoExc from "./components/Botao"
import Contador from "./components/Contador"
//import Pai from "./components/direta/Pai"
import Pai from "./components/indireta/Pai"
import ContadorV2 from "./components/contador/ContadorV2"
import Plataforma from "./components/OSSystem"
import ParImpar from "./components/ParImpar"
import Familia from "./components/relacao/Familia";
import Membros from "./components/relacao/Membros";
import UsuarioLogado from "./components/UsuarioLogado";
import ListaProdutos from "./components/produtos/ListaProdutos";

export default () => (
    <SafeAreaView style={Style.App}>
        <ListaProdutos/>
        {/*
        <UsuarioLogado usuario={{nome: "Gui", email: "gui@gui.com"}}/>
        <UsuarioLogado usuario={{nome: "Maria"}}/>
        <UsuarioLogado usuario={{email: "maria@gmail.com"}}/>
        <UsuarioLogado usuario={null}/>
        <Familia>
            <Membros nome="Ana" sobrenome="Silva"/>
            <Membros nome="Julia" sobrenome="Silva"/>
        </Familia>
        <Familia>
            <Membros nome="Marcos" sobrenome="Arruda"/>
            <Membros nome="Rafaela" sobrenome="Arruda"/>
            <Membros nome="Henrique" sobrenome="Arruda"/>
            <Membros nome="Gabriel" sobrenome="Arruda"/>
        </Familia>
        <ParImpar num={11}/>
        <Plataforma/>
        <ContadorV2/>
        <Pai/>
        <Pai/>
        <Contador/>
        <Contador inicial={10} passo={50}/>
        <BotaoExc/>
        <Titulo principal="Cadastro produto" secundario="Tela de cadastro do produto"/>
        <RandomValue min={1} max={60}/>
        <RandomValue min={1} max={60}/>
        <MinMax min={3} max={20}/>
        <Oficial/>
        <Comp2/>
        <Comp3/>
        <Primeiro/>*/}
    </SafeAreaView>
);

const Style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
});