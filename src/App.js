import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Simples from './components/Simples'
import ParImpar from './components/Parimpar'
import { MegaSena } from './components/Multi'
export default class App extends Component {
  render() {
    return (
      <View style={style.container}>
      <Simples texto="32"/>
      <ParImpar numero={32} />
      <Simples texto="33"/>
      <ParImpar numero={33} />
      <MegaSena numeros={6}/>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
  },
  f20:{
    fontSize: 40
  }
})
