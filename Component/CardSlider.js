import React from 'react';
import {Button, Text, View, StyleSheet } from 'react-native';

export default class CardSilder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        i : true ,
        text1  : props.text1 ,
        text2  : props.text2 
        }

    }
    render () {
        if ( this.state.i ) {
            return (
                <View style={ styles.container }>  
                    <Text> {this.state.text1} </Text>
                    <Button title='SUIVANT' onPress={() => this.setState({i : !this.state.i })}/>
                </View>
            )
            
        }
        return (
            <View style={ styles.container}>  
                <Text> {this.state.text2} </Text>
                <Button title='SUIVANT' onPress={() => this.setState({i : !this.state.i })}/>
            </View>
        )
    }
}




const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      height: '75%',
      height: '75%',
      borderWidth : 5,
    },
  });
  