import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';

import PokemonItem from './PokemonItem';
import CONSTANTS from '../constants/constants';

// TODO: Move in common helpers
String.prototype.toTitleCase = function() {
  return this.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonList: []
    };
  }

  componentDidMount() {
    axios({
      method: 'GET',
      url: `${CONSTANTS.API_URL}/pokemon`
    })
      .then(response => {
        // alert(response.data.results);
        const pokemonList = response.data.results.map(pokemon => {
          return {
            name: pokemon.name.toTitleCase(),
            url: pokemon.url
          };
        });
        this.setState({
          pokemonList
        });
      })
      .catch(err => {
        alert(`Error occurred: ${err}`);
      });
  }

  // TODO: Add button to fetch next 20, or even better, implement unlimited scroll
  render() {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Header</Text>
          </View>
          <View style={styles.grid}>
            {this.state.pokemonList.map((pokemon, index) => {
              return <PokemonItem key={index} pokemon={pokemon} />;
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 50
  },
  header: {
    height: 60,
    backgroundColor: '#CCCCCC',
    justifyContent: 'center'
  },
  headerText: {
    textAlign: 'center'
  },
  scrollContainer: {},
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    paddingVertical: 20
  }
});
