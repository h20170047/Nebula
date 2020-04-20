import React, { useState } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

const Menu = props => {

  return (
    <View style={styles.screen}>
      <Text>All app list comes in this screen</Text>
      <View style={styles.container}>
        <View style={styles.button}>
          <Button title="Goals app" onPress={() =>
            props.navigation.navigate({ routeName: 'GoalsScreen' })}></Button>
        </View>
        <View style={styles.button}>
          <Button title="Timer app" onPress={() =>
            props.navigation.navigate('TimerScreen')}></Button>
        </View>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 300
  },
  button: {
    width: '40%',
    height: 40,
    marginLeft: 50,
    margin: 10
  }
})

export default Menu;