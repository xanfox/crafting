import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import FABRight from '../components/FABR'
import FABLeft from '../components/FABL'

const ThirdScreen = ({navigation, route}) => {
    return (
        <View style={styles.container3}>
            <Text>Terceira Tela</Text>
            <FABLeft/>
            <FABRight/>
        </View>
    )
}

export default ThirdScreen


const styles = StyleSheet.create({

    container3: {
      flex: 1,
      backgroundColor: '#8f4',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });