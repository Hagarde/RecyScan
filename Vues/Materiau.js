
import React from 'react';
import { Button } from 'react-native';
import { StyleSheet, Text, View,TouchableOpacity,Image,Dimensions,TouchableHighlight } from 'react-native';
import { traducteur } from '../Component/travail'
import axios from 'axios';
import * as Location from 'expo-location';
import colors from '../Styles/Color';

export default class Materiau extends React.Component  {
  state = {barcode: this.props.navigation.state.params.barcode, packaging: [],trouve:false}


  async componentDidMount() {
    const URL = "https://world.openfoodfacts.org/api/v0/product/"
    const barcode = this.state.barcode ;
    console.log(' => requête envoyée à : ' + URL + this.props.navigation.state.params.barcode + '.json');

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


  _cparou = async (avecquoi) => {
    console.log(' ========== Cherchons les points de collecte de '+ avecquoi +' ==========');
    let { status } = await Location.requestForegroundPermissionsAsync();
    let localisation = await Location.getCurrentPositionAsync({});
    this.props.navigation.navigate('Geolocalisation',{materiau : avecquoi , longitude : localisation.coords.longitude, latitude : localisation.coords.latitude });
  }


  render() { 
    // Vue à rendre si on connait les matériaux du packaging 
    if (this.state.trouve & !(!Array.isArray(this.state.packaging) || !this.state.packaging.length) ) {
      return ( 
        <View style={ styles.wrapper}>
          
          <Text style={styles.welcomeText}> Nous avons trouvé que cet emballage contenait des traces de : </Text>
          
          <View style={ styles.wrapper }>
            {(this.state.packaging.includes('Plastique')) && 
            <TouchableHighlight style={[{flexDirection:'row'}, styles.wrapper2]} onPress={()=>this._cparou('Plastique')}>
              <View>
                <Image style={styles.buttonLogo} source={require('../Styles/Image/plastique.png')}/>
                <Text style={styles.buttonText}> Plastique </Text>
              </View>
            </TouchableHighlight>}
            {(this.state.packaging.includes('Metal')) && 
            <TouchableHighlight style={[{flexDirection:'row'}, styles.wrapper2]} onPress={()=>this._cparou('Metal')}>
              <View>
                <Image style={styles.buttonLogo} source={require('../Styles/Image/aluminium.png')}/>
                <Text style={styles.buttonText}> Metal </Text>
              </View>
            </TouchableHighlight>
            }
            {(this.state.packaging.includes('Carton')) && 
            <TouchableHighlight style={[{flexDirection:'row'}, styles.wrapper2]} onPress={()=>this._cparou('Carton')}>
              <View>
                <Image style={styles.buttonLogo} source={require('../Styles/Image/CartonGrand.png')}/>
                <Text style={styles.buttonText}> Carton </Text>
              </View>
            </TouchableHighlight>}
            {(this.state.packaging.includes('Brique')) && 
            <TouchableHighlight style={[{flexDirection:'row'}, styles.wrapper2]} onPress={()=>this._cparou('Brique')}>
              <View>
                <Image style={styles.buttonLogo} source={require('../Styles/Image/brique.png')}/>
                <Text style={styles.buttonText}> Brique </Text>
                </View>
            </TouchableHighlight>}
            {(this.state.packaging.includes('Verre')) && 
            <TouchableHighlight style={[{flexDirection:'row'}, styles.wrapper2]} onPress={()=>this._cparou('Verre')}>
              <View>
                <Image style={styles.buttonLogo} source={require('../Styles/Image/verre.png')}/>
                <Text style={styles.buttonText}> Verre </Text>
              </View>
            </TouchableHighlight>}
            {(this.state.packaging.includes('Aluminium')) && 
            <TouchableHighlight style={[{flexDirection:'row'}, styles.wrapper2]} onPress={()=>this._cparou('Aluminium')}>
              <View>
                <Image style={styles.buttonLogo} source={require('../Styles/Image/aluminium.png')}/>
                <Text style={styles.buttonText}> Aluminium </Text>
              </View>
            </TouchableHighlight>}
            <View style={styles.wrapper }>
              <Text style={[{padding:20},styles.buttonText]}> Cliquez pour décourvrir où le recycler ! </Text>
            </View>
          </View>
          
        </View>
      )
    }
    
    return (
      // Vue retourner en cas de non trouvage des matériaux
        <View style={ styles.wrapper }>
          <Text style={styles.welcomeText}> Aucune correspondance dans nos base de données, d'après vous de quoi est fait l'emballage que vous voulez recycler :  </Text>
          <View style={[{flexDirection:'row'},styles.wrapper] }>
            <View style={ styles.wrapper }>
              <TouchableHighlight style={[{flexDirection:'row'}, styles.wrapper2]} onPress={()=> this._cparou('Plastique')}>
                <View>
                  <Image style={styles.buttonLogo} source={require('../Styles/Image/plastique.png')}/>
                  <Text style={styles.buttonText}> Plastique </Text>
                </View>
              </TouchableHighlight>  
              <TouchableHighlight style={[{flexDirection:'row'}, styles.wrapper2]} onPress={()=>this._cparou('Carton')}>
                <View>
                  <Image style={styles.buttonLogo} source={require('../Styles/Image/CartonGrand.png')}/>
                  <Text style={styles.buttonText}> Carton </Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight style={[{flexDirection:'row'}, styles.wrapper2]} onPress={()=>this._cparou('Metal')}>
                <View>
                  <Image style={styles.buttonLogo} source={require('../Styles/Image/aluminium.png')}/>
                  <Text style={styles.buttonText}> Metal </Text>
                </View>
              </TouchableHighlight>
            </View>
            <View style={ styles.wrapper }>
              <TouchableHighlight style={[{flexDirection:'row'}, styles.wrapper2]} onPress={()=>this._cparou('Verre')}>
                <View>
                  <Image style={styles.buttonLogo} source={require('../Styles/Image/verre.png')}/>
                  <Text style={styles.buttonText}> Verre </Text>
                </View>
              </TouchableHighlight> 
              <TouchableHighlight style={[{flexDirection:'row'}, styles.wrapper2]} onPress={()=>this._cparou('Brique')}>
                <View>
                  <Image style={styles.buttonLogo} source={require('../Styles/Image/brique.png')}/>
                  <Text style={styles.buttonText}> Brique </Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight style={[{flexDirection:'row'}, styles.wrapper2]} onPress={()=>this._cparou('Aluminium')}>
                <View> 
                  <Image style={styles.buttonLogo} source={require('../Styles/Image/aluminium.png')}/>
                  <Text style={styles.buttonText}> Aluminium </Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      display: "flex",
      backgroundColor: colors.bleum ,
      
      alignItems: "flex-start"
    },
    welcomeWrapper: {
      flex: 1,
      display: "flex",
      marginTop: 30,
      padding: 20
    },
    biglogo: {
      width: 250,
      height: 250,
      margin: 20
    },
    welcomeText: {
      fontSize: 30,
      color: colors.white,
      fontWeight: "400",
      marginBottom: 40,
      margin : 20,
    },
    button: {
      alignItems: 'center',
      backgroundColor: colors.bleum,
      padding: 10
    },
    wrapper2: {
      margin: 15,
      padding: 10,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
      borderWidth: 1,
      borderColor: colors.white,
      backgroundColor: colors.white, 
      width: Dimensions.get('window').width * 0.4,
      height: Dimensions.get('window').height * 0.15
    },
    buttonText: {
      fontSize: 16,
      width: "100%",
      textAlign: "center",
      textDecorationColor: colors.bleum,
    },
    buttonLogo: {
      width: 20,
      height: 20,
      margin: 5
    }
  });