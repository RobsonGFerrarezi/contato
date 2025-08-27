import { StyleSheet } from 'react-native';

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