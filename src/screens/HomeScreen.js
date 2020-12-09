import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import FABRight from '../components/FABR'
import FABLeft from '../components/FABL'


const HomeScreen = ({navigation, route}) => {
    return (
        <View style={styles.container1}>
            <Text>{} Screen</Text>
            <Button
                title="Vai Para Primeira Tela"
                onPress={() => navigation.navigate('First')}
            />
            
            <FABLeft/>
            <FABRight/>

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