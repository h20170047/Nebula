import React, { useState } from 'react';
import { StyleSheet, View, Button,Text} from 'react-native';

import Navigator from './navigation/Navigator'
export default function App() {
    return (
    <Navigator/>
  );
}

const styles= StyleSheet.create({
  screen:{
    padding: 50
  }
})