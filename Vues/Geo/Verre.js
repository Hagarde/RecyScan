import { Platform, Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';


class Geolocation extends React.Component {
    state = {
        materiau : null,
        localisation : null,
        errorMessage : null,
    }

    componentDidMount = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return ;
        }

        let localisation = await Location.getCurrentPositionAsync({});
        setState({location: localisation});
    }

    render () {
        return (
            <View style={styles.container}>
                <Text> {this.state.localisation}</Text>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
      flex : 1,
      justifyContent: 'center',
      alignItems: 'center' 
    }
  })