import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
      flex: 1,
      justifyContent:'center',
      alignItems: 'flex-start',
      width: '100%',
      padding: 5
    },

    titulo: {
      fontSize: 28,
      textAlign: 'center'
  
    },

    botao: {
      width: '100%',
      backgroundColor: '#FC0',
      padding: 15,
      marginTop: 15,
      borderRadius: 15
    },

    text: {
      fontSize: 18,
      color: '#FFF'
    },

    input: {
      width: '100%',
      padding: 15,
      backgroundColor: '#CCC',
      borderRadius: 15,
      marginTop: 15
    }
  
  });

  export default styles;