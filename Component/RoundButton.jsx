
import React, { Component } from "react";
import propTypes from "prop-types";
import { Text, View, TouchableHighlight, StyleSheet, Icon } from "react-native";
import colors from "../Styles/Color";

export default class RoundedButton extends Component {
    render() {
      const { text, textColor, backgroundColor } = this.props;
      return (
        <TouchableHighlight style={[{ backgroundColor }, styles.wrapper]}>
          <Text style={[{ textColor }, styles.buttonText]}>{text}</Text>
        </TouchableHighlight>
      );
    }
  }
  RoundedButton.propTypes = {
    text: propTypes.string.isRequired,
    textColor: propTypes.string,
    backgroundColor: propTypes.string
  };


const styles = StyleSheet.create({
    wrapper: {
      padding: 15,
      display: "flex",
      borderRadius: 40,
      borderWidth: 1,
      borderColor: colors.white
    },
    buttonText: {
      fontSize: 16,
      width: "100%",
      textAlign: "center"
    }
  });

