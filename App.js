import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Alert, TextInput, TouchableOpacity} from 'react-native';
import { useState } from 'react';
///import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import iconAgenda from './assets/agenda.png';



export default function App() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');

  function limpar(){
    setNome('');
    setTelefone('');
  }

  async function salvar(){
    const contato = {nome, telefone};
    if(nome.length === 0 || telefone.length === 0){
      Alert.alert("Preencha os campos corretamente!");
      return;
    }
    const stringJson = JSON.stringify(contato);
    await AsyncStorage.setItem("contato", stringJson);
    Alert.alert(`Contato ${nome} - ${telefone} salvo com sucesso!`);
    Limpar();
  }
  
  async function carregar() {
    const stringJson = await AsyncStorage.getItem("contato");
    if(stringJson !== null){
      const contato = JSON.parse(stringJson);
      setNome(contato.nome);
      setTelefone(contato.telefone);
    } else {
      Alert.alert("Nenhum contato salvo!");
    }
  }


  return (
    <View style={styles.container}>
      <Image source={iconAgenda} style={styles.imagem}></Image>
      <Text style={styles.title}>Agenda de contatos:</Text>
      

      <View style={styles.cadastro}>
        <View style={styles.nome}>
          <Text style={styles.cadTexto}>Nome:</Text>
          <TextInput style={styles.cadInput}
            keyboardType = 'default'
            onChangeText = {(text) => setNome(text)}
            value  = {nome}
          />
        </View>
        <View style={styles.telefone}>
          <Text style={styles.cadTexto}>Telefone:</Text>
          <TextInput style={styles.cadInput}
            keyboardType = 'numeric'
            onChangeText = {(text) => setTelefone(text)}
            value  = {telefone}
          />    
        </View>
      </View>

      <View style={styles.botoes}>
        <TouchableOpacity onPress={salvar} style={styles.botao1}><Text style={styles.textoBotao}>Salvar</Text></TouchableOpacity>
        <TouchableOpacity onPress={limpar} style={styles.botao2}><FontAwesome5 name="broom" size={24} color="black" /></TouchableOpacity>
        <TouchableOpacity onPress={carregar} style={styles.botao1}><Text style={styles.textoBotao}>Carregar</Text></TouchableOpacity>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    width: '90%',
    textAlign: 'center',
    marginBottom: 20,
    backgroundColor: '#ddd',
  },
  cadastro: {
    width: '90%',
    flexDirection: 'row',
  },
  nome: {
    flex: 1,
    marginRight: 10,
    width: '50%',
  },
  telefone: {
    flex: 1,
    width: '50%',
  },
  cadTexto: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cadInput: {
    borderBottomWidth: 2,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 20,
    backgroundColor: '#e8e5e3',
  },
  botoes: {
    flexDirection: 'row',
    marginTop: 20,
    width: '90%',
    justifyContent: 'space-around',
    backgroundColor: '#e8e5e3',
  },
  botao1: {
    padding: 15,
    borderRadius: 10,
    width: '40%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
  botao2: {
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBotao: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  imagem: {
    width: 50,
    height: 50,
    marginBottom: 15
  }
});
