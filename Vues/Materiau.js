
import React from 'react';
import { Button } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { traducteur } from '../Component/travail'
import axios from 'axios';

export default class Materiau extends React.Component  {
  state = {barcode: this.props.navigation.state.params.barcode, packaging: [],trouve:false}


  async componentDidMount() {
    const URL = "https://world.openfoodfacts.org/api/v0/product/"
    console.log(' => requête envoyée à : ' + URL + barcode + '.json');
    const barcode = this.state.barcode ;
    const response = await axios.get(URL + barcode + '.json').then(res => res = [res.data.product.packaging,res.data.product.packaging_tags]);
    const all_data = response[0].concat(response[1]).split(',')
    console.log('Les matériaux détectés par notre IA sont les suivant : ');
    // Je traite chaque packaging et les analyse pour savoir si je les connais 
    all_data_translated = all_data.map(element => {
      translated =  traducteur(element);
      if (!(translated == 'Trop vague' )) {
        packagings = this.state.packaging ;
        packagings.push(translated);
        this.setState({packaging: packagings});
      }
    } );
    // Je regarde si il faut rediriger vers la page d'aide ou la page de localisation 
    console.log(this.state.packaging)
    if (!(this.state.packaging == [] )) {
      this.setState({trouve : true})
      }
  }

  render() { 
    // Vue à rendre si on connait les matériaux du packaging 
    if (this.state.trouve) {
      return ( 
        <View style={ styles.container}>
          <Text> Nous avons trouvé que cet emballage contenais des traces de : </Text>
          {(this.state.packaging.includes('Plastique')) && <Button title="Plastique" onPress={ ()=> rien = rien }/>}
          {(this.state.packaging.includes('Metal')) && <Button title="Metal" onPress={ ()=> rien = rien }/>}
          {(this.state.packaging.includes('Carton')) && <Button title="Carton" onPress={ ()=> rien = rien }/>}
          {(this.state.packaging.includes('Brique')) && <Button title="Brique" onPress={ ()=> rien = rien }/>}
          {(this.state.packaging.includes('Verre')) && <Button title="Verre" onPress={ ()=> rien = rien }/>}
          {(this.state.packaging.includes('Aluminium')) && <Button title="Aluminium" onPress={ ()=> rien = rien }/>}
        </View>
      )
    }
    
    return (
      // Vue retourner en cas de non trouvage des matériaux
        <View style={ styles.container }>
          <Text> Nos meilleurs ingénieurs n'ont pas pu déterminer la composition de cet emballage extraterrestres, veuillez sélectionner le matériau de l'emballage d'après vous : </Text>
          <View style={ styles.container }>
            <View style={ styles.container }>
              <Button title='Plastique' onPress={() => rien = null} />  
              <Button title='Carton' onPress={() => rien = null} />
              <Button title='Métal' onPress={() => rien = null} />
            </View>
            <View style={ styles.container }>
              <Button title='Verre' onPress={() => rien = null} />  
              <Button title='Brique (lait)' onPress={() => rien = null} />
              <Button title='Aluminium' onPress={() => rien = null} />
            </View>
          </View>
        </View>
      );
    }
  }


const styles = StyleSheet.create({
  container: {
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center' 
  }
})