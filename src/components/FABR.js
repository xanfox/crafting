import * as React from 'react';
import { StyleSheet, ToastAndroid } from 'react-native';
import { FAB } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import  fabStyles  from '../styles/fabStyles';

 function FABRight  () {
  const navigation = useNavigation();
  const route = useRoute();
  const screens = ['Random', 'Home', 'First', 'Second', 'Third'];
  const currentScreenNumber = screens.indexOf(route.name);
  let   goTo = currentScreenNumber + 1;
    //atualizar sempre essa cláusula com 
    // o nome da ultima tela
    if (route.name == 'Third') {
      goTo = 0;
    }

    return(
        <FAB
        style={fabStyles.fabR}
        //small
        icon="chevron-right-circle-outline"
        

        onPress={() => navigation.navigate(screens[goTo])}
        onTouchStart={() => ToastAndroid.show(screens[goTo], ToastAndroid.SHORT)}
      />
    )
};


export default FABRight;