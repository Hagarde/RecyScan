import * as Location from 'expo-location';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, {Marker} from 'react-native-maps';

export default class Geolocation extends React.Component {
    state = {
        materiau : null,
        localisation : {latitude : this.props.navigation.state.params.latitude, longitude : this.props.navigation.state.params.longitude},
        errorMessage : null,
    }

    render () {
        return (
            <View style={styles.container}>
                <MapView
                    style={{flex: 1}}
                    initialRegion={{
                    latitude: this.state.localisation.latitude,
                    longitude: this.state.localisation.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                    }}
                >
                    <Marker
                        coordinate={{latitude: 43.3416027, longitude: 5.4385379}}
                        title="GInfo"
                        description="GInfo > BDE"
                    />
                </MapView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
  container: {
    flex : 1
  }
})