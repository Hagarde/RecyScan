
import React from 'react';
import { Button } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { traducteur } from '../Component/travail'
import axios from 'axios';

export default class Materiau extends React.Component  {
  state = {barcode: this.props.navigation.state.params.barcode, packaging: 'Inconnue', info: null,trouve:false}


  async componentDidMount() {
    const URL = "https://world.openfoodfacts.org/api/v0/product/"
    console.log(URL + barcode + '.json');
    const barcode = this.state.barcode ;
    const response = await axios.get(URL + barcode + '.json').then(res => res = [res.data.product.packaging,res.data.product.packagings,res.data.product.packaging_tags]);
    console.log(response);
    
    // this.setState({packaging: traducteur(response)});

    // if (traduction) {this.setState({trouve : true})} // A faire bien ... 
    
  }

  render() { 
    return (
        <View style={{flex: 1 , alignItems: 'center' , justifyContent: 'center'}}>
          <Text> Le code barre scanné est {this.props.navigation.state.params.barcode} </Text>
          <Text> Nous avons pu déterminer que le produit est composé de { this.state.packaging} </Text>
          <Text> {JSON.stringify(this.state.info, null, 2)} </Text>
        </View>
      );
    }
  }