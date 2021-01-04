import React from 'react'
import { StyleSheet, View, Text, SafeAreaView, StatusBar } from 'react-native'
import FABRight from '../components/FABR'
import FABLeft from '../components/FABL'


const HomeScreen = ({navigation, route}) => {
    return (

        <>
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.box}><Text>1</Text></View>
            <View style={[styles.box, styles.box2]}><Text>2</Text></View>
            <View style={styles.box}><Text>3</Text></View>
            <View style={styles.box}><Text>4</Text></View>
        </SafeAreaView>

        <View style={styles.footer}>
            <Text>* Flex define o peso do container</Text>
            <Text>* Flex direction define o eixo (ou eixo invertido) do conteudo</Text>
            <Text>*para usar mais de um estilo tem que usar um array de estilos (chave)
            <Text>*para retornar mais que um container no mesmo nivel tem que usar fragment</Text>
            </Text>
        </View>
        <FABLeft/>
        <FABRight/>
        </>
    )
}

export default HomeScreen




const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ccc',
    //faz o fundo
    flexDirection: 'column',
    //define o eixo principal
    flex:4,
    //define o peso do container
    alignItems: 'center',
    //alinha conteudos no eixo contrário ao principal
    //somente quando o conteúdo não está quebrando a linha
    justifyContent: 'space-around',
    //justifica conteúdo no mesmo eixo, somente qdo n quebra linha
    

  },
  box:{
    //flex:1,
    height:100,
    width:100,
    backgroundColor:'#666',
    borderColor:'#999',
    borderWidth:5,
    margin:15,
  },
  box2:{
    alignSelf:'flex-start',
  },
  footer:{
    flex:1,
  }
});
