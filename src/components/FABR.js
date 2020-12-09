import * as React from 'react';
import { StyleSheet, ToastAndroid } from 'react-native';
import { FAB } from 'react-native-paper';

const FABRight = () => (
  <FAB
    style={styles.fabR}
    //small
    icon="plus"
    onPress={() => ToastAndroid.show("Botão direito (mais) clicado", ToastAndroid.SHORT)}
  />

  
);

const styles = StyleSheet.create({
  fabR: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})

export default FABRight;