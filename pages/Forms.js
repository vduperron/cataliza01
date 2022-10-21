import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import Estilo from '../componentes/Estilo';

export default function Forms() {
    
    const [id,setid] = useState('');
    const [techTypes, settechTypes] = useState('');

    function exibirDados() {

        alert('id: ' + id + ' \ntechTypes: ' + techTypes);
        setid('');
        settechTypes('');
    }

    return (
        <View style = {Estilo.container}>

        <Text style = {Estilo.titulo}>id: </Text>
        <TextInput
            style = {Estilo.input}
            value = { id }
            onChangeText = { (id) => setid(id)}
        />
    

        <Text style = {Estilo.titulo}>techTypes: </Text>
        <TextInput 
            style = {Estilo.input}
            value = { techTypes }
            onChangeText = { (techTypes) => settechTypes( techTypes )}
        
        />

        <TouchableOpacity
            style = {Estilo.botao}
            onPress={exibirDados}
        > 
        <Text style = {Estilo.botao}>Enviar: </Text>
        </TouchableOpacity>

    </View>
    );
}