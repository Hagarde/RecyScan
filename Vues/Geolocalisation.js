import * as Location from 'expo-location';
import React from 'react';
import { Button } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default class Geolocation extends React.Component {
    state = {
        materiau : null,
        localisation : null,
        errorMessage : null,
    }

    componentDidMount = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        let localisation = await Location.getCurrentPositionAsync({});
        this.setState({location: localisation});
        console.log(localisation);
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