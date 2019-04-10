//IMPORT
import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const imgPedra = require('../../imgs/pedra.png');
const imgPapel = require('../../imgs/papel.png');
const imgTesoura = require('../../imgs/tesoura.png');

class Icone extends Component {
    render() {
      //this.props.escolha
      //this.props.jogador

      if (this.props.escolha === 'Pedra') {
          return (
            <View style={styles.icone}>
              <Text style={styles.txtJogador}>{this.props.jogador}</Text>
              <Image source={imgPedra} />
            </View>
          );
        } else if (this.props.escolha === 'Papel') {
          return (
            <View style={styles.icone}>
              <Text style={styles.txtJogador}>{this.props.jogador}</Text>
              <Image source={imgPapel} />
            </View>
          );
        } else if (this.props.escolha === 'Tesoura') {
          return (
            <View style={styles.icone}>
              <Text style={styles.txtJogador}>{this.props.jogador}</Text>
              <Image source={imgTesoura} />
            </View>
          );
        }
          return false;
    }
}

const styles = StyleSheet.create({
        icone: {
          marginTop: 30,
          alignItems: 'center'
        },

        txtJogador: {
            fontSize: 18
        }


});

export default Icone;
