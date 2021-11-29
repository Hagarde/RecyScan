
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image,TouchableHighlight,Button} from 'react-native';
import colors from '../Styles/Color';

export default class Acceuil extends React.Component  {

  _lets_scan = () => {
    console.log(' ========== Page de Scan ==========');
    this.props.navigation.navigate('Scan');
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={{justifyContent: 'center',alignItems: 'center',flex:1,flexDirection: 'row'}}> 
          <Image source={require('../Styles/Image/CartonGrand.png')} style={styles.biglogo} />
          
        </View>

        <View style={styles.welcomeWrapper}>
        <Text style={styles.welcomeText}> RecyScan</Text>
          <StatusBar style="auto" />
          <TouchableHighlight style={styles.wrapper2} onPress={this._lets_scan}>
            <Text style={styles.buttonText}> Scanner </Text>
          </TouchableHighlight>
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
      justifyContent: "center",
      alignItems: "flex-start"
    },
    welcomeWrapper: {
      flex: 1,
      display: "flex",
      marginTop: 30,
      padding: 20
    },
    biglogo: {
      width: 300,
      height:300,
      margin: 20
    },
    welcomeText: {
      fontSize: 30,
      color: colors.white,
      fontWeight: "400",
      marginBottom: 40
    },
    button: {
      alignItems: 'center',
      backgroundColor: colors.bleum,
      padding: 10
    },
    wrapper2: {
      padding: 15,
      display: "flex",
      borderRadius: 40,
      borderWidth: 1,
      borderColor: colors.white,
      backgroundColor: colors.white 
    },
    buttonText: {
      fontSize: 16,
      width: "100%",
      textAlign: "center",
      textDecorationColor: colors.bleum,
    }
  });