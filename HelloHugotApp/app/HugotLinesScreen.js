'use strict'
import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View
} from 'react-native';

import _ from 'lodash'
import Icon from 'react-native-vector-icons/FontAwesome'

const hugotLines = [
  "Sabi mo sa akin noon, \"Don\'t be a stranger.\" Pero ikaw 'yung naging stranger.",
  "Ang hirap maging masaya para sa iba.",
  "When in doubt... totoo 'yan!",
  "JOKEWA: Pekeng jowa. Parang kayo pero hindi.",
  "Pang ilang soulmate mo na ba 'yan?",
  "In a relationship nga pero palagi pa ring mag-isa.",
  "Buti pa ang trabaho, walang katapusan.",
  "Naubos na ako... - Hugot Lines"
]

class HugotLinesScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0
    }
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.header} />
        <View style={styles.content}>
          <TouchableOpacity onPress={(event) => this._getNextHugot()}>
            <Text style={styles.hugotline}>
              {hugotLines[this.state.index]}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer} />
      </View>
    )
  }

  _getNextHugot(person) {
    var newIndex = this.state.index < (hugotLines.length - 1) ? this.state.index + 1 : 0;
    this.setState(prevState => ({
      index: newIndex
    }));
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "steelblue"
  },

  header: {
    height: 20
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  footer: {
    height: 80
  },

  hugotline: {
    fontFamily: "Chalkboard SE",
    fontSize: 24,
    paddingLeft: 25,
    paddingRight: 25
  }
});

module.exports = HugotLinesScreen
