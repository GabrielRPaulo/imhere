import React from "react";
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native"
import { styles } from './styles' ;
import { Participant } from "../../components/Participant";

export function Home(){
  const participants = ['Gabriel','Renato', 'Felps','ZK', 'Derick', 'Ricardo', 'Cups', 'Cake mob', 'Caio', 'Diogo'];

  function handleParticipantAdd (){
    if(participants.includes('Gabriel')){
      return Alert.alert("Participante existente","Já existe um participante cadastrado com este nome.")
    }
    console.log("Você clicou no botão de adicionar !!")
  }

  function handleParticipantRemove (name: string){
    Alert.alert("Remover",`Deseja remover o participante "${name}" da lista ??`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Deletado!')
      },
      {
        text: 'Não',
        style: 'cancel'
      },
    ])
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
    
    <FlatList
    
    data={participants}
    keyExtractor={item => item}
    renderItem={({ item })=>(
      <Participant 
        key={item}
        name={item}
        onRemove={() => handleParticipantRemove(item)}
     />
    )}
    showsVerticalScrollIndicator={false}
    ListEmptyComponent={() => (
      <Text style={styles.listEmptyText}>
        Chegou ninguem no evento?? Adicione participantes a sua lista de presença.
      </Text>
    )}
  />
    
    </View>
  )
}
