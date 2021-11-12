import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as React from 'react';

export default class Scan extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      barcode : null,
      Permissions : null,
      scanned : false,
    };
  }


  componentDidMount() {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      this.setState({ Permissions: (status === 'granted') })
    })();
  }

  handleBarCodeScanned = ({ type, data }) => {
    console.log('je trouvé')
    this.setState({scanned: true});
    this.setState({barcode: data});
    this.props.navigation.navigate('Materiau',this.state.barcode)
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  render() {
    if (this.state.Permissions === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (this.state.Permissions === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={this.state.scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        {this.state.scanned && <Button title={'Tap to Scan Again'} onPress={() => this.setState({scanned: false})} />}
      </View>
    );
  }


  
}

const styles = StyleSheet.create({
  container: { 
    width: '100%',
    height: '100%',
  }

})