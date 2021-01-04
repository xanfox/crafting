import { StyleSheet } from 'react-native'; 

const RandomNumberStyles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'#957',
        alignItems:'center',
        justifyContent:'center'
    },
    num:{
        fontSize:38,
        color:'#fff',
        fontWeight:'bold'
    },
    button:{
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        width:'50%',
        padding:10,
        margin:10,
    }
})
export default RandomNumberStyles;