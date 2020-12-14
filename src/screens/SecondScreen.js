import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import FABRight from '../components/FABR'
import FABLeft from '../components/FABL'

const SecondScreen = ({navigation, route}) => {
    return (
        <View style={styles.container2}>
            <Text>Segunda Tela</Text>

            <FABLeft/>
            <FABRight/>
        </View>
    )
}

export default SecondScreen


const styles = StyleSheet.create({

    container2: {
      flex: 1,
      backgroundColor: '#847',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });