//IMPORT
import React, { Component } from 'react';
import { Text, AppRegistry, StyleSheet, View, Button } from 'react-native';

import Topo from './src/components/topo.js';
import Icone from './src/components/icone.js';


class jokenpo extends Component {

    constructor(props) {
      super(props);

      this.state = { escolhaUsuario: '', escolhaComputador: '', resultado: '' };
    }

    jogo(escolhaUsuario) {
        //gera número aleatório
        const numeroAleatorio = Math.floor(Math.random() * 3);

        let escolhaComputador = '';

          switch (numeroAleatorio) {
            case 0: escolhaComputador = 'Pedra'; break;
            case 1: escolhaComputador = 'Papel'; break;
            case 2: escolhaComputador = 'Tesoura'; break;
            default: escolhaComputador = '';

          }


        let resultado = '';

            //ESCOLHA DE PEDRA
            if (escolhaUsuario === 'Pedra') {
                if (escolhaComputador === 'Pedra') {
                  resultado = 'Empate';
                }

                if (escolhaComputador === 'Papel') {
                  resultado = 'Você Perdeu!';
                }

                if (escolhaComputador === 'Tesoura') {
                  resultado = 'Você Ganhou!!';
                }
            }

            //ESCOLHA DE PAPEL
            if (escolhaUsuario === 'Papel') {
                if (escolhaComputador === 'Papel') {
                  resultado = 'Empate';
                }

                if (escolhaComputador === 'Tesoura') {
                  resultado = 'Você Perdeu!';
                }

                if (escolhaComputador === 'Pedra') {
                  resultado = 'Você Ganhou!!';
                }
            }

            //ESCOLHA DE TESOURA
            if (escolhaUsuario === 'Tesoura') {
                if (escolhaComputador === 'Tesoura') {
                  resultado = 'Empate';
                }

                if (escolhaComputador === 'Pedra') {
                  resultado = 'Você Perdeu!';
                }

                if (escolhaComputador === 'Papel') {
                  resultado = 'Você Ganhou!!';
                }
            }


        this.setState({ escolhaUsuario: escolhaUsuario,
                        escolhaComputador: escolhaComputador,
                        resultado: resultado
        });
    }

    render() {
      return (
        <View style={styles.geral}>


        <Topo />


          <View style={styles.painelAcoes}>

            <View style={styles.btnEscolha}>
              <Button title="Pedra" onPress={() => { this.jogo('Pedra'); }} />
            </View>

            <View style={styles.btnEscolha}>
              <Button title="Papel" onPress={() => { this.jogo('Papel'); }} />
            </View>

            <View style={styles.btnEscolha}>
              <Button title="Tesoura" onPress={() => { this.jogo('Tesoura'); }} />
            </View>

          </View>


            <View style={styles.palco}>
                <Text style={styles.txtResultado}> {this.state.resultado}</Text>

                <Icone escolha={this.state.escolhaComputador} jogador='Computador' />
                <Icone escolha={this.state.escolhaUsuario} jogador='Você' />


            </View>


        </View>
      );
    }
}


const styles = StyleSheet.create({

    btnEscolha: {
      width: 90,
      marginBottom: 10
    },

    painelAcoes: {
      marginTop: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    palco: {
        alignItems: 'center'
    },

    txtResultado: {
      marginTop: 25,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue'
    },


    geral: {
      flex: 1,
      backgroundColor: '#FFF'
    }


  });


//Renderizar para o dispositivo
AppRegistry.registerComponent('jokenpo', () => jokenpo);
