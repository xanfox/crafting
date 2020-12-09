import * as React from 'react';
import { Alert, StyleSheet, ToastAndroid } from 'react-native';
import { FAB } from 'react-native-paper';

const FABLeft = () => (
  <FAB
    style={styles.fabR}
    //small
    icon="minus"
    onPress={() => ToastAndroid.show("Botão esquerdo (menos) clicado", ToastAndroid.SHORT)}
  />

  
);

const styles = StyleSheet.create({
  fabR: {
    position: 'absolute',
    margin: 16,
    left: 0,
    bottom: 0,
  },
})

export default FABLeft;