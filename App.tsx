import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import Sobre from './src/screens/Contatos';
import Contatos from './src/screens/Contatos';
import Produtos from './src/screens/Produtos';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            title: 'Página inicial'
          }}
        />
        <Stack.Screen
          name='Contatos'
          component={Contatos}
        />
        <Stack.Screen
          name='Produtos'
          component={Produtos}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

