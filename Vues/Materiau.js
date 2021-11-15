
import React from 'react';
import { Button } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default class Materiau extends React.Component  {
  state = {barcode: 12,packaging: 'Inconnue'}
  
  fetcheur = async (barcode) => {

    let data = await fetch('https://world.openfoodfacts.org/api/v0/product/737628064502.json', {
      method: 'POST',
      headers: {
                   'Accept': 'application/json',
                   'Content-Type': 'application/json',
      }})
        .then(response => response.json())
        .then(data => console.log(data))
    console.log(data);
  }

  render() { 
    return (
        <View style={{flex: 1 , alignItems: 'center' , justifyContent: 'center'}}>
          <Text> Le code barre scanné est {this.props.navigation.state.params.barcode}</Text>
          <Button title='Découvrir les matériaux ! ' onPress={()=> this.fetcheur(this.barcode)}/>
        </View>
    );
  }
  }