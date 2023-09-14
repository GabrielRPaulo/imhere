import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
      backgroundColor: "#000000",
      flex: 1,
      padding: 24
    },
    eventName: {
      color: '#FFF',
        fontSize:24,
        fontWeight: 'bold',
        marginTop: 48  
    },
    eventDate: {
      color: '#6b6b6b',
      fontSize:16
    },
    input: {
        height: 56,
        backgroundColor: "#1F1E25",
        color: '#FFFFFF',
        borderRadius: 9,
        marginTop: 20 ,
        padding: 10,
        fontSize: 15,
    }
});