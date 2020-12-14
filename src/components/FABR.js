import * as React from 'react';
import { StyleSheet, ToastAndroid } from 'react-native';
import { FAB } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

 function FABRight  () {
  const navigation = useNavigation();
  const route = useRoute();
  const screens = ['Home', 'First', 'Second', 'Third'];
  const currentScreenNumber = screens.indexOf(route.name);
  let   goTo = currentScreenNumber + 1;
    //atualizar sempre essa cláusula com 
    // o nome da ultima tela
    if (route.name == 'Third') {
      goTo = 0;
    }

    return(
        <FAB
        style={styles.fabR}
        //small
        icon="plus"
        

        onPress={() => navigation.navigate(screens[goTo])}
        onTouchStart={() => ToastAndroid.show(screens[goTo], ToastAndroid.SHORT)}
      />
    )
};

const styles = StyleSheet.create({
  fabR: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})

export default FABRight;