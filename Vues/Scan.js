import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function Scan() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text,setText] = useState('Please scan your fucking product ! ')

  const askForCameraPermission = () => {
    (async () => {
      const {status} = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission( status === 'granted' );
    })()
  }

  _handleBarcode= (barcode) => {
    this.props.navigation.navigate('Scan');
  }

   // Request permission 
  
  useEffect( () => {
    askForCameraPermission();
  },[])

  // What happen when a barcode is scanned
  
  const handleBarcodeScanned = ({type,data}) => {
    setScanned(true);
    setText(data);
    console.log('Type : ' + type + ' / code-barre : ' + data);
  }

  // pendant la demande de permission 
  if (hasPermission == null) {
    return (
    <View style={styles.container}>
      <Text>Bienvenue sur RecyScan </Text>
      <StatusBar style="auto" />
      <Text > Get permission in progress</Text>
    </View>
    );
  }


  // En cas de refus de permission rendre cette vue 
  if (hasPermission == false ) {
    return(
    <View style={styles.container}>
      <Text > Pk t'as refusé, batard, vas-y donne les accès ! </Text>
      <Button title='get-perm' onPress={() => askForCameraPermission()}> Donner toute ta thune </Button>
    </View>
    );
  }


  // en cas de pas les cas précédent 


  return (
    <View >
      <View style={styles.container}>
        <Text>Bienvenue sur RecyScan </Text>
        <StatusBar style="auto" />
        <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarcodeScanned}/>
      </View>
      <Text> {text} </Text>

      {scanned && <Button title='Scan un produit ! ' onClick={() =>{ setScanned(false);}} color="primary" />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
