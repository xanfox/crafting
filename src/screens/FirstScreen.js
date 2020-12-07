import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const FirstScreen = ({navigation, route}) => {
    return (
        <View style={styles.container2}>
            <Text>{} Screen</Text>
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