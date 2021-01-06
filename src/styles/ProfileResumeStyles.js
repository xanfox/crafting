import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container:{
        flex:1,       
    },
    top:{
        flex:2,
        flexDirection:'column',
        alignItems:'center',
        backgroundColor:'#e7e7e7'
    },
    img:{
        width:250,
        height:250,
        borderRadius:125,
        marginTop:40,
        
    },
    name:{
        fontSize:36,
        fontWeight:'bold',
        color:'#000',
        marginTop:15,
        marginBottom:5
        
    },
    function:{
        fontSize:16,
        fontWeight:'bold',
        color:'#939393'
    },
    social_icons_container:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'60%',
        marginTop:5,
        
        
    },
    bottom:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#e7e7e7'
        
    },
    card:{
        backgroundColor:'#d9d9d9',
        width:'75%',
        minHeight:'22%',
        borderWidth:1,
        borderColor:'#ccc',
        elevation:5,
        borderRadius:10,
        marginBottom:11
    },
    card_content_title:{
        color:'#043',
        alignItems:'center'
    },
    card_content_text:{
        color:'#939393'
    }
});

export default styles;