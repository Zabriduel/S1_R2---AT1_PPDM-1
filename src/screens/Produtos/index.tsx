import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Alert, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function Produtos() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar style='auto' />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}>


                <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps='handled'>
                    <View style={styles.cards}>
                        <Image source={{ uri: 'https://m.media-amazon.com/images/I/71oevbiISHL._AC_SY450_.jpg' }} style={styles.image} resizeMode='contain'>
                        </Image>
                        <Text style={styles.titleItem}>Teclado gamer redragon</Text>

                        <View style={styles.values}>

                            <FontAwesome5 name="money-bill-alt" size={24} color="black" />
                            <Text> Valor: R$ 599,99</Text>
                        </View>

                        <View style={styles.values}>
                            <MaterialIcons name="pix" size={24} color="black" />
                            <Text>Pix: R$ 399,99</Text>
                        </View>


                        <View style={styles.quantityContainer}>
                            <Text style={styles.label}>Quantidade</Text>
                            <TextInput
                                style={styles.input} keyboardType="numeric" placeholder="Digite a quantidade" placeholderTextColor="#999" />
                        </View>

                        <TouchableOpacity style={styles.cartButton} onPress={() => Alert.alert("Sucesso 🛒", "Produto adicionado ao carrinho!", [{ text: "OK" }])}>
                            <FontAwesome5 name="shopping-cart" size={20} color="#fff" />
                            <Text style={styles.cartText}>Adicionar ao Carrinho</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.cards}>
                        <Image source={{ uri: 'https://m.media-amazon.com/images/I/511r8v+XZnL._AC_SX679_.jpg' }} style={styles.image} resizeMode='contain'>
                        </Image>
                        <Text style={styles.titleItem}>Funko POP! Satoru Gojo</Text>

                        <View style={styles.values}>

                            <FontAwesome5 name="money-bill-alt" size={24} color="black" />
                            <Text> Valor: R$ 300,00</Text>
                        </View>

                        <View style={styles.values}>
                            <MaterialIcons name="pix" size={24} color="black" />
                            <Text>Pix: R$ 150,00</Text>
                        </View>


                        <View style={styles.quantityContainer}>
                            <Text style={styles.label}>Quantidade</Text>
                            <TextInput
                                style={styles.input} keyboardType="numeric" placeholder="Digite a quantidade" placeholderTextColor="#999" />
                        </View>

                        <TouchableOpacity style={styles.cartButton} onPress={() => Alert.alert("Sucesso 🛒", "Produto adicionado ao carrinho!", [{ text: "OK" }])}>
                            <FontAwesome5 name="shopping-cart" size={20} color="#fff" />
                            <Text style={styles.cartText}>Adicionar ao Carrinho</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.cards}>
                        <Image source={{ uri: 'https://m.magazineluiza.com.br/a-static/420x420/livro-box-demon-slayer-vols-1-ao-23/artclubbooks/1000420037/b452eb73fa9555eec9217f60db9041d5.jpg' }} style={styles.image} resizeMode='contain'>
                        </Image>
                        <Text style={styles.titleItem}>Livro - Box Demon Slayer Vols. 1 ao 23</Text>

                        <View style={styles.values}>

                            <FontAwesome5 name="money-bill-alt" size={24} color="black" />
                            <Text> Valor: R$ 999,99</Text>
                        </View>

                        <View style={styles.values}>
                            <MaterialIcons name="pix" size={24} color="black" />
                            <Text>Pix: R$ 699,99</Text>
                        </View>


                        <View style={styles.quantityContainer}>
                            <Text style={styles.label}>Quantidade</Text>
                            <TextInput
                                style={styles.input} keyboardType="numeric" placeholder="Digite a quantidade" placeholderTextColor="#999" />
                        </View>

                        <TouchableOpacity style={styles.cartButton} onPress={() => Alert.alert("Sucesso 🛒", "Produto adicionado ao carrinho!", [{ text: "OK" }])}>
                            <FontAwesome5 name="shopping-cart" size={20} color="#fff" />
                            <Text style={styles.cartText}>Adicionar ao Carrinho</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.cards}>
                        <Image source={{ uri: 'https://tfcprw.vtexassets.com/arquivos/ids/423365-1200-auto?v=639088451459970000&width=1200&height=auto&aspect=true' }} style={styles.image} resizeMode='contain'>
                        </Image>
                        <Text style={styles.titleItem}>Meia Pé Disney Pateta</Text>

                        <View style={styles.values}>

                            <FontAwesome5 name="money-bill-alt" size={24} color="black" />
                            <Text> Valor: R$ 50,99</Text>
                        </View>

                        <View style={styles.values}>
                            <MaterialIcons name="pix" size={24} color="black" />
                            <Text>Pix: R$ 25,00</Text>
                        </View>


                        <View style={styles.quantityContainer}>
                            <Text style={styles.label}>Quantidade</Text>
                            <TextInput
                                style={styles.input} keyboardType="numeric" placeholder="Digite a quantidade" placeholderTextColor="#999" />
                        </View>

                        <TouchableOpacity style={styles.cartButton} onPress={() => Alert.alert("Sucesso 🛒", "Produto adicionado ao carrinho!", [{ text: "OK" }])}>
                            <FontAwesome5 name="shopping-cart" size={20} color="#fff" />
                            <Text style={styles.cartText}>Adicionar ao Carrinho</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.cards}>
                        <Image source={{ uri: 'https://http2.mlstatic.com/D_NQ_NP_2X_802050-MLA100021144061_122025-F.webp' }} style={styles.image} resizeMode='contain'>
                        </Image>
                        <Text style={styles.titleItem}>Caderno Inteligente Turma Da Mônica Grande</Text>

                        <View style={styles.values}>

                            <FontAwesome5 name="money-bill-alt" size={24} color="black" />
                            <Text> Valor: R$ 85,67</Text>
                        </View>

                        <View style={styles.values}>
                            <MaterialIcons name="pix" size={24} color="black" />
                            <Text>Pix: R$ 64,50</Text>
                        </View>


                        <View style={styles.quantityContainer}>
                            <Text style={styles.label}>Quantidade</Text>
                            <TextInput
                                style={styles.input} keyboardType="numeric" placeholder="Digite a quantidade" placeholderTextColor="#999" />
                        </View>

                        <TouchableOpacity style={styles.cartButton} onPress={() => Alert.alert("Sucesso 🛒", "Produto adicionado ao carrinho!", [{ text: "OK" }])}>
                            <FontAwesome5 name="shopping-cart" size={20} color="#fff" />
                            <Text style={styles.cartText}>Adicionar ao Carrinho</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.cards}>
                        <Image source={{ uri: 'https://lojabagaggio.vtexassets.com/arquivos/ids/2385382-600-740/0239428651001---MOCHILA-C-2-RODAS-CARROS-26P--VERMELHO-U--1-.jpg?v=639035694434100000' }} style={styles.image} resizeMode='contain'>
                        </Image>
                        <Text style={styles.titleItem}>Mochila de Rodinhas Unissex Carros Vermelha</Text>

                        <View style={styles.values}>

                            <FontAwesome5 name="money-bill-alt" size={24} color="black" />
                            <Text> Valor: R$  399,90 </Text>
                        </View>

                        <View style={styles.values}>
                            <MaterialIcons name="pix" size={24} color="black" />
                            <Text>Pix: R$ 379,90 </Text>
                        </View>


                        <View style={styles.quantityContainer}>
                            <Text style={styles.label}>Quantidade</Text>
                            <TextInput
                                style={styles.input} keyboardType="numeric" placeholder="Digite a quantidade" placeholderTextColor="#999" />
                        </View>

                        <TouchableOpacity style={styles.cartButton} onPress={() => Alert.alert("Sucesso 🛒", "Produto adicionado ao carrinho!", [{ text: "OK" }])}>
                            <FontAwesome5 name="shopping-cart" size={20} color="#fff" />
                            <Text style={styles.cartText}>Adicionar ao Carrinho</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>

            </KeyboardAvoidingView>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    safeArea: {
        flex: 1,
        backgroundColor: '#a9ebf7fd',
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
        width: '80%',
    },
    cards: {
        width: '90%',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 15,
        margin: 10
    },
    image: {
        width: '70%',
        height: 200
    },
    titleItem: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    values: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        marginTop: 5
    },
    cartButton: {
        flexDirection: 'row',
        backgroundColor: '#2f5fd0',
        width: '90%',
        height: 50,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        marginTop: 10
    },

    cartText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    quantityContainer: {
        width: '90%',
        marginTop: 15,
    },

    label: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 5,
        color: '#333'
    },

    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#f9f9f9',
        borderRadius: 12,
        padding: 12,
        width: '100%',
        fontSize: 16
    },
},
);
