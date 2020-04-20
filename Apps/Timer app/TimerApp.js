import React, { useState } from 'react';
import { StyleSheet, View, Button, Text} from 'react-native';

export default function TimerApp() {
  
  return (
    <View style={styles.screen}>
      <Text>Timer app comes in this screen</Text>
    </View>
  );
}

const styles= StyleSheet.create({
  screen:{
    padding: 50
  }
})