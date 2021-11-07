
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import CardSilder from '../Component/CardSlider';

export default class Acceuil extends React.Component  {

  _lets_scan = () => {
    console.log('Vas sur la page scan  ');
    this.props.navigation.navigate('Scan');
  }
  render() {
    return (
      <View style={{flex: 1 }}>
        <View style={{flex: 1 , alignItems: 'center' , justifyContent: 'center'}}>
          <Text> Bienvenue sur RecyScan</Text>
          <StatusBar style="auto" />
          <Button title='Scanner un produit ' onPress={()=> this._lets_scan()}/>
        </View>
        <View style={{flex: 1 , alignItems: 'center' , JustifyContent: 'center'}}>
          <CardSilder  text1="Pensez à éteindre la lumière en partant d'une pièce ! Enculé de Joseph " text2="On devrait mettre des images comme sur les clopes sur les paquets de jambon, non ?">
          </CardSilder>
        </View>
      </View>
    );
  }
  }