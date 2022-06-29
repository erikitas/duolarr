import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity  } from 'react-native';
import Dolar from './components/Dolar';
import Api from './components/Api';

export default function App() {

	const [dolar, setDolar] = useState(0);
	const [inputCep, setInputCep] = useState(0);

async function carregaDolar(){
	const response = await Api.get('json/last/USD-BRL');
	setDolar(response.data.USDBRL);
}



  return (

    <View style={styles.container}>
	 <View style={styles.bloco}>

		  <Text style={styles.textobloco}>
			  Conversor de moedas:
		  </Text>

		  <TouchableOpacity  
			  onPress={carregaDolar}
				  style={styles.botao}>
				  <Text style={styles.textobotao}>Dolar para Real</Text>

			  </TouchableOpacity>
				  

		 		<Dolar data={dolar} />

		  </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    backgroundColor: '#B7CADB',
    alignItems: 'center',
    justifyContent: 'center',
  },

	bloco: {
    alignItems: 'center',
    justifyContent: 'center',
	width: '30%',
	backgroundColor: '#92A9BD',
    borderRadius: 5,
	},

	input: {
	width: '80%',	
	color: '#fff',
	borderBottomWidth:1,
},

	textobloco: {
		color: '#fff',
		fontSize: 30,
		padding: 20,
	},

	botao: {
		padding: 20 ,
	},

	textobotao:{
		color: '#fff',
		fontSize: 25,

	},

}); 