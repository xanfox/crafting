import * as React from 'react';
import { StyleSheet, ToastAndroid } from 'react-native';
import { FAB } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import  fabStyles  from '../styles/fabStyles';

 function FABLeft  () {
  const navigation = useNavigation();
  const route = useRoute();
  const screens = ['Home', 'First', 'Second', 'Third'];
  const currentScreenNumber = screens.indexOf(route.name);
  let   goTo = currentScreenNumber - 1;
    if (route.name == 'Home') {
      goTo = 0;
    }

    return(
        <FAB
        style={fabStyles.fabL}
        big
        icon="chevron-left-circle-outline"
        

        onPress={() => navigation.navigate(screens[goTo])}
        onTouchStart={() => ToastAndroid.show(screens[goTo], ToastAndroid.SHORT)}
      />
    )
};



export default FABLeft;