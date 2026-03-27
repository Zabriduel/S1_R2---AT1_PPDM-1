import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Pressable, Alert, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, FontAwesome, Foundation, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Contatos from '../Contatos';
import Produtos from '../Produtos';

export default function Home() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar style='auto' />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}>
                <View style={styles.header}>
                    <Image source={{ uri: 'https://img.icons8.com/stickers/1200/shop--v1.jpg' }} style={styles.imagem} resizeMode='contain'>
                    </Image>
                    <Text style={styles.textoHeader}>Seja bem vindo(a) a ZabStore!</Text>
                    {/* A ZabStore é uma loja voltado ao mundo Geek, temos vários artigos de decorações, cartões de presente e acessórios, tudo para deixar o seu game mais rápido. */}
                </View>


                <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps='handled'>

                    {/* <View style={styles.container}> */}

                    <Image source={{ uri: 'https://i.pinimg.com/736x/6f/d4/94/6fd49408af6003bc03a65f8c7b5155d6.jpg' }} style={{ width: '50%', height: 200, borderRadius: 100 }} resizeMode='contain'></Image>

                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Olá Gabs!</Text>


                    <View style={styles.navigation}>
                        <TouchableOpacity onPress={() => navigation.navigate('Produtos')} style={styles.button}>
                            <Foundation name='list-bullet'></Foundation>
                            <Text style={{ color: 'white', fontSize: 18 }}>Produtos</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Contatos')} style={styles.button}>
                            <MaterialIcons name="contact-page" size={24} color="black" />
                            <Text style={{ color: 'white', fontSize: 18 }}>Contatos</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>


            </KeyboardAvoidingView>
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
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    imagem: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    textoHeader: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#1538ff',
        width: '40%',
        height: 48,
        borderRadius: 10,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',

    },
    navigation: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }

},
);
