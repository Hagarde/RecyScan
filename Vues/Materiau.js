
import React from 'react';
import { Button } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default class Acceuil extends React.Component  {
  state = [
    {barcode: route.params},
    {packaging: 'Inconnue'}
  ]
  
  fetcheur = (barcode) => {
    fetch('https://world.openfoodfacts.org/api/v0/product/' + barcode + '.json')
        .then(response => response.json())
        .then(data => setState(packaging = data.packaging))

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