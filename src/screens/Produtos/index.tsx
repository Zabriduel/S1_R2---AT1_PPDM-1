import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Pressable, Alert, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity, Image, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Sobre from '../Contatos';

export default function Produtos() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar style='auto' />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}>


                <ScrollView keyboardShouldPersistTaps='handled'>
                    <View>
                        <Image source={{ uri: 'https://m.media-amazon.com/images/I/71oevbiISHL._AC_SY450_.jpg' }} style={{ width: '100%', height: 200 }} resizeMode='contain'>
                        </Image>
                        <Text>Teclado gamer redragon</Text>
                        <Text>Valor: R$ 599,99</Text>
                        <Text>Pix: R$ 399,99</Text>
                        <Text style={styles.text}>Quantidade</Text>
                        <TextInput style={styles.input}></TextInput>
                        <Button title='Adicionar ao Carrinho' onPress={() => { console.log('Adcionado ao carrinho'); }
                        }></Button>
                    </View>
                    <View>
                        <Image source={{ uri: 'https://m.media-amazon.com/images/I/71oevbiISHL._AC_SY450_.jpg' }} style={{ width: '100%', height: 200 }} resizeMode='contain'>
                        </Image>
                        <Text>Teclado gamer redragon</Text>
                        <Text>Valor: R$ 599,99</Text>
                        <Text>Pix: R$ 399,99</Text>
                        <Text style={styles.text}>Quantidade</Text>
                        <TextInput style={styles.input}></TextInput>
                        <Button title='Adicionar ao Carrinho' onPress={() => { console.log('Adcionado ao carrinho'); }
                        }></Button>
                    </View>
                    <View>
                        <Image source={{ uri: 'https://m.media-amazon.com/images/I/71oevbiISHL._AC_SY450_.jpg' }} style={{ width: '100%', height: 200 }} resizeMode='contain'>
                        </Image>
                        <Text>Teclado gamer redragon</Text>
                        <Text>Valor: R$ 599,99</Text>
                        <Text>Pix: R$ 399,99</Text>
                        <Text style={styles.text}>Quantidade</Text>
                        <TextInput style={styles.input}></TextInput>
                        <Button title='Adicionar ao Carrinho' onPress={() => { console.log('Adcionado ao carrinho'); }
                        }></Button>
                    </View>
                    <View>
                        <Image source={{ uri: 'https://m.media-amazon.com/images/I/71oevbiISHL._AC_SY450_.jpg' }} style={{ width: '100%', height: 200 }} resizeMode='contain'>
                        </Image>
                        <Text>Teclado gamer redragon</Text>
                        <Text>Valor: R$ 599,99</Text>
                        <Text>Pix: R$ 399,99</Text>
                        <Text style={styles.text}>Quantidade</Text>
                        <TextInput style={styles.input}></TextInput>
                        <Button title='Adicionar ao Carrinho' onPress={() => { console.log('Adcionado ao carrinho'); }
                        }></Button>
                    </View>
                    <View>
                        <Image source={{ uri: 'https://m.media-amazon.com/images/I/71oevbiISHL._AC_SY450_.jpg' }} style={{ width: '100%', height: 200 }} resizeMode='contain'>
                        </Image>
                        <Text>Teclado gamer redragon</Text>
                        <Text>Valor: R$ 599,99</Text>
                        <Text>Pix: R$ 399,99</Text>
                        <Text style={styles.text}>Quantidade</Text>
                        <TextInput style={styles.input}></TextInput>
                        <Button title='Adicionar ao Carrinho' onPress={() => { console.log('Adcionado ao carrinho'); }
                        }></Button>
                    </View>
                </ScrollView>

            </KeyboardAvoidingView>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        // flexGrow: 1,
        // backgroundColor: '#fff',
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
