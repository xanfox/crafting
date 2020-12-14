import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import FABRight from '../components/FABR'
import FABLeft from '../components/FABL'

const FirstScreen = ({navigation, route}) => {
    return (
        <View style={styles.container2}>
            <Text>Primeira Tela: Branco</Text>

            <FABLeft/>
            <FABRight/>
        </View>
    )
}

export default FirstScreen

const styles = StyleSheet.create({

    container2: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });