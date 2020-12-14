import * as React from 'react';
import { StyleSheet, ToastAndroid } from 'react-native';
import { FAB } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

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
        style={styles.fabR}
        //small
        icon="minus"
        

        onPress={() => navigation.navigate(screens[goTo])}
        onTouchStart={() => ToastAndroid.show(screens[goTo], ToastAndroid.SHORT)}
      />
    )
};

const styles = StyleSheet.create({
  fabR: {
    position: 'absolute',
    margin: 16,
    left: 0,
    bottom: 0,
  },
})

export default FABLeft;