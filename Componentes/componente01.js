import React from 'react';
import {View, Text } from 'react-native';

export default function Componente01(){
    return(
        <View>
            <Text>Oi, sou o componente 01</Text>
        </View>
    )
}

function Componente02(){
    return(
        <View>
            <Text>Oi, sou o componente 02</Text>
        </View>
    )
}

const Componente03 =() =>{
    return(
        <View>
            <Text>Oi, sou o componente 03</Text>
        </View>
    )
}

const Componente04 =() =>{
    return(
        <View>
            <Text>Oi, sou o componente 03</Text>
        </View>
    )
}

function Componente05(props) { 
return( 
    <View>
        <Text> { props.titulo } </Text>
    </View>
    )
}

export {Componente02, Componente03, Componente04, Componente05}