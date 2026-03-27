import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Pressable, Alert, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

export default function Contatos() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Telefone: 4002-8922</Text>
      <Text> WhatsApp: 1912345687</Text>
      <Text> Endereço: Rua alegre, N° 123, Sumaré-SP</Text>
      <Text> CNPJ: 123.34352</Text>
      <Text> Somos uma empresa familiar</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#b0ffde',
    width: '95%',
    justifyContent: 'center',
    height: 48,
    alignItems: 'center',
    borderRadius: 10
  },
  text: {
    width: '95%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#d8d7de',
    backgroundColor: '#fafafa',
    borderRadius: 10,
    padding: 10,
    width: '95%',
    marginBottom: 10,
    marginTop: 5

  }
},
);
