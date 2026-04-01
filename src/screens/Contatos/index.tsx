import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';

export default function Contatos() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="auto" />

      <View style={styles.container}>

        <Text style={styles.title}>Contatos</Text>

        <View style={styles.card}>

          <View style={styles.item}>
            <FontAwesome name="phone" size={20} color="#2f5fd0" />
            <Text style={styles.text}>Telefone: 4002-8922</Text>
          </View>

          <View style={styles.item}>
            <FontAwesome name="whatsapp" size={20} color="#25D366" />
            <Text style={styles.text}>WhatsApp: (19) 9 2345-6875</Text>
          </View>

          <View style={styles.item}>
            <FontAwesome name="map-marker" size={24} color="red" />
            <Text style={styles.text}>
              Endereço: Rua Alegre, Nº 123, Sumaré-SP
            </Text>
          </View>

          <View style={styles.item}>
            <FontAwesome name="id-card" size={20} color="#555" />
            <Text style={styles.text}>CNPJ: 123.34352</Text>
          </View>

        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#a9ebf7fd', 
  },

  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333'
  },

  card: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,

    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 15,
  },

  text: {
    fontSize: 16,
    color: '#333',
    flexShrink: 1 
  },
});
