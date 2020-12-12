import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

const SecondScreen = ({navigation, route}) => {
    return (
        <View style={styles.container2}>
            <Text>{} Screen</Text>
            <Button
                title="Vai Para Segun Tela"
                onPress={() => navigation.navigate('First')}
            />
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