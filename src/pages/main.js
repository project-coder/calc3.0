import React, {Component} from 'react';

import {View, Text, TextInput, Button, Alert, StyleSheet} from 'react-native';
import Voice from 'react-native-voice';
import Tts from 'react-native-tts';
    
export default class Main extends Component {   
    constructor(props) {

        super(props)
        this.state = {texto:''} 
        Voice.onSpeechPartialResults = this.onSpeechPartialResults.bind(this);
        
    
      }
    
       onSpeechPartialResults(result){
            this.setState({
                ...this.state,
                texto:result.value
            });
       }    
       

     
  render() {
    return (
      <View style={estilo.tela} onTouchEnd={() => Voice.start('pt-BR')}>
        <TextInput editable={false} style={estilo.txt} onSpeechPartial>{this.state.texto}</TextInput>
      </View>
    );
  }
}



const estilo = StyleSheet.create({
    tela: {
        width: '100%', 
        height: '100%',
        backgroundColor: 'powderblue',
        justifyContent: 'center',
        alignItems: 'center'
        },

    txt: {
        fontWeight: 'bold',
    },
    

});

