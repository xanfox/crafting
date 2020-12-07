import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const HomeScreen = ({navigation, route}) => {
    return (
        <View style={styles.container1}>
            <Text>{} Screen</Text>
        </View>
    )
}

export default HomeScreen


const styles = StyleSheet.create({
    container1: {
      flex: 1,
      backgroundColor: '#944',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });