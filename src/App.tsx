import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import MinMax from "./components/MinMax"
import Oficial, { Comp2, Comp3 } from "./components/Mult";
import Primeiro from "./components/Primeiro";

export default () => (
    <SafeAreaView style={Style.App}>
        <MinMax min={3} max={20}/>
        {/*
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