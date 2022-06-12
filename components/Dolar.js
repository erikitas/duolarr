import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Dolar(props){
  return (

	 < >
	  <Text style={styles.texto}>Compra: {props.data.bid}</Text>
	  <Text style={styles.texto}>Venda: {props.data.ask} </Text>
	  <Text style={styles.texto}>Variação: {props.data.varBid} </Text>
	  <Text style={styles.texto}>Máximo: {props.data.high}</Text>
	  <Text style={styles.texto}>Mínimo: {props.data.low} </Text>
	 </>

  );
}

const styles = StyleSheet.create({
	texto:{
		color: '#11324D',
		fontSize: 20,
		padding: 6,
	}
}); 