import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native"
import { styles } from './styles' ;
import { Participant } from "../../components/Participant";

export function Home(){

  function handleParticipantAdd (){
    console.log("Você clicou no botão de adicionar !!")
  }

  function handleParticipantRemove (name: string){
    console.log(`Você removeu o participante: ${name} !!`);
    
  }
  return (
  <View style={styles.container}>

    <Text style={styles.eventName}>
      Evento
    </Text>

    <Text style={styles.eventDate}>
      Quinta-feira,14 de setembro de 2023
    </Text>

    <View style={styles.form}>
      <TextInput
      style={styles.input}
      placeholder="Nome do participante"
      placeholderTextColor='#6b6b6b'
      />

      <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
        <Text style={styles.buttonText}>
          +
        </Text>
      </TouchableOpacity>
    </View>
    
    <Participant name="Gabriel" onRemove={() => handleParticipantRemove("Gabriel")} />
    <Participant name="Paulo" onRemove={handleParticipantRemove}/>
    


    </View>
  )
}
