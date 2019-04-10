//IMPORT
import React, { Component } from 'react';
import { View, Image } from 'react-native';

const imagem = require('../../imgs/jokenpo.png');

class Topo extends Component {
    render() {
      return (
        <View>
          <Image style={{ width: '100%' }} source={imagem} />
        </View>
      );
    }
}

export default Topo;
