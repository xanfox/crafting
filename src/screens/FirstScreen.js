import React from 'react'
import { StyleSheet, SafeAreaView, View, Text } from 'react-native'
import FABRight from '../components/FABR'
import FABLeft from '../components/FABL'

const FirstScreen = ({navigation, route}) => {
    return (
        <SafeAreaView style={styles.container}>
           <View style={styles.box}/>
           <View style={styles.box}/>
           <View style={styles.box}/>
           <View style={styles.box}/>
           <View style={styles.box}/>
            <FABLeft/>
            <FABRight/>
        </SafeAreaView>
    )
}

export default FirstScreen

const styles = StyleSheet.create({

    container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#ccc',
      flexWrap:'wrap',
      alignContent:'space-between'
    },
    box:{
        flex:1,
        minWidth:100,
        //height:100,
        //minHeight:200,
        minHeight:'40%',
        backgroundColor:'#666',
        borderColor:'#999',
        borderWidth:5,
        margin:10,
        


    }
  });