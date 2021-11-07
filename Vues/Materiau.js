
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default class Acceuil extends React.Component  {
    constructor(props) {
        super(props);
        barcode = this.barcode ;
        packaging = 'Inconnu';
    }

    fetcheur = (barcode) => {
        fetch('https://world.openfoodfacts.org/api/v0/product/' + barcode)
            .then(response => response.json())
            .then(data => setState(packaging = data.packaging)
    }
  render() {
    return (
      <View style={{flex: 1 }}>
        <View style={{flex: 1 , alignItems: 'center' , justifyContent: 'center'}}>
          <Text> Le code barre scanné est {this.state.barcode}</Text>
          <Button title='Découvrir les matériaux ! ' onPress={()=> this.fetcheur(this.barcode)}/>
        </View>
      </View>
    );
  }
  }