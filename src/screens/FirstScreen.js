import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

const FirstScreen = ({navigation, route}) => {
    return (
        <View style={styles.container2}>
            <Text>{} Primeira Tela: Branco</Text>
            <Button
                title="Vai Para Segunda Tela"
                onPress={() => navigation.navigate('Second')}
            />
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