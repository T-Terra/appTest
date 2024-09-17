import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import Oficial, { Comp2, Comp3 } from "./components/Mult";
import Primeiro from "./components/Primeiro";

export default () => (
    <SafeAreaView style={Style.App}>
        <Oficial/>
        <Comp2/>
        <Comp3/>
        <Primeiro/>
    </SafeAreaView>
);

const Style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});