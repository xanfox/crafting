import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const ThirdScreen = ({navigation, route}) => {
    return (
        <View style={styles.container3}>
            <Text>{} Screen</Text>
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