import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import MainContainer from './src/components/MainContainer';

// TODO: Create redux store to sync all cmp data before it is too late
// TODO: Add redux offline to avoid multiple server callbacks
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MainContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});
