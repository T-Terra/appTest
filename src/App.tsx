import React from "react";
import { SafeAreaView } from "react-native";

import Oficial, { Comp2, Comp3 } from "./components/Mult";
import Primeiro from "./components/Primeiro";

export default () => (
    <SafeAreaView>
        <Oficial/>
        <Comp2/>
        <Comp3/>
        <Primeiro/>
    </SafeAreaView>
);