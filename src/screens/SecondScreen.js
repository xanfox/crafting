import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const SecondScreen = ({navigation, route}) => {
    return (
        <View style={style.container2}>
            <Text>{} Screen</Text>
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