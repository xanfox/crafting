import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import FABLeft from '../components/FABL';
import FABRight from '../components/FABR';
import RandomNumberStyles from '../styles/RandomNumberStyles';


const RandomNumbers = ({ navigation, route}) => {
    const [num, setNum] = useState("Dezena da Sorte");
    function handleNum(){
        const new_num = Math.floor(Math.random() * 100);
        setNum(new_num);
    }
    return(
        <>
            <View style={RandomNumberStyles.container}>
                <Text style={RandomNumberStyles.num}>{ num }</Text>
                <TouchableOpacity onPress={handleNum} style={RandomNumberStyles.button}>
                    <Text>Gera Número</Text>
                </TouchableOpacity>
            </View>
            <FABLeft/>
            <FABRight/>
            <StatusBar style='auto'/>
        </>
    ) 
}

export default RandomNumbers;

