import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Pressable, Alert, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Foundation, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function Home() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar style='auto' />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}>


                <View style={styles.header}>
                    <Text style={styles.textoHeader}>Seja bem vindo(a) a ZabStore!</Text>

                    <Image source={{ uri: 'https://media.licdn.com/dms/image/v2/C4D0BAQGbY7O7Bt4P6Q/company-logo_200_200/company-logo_200_200/0/1678283713618?e=2147483647&v=beta&t=dXtSRXKiFC3Iab-2oeElJEtdl353jAQxx2TImw7D7oQ' }} style={{ width: '50%', height: 200, borderRadius: 100, marginTop: 20, marginBottom: 15 }} resizeMode='contain'></Image>

                    <Text style={styles.aboutTitle}>Um pouco sobre a gente</Text>
                    <Text style={styles.aboutText}>  A ZabStore é uma loja voltado ao mundo Geek, temos vários artigos de decorações, cartões de presente e acessórios, tudo para deixar o seu game mais rápido.</Text>
                </View>


                <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps='handled' showsVerticalScrollIndicator={false}  >

                    <View style={styles.navigation}>
                        <TouchableOpacity onPress={() => navigation.navigate('Produtos')} style={styles.button}>
                            <Foundation name='list-bullet' size={28} color="white" />
                            <Text style={{ color: 'white', fontSize: 18 }}>Produtos</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Contatos')} style={styles.button}>
                            <MaterialIcons name="contact-page" size={28} color="white" />
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
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    safeArea: {
        flex: 1,
        backgroundColor: '#a9ebf7fd',
    },
    header: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,

    },
    textoHeader: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#091272',
        width: '80%',
        height: 55,
        borderRadius: 10,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 10
    },
    navigation: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        width: '90%'
    },
    aboutTitle: {
        fontWeight: 'bold',
        fontSize: 24
    },
    aboutText: {
        width: '90%',
        fontSize: 16
    }

},
);
