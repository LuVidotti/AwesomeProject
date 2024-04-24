import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../src/pages/Home';
import NovaPesquisa from '../src/pages/NovaPesquisa';
import Login from '../src/pages/Login';
import CriarConta from '../src/pages/CriarConta';
import RecuperacaoSenha from '../src/pages/RecuperacaoSenha';
import CustomDrawer from '../src/components/CustomDrawer';
import ModificarPesquisa from '../src/pages/ModificarPesquisa';
import Opcoes from '../src/pages/Opcoes';
import ColetaDados from '../src/pages/ColetaDados';
import Agradecimento from '../src/pages/Agradecimento';
import Relatorio from '../src/pages/Relatorio';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerTitle: "",
                headerStyle: {
                    backgroundColor: "#2B1D62"
                },
                headerTintColor: "#FFFFFF",
                drawerActiveTintColor: "#FFFFFF",
                drawerLabelStyle: {
                    color: "#FFFFFF"
                }
            }}
            drawerContent={(props) => <CustomDrawer {...props}/>}
        >
            <Drawer.Screen name='Home' component={Home} options={{drawerLabelStyle: {fontFamily: "AveriaLibre_400Regular"}, drawerLabel: "Pesquisas"}}/>
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
                        color: "#FFFFFF",
                        fontFamily: "AveriaLibre_700Bold"
                    }
                }}
            >
                <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
                <Stack.Screen name='DrawerNavigator' component={DrawerNavigator} options={{headerShown: false}}/>
                <Stack.Screen name='Nova Conta' component={CriarConta}/>
                <Stack.Screen name='Nova Pesquisa' component={NovaPesquisa}/>
                <Stack.Screen name='Recuperação de Senha' component={RecuperacaoSenha}/>
                <Stack.Screen name="Modificar pesquisa" component={ModificarPesquisa}/>
                <Stack.Screen name='Opcoes' component={Opcoes}/>
                <Stack.Screen name='Coleta dados' component={ColetaDados} options={{headerShown: false}}/>
                <Stack.Screen name='Agradecimento' component={Agradecimento} options={{headerShown: false}}/>
                <Stack.Screen name='Relatório' component={Relatorio}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;