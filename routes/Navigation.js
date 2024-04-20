import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../src/pages/Home';
import NovaPesquisa from '../src/pages/NovaPesquisa';
import Login from '../src/pages/Login';
import CriarConta from '../src/pages/CriarConta';
import RecuperacaoSenha from '../src/pages/RecuperacaoSenha';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Home' component={Home}/>
        </Drawer.Navigator>
    )
}

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Login'
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "#2B1D62"
                    },
                    headerTintColor: "#573FBA",
                    headerTitleStyle: {
                        color: "#FFFFFF"
                    }
                }}
            >
                <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
                <Stack.Screen name='DrawerNavigator' component={DrawerNavigator} options={{headerShown: false}}/>
                <Stack.Screen name='Nova Conta' component={CriarConta}/>
                <Stack.Screen name='Nova Pesquisa' component={NovaPesquisa}/>
                <Stack.Screen name='Recuperação de Senha' component={RecuperacaoSenha}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;