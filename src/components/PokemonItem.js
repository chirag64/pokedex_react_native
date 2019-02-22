import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import axios from "axios";

export default class PokemonItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: {}
    };
  }

  componentDidMount() {
    axios({
      method: "GET",
      url: this.props.pokemon.url
    })
      .then(response => {
        const pokemon = response.data;
        console.log(JSON.stringify(pokemon));
        this.setState({
          pokemon
        });
      })
      .catch(err => {
        alert(`Error occurred: ${err}`);
      });
  }

  render() {
    return (
      <View style={styles.gridItem}>
        <View style={styles.pokemonItem}>
          {this.state.pokemon &&
            this.state.pokemon.sprites &&
            this.state.pokemon.sprites.front_default && (
              <Image
                source={{ uri: this.state.pokemon.sprites.front_default }}
                style={styles.image}
              />
            )}
          <Text style={styles.name}>{this.props.pokemon.name}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gridItem: {
    padding: 5,
    width: "33%",
    height: 120,
  },
  pokemonItem: {
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#EEEEEE",
    padding: 5,
    borderRadius: 15
  },
  name: {
    textAlign: "center"
  },
  image: {
    width: 75,
    height: 75
  }
});
