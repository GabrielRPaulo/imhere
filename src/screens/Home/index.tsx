import { Text, View, TextInput } from "react-native"

import { styles } from './styles' ;

export default function Home(){
  return (
    <View style={styles.container}>

    <Text style={styles.eventName}>
      Evento
      </Text>

    <Text style={styles.eventDate}>
      Quinta-feira,14 de setembro de 2023
      </Text>

      <TextInput
      style={styles.input}
      placeholder="Nome do participante"
      placeholderTextColor='#6b6b6b'
      />

      </View>
  )
}
