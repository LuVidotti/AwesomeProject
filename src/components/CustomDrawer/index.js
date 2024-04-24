import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { Text, View } from "react-native";
import estilos from "./estilos";

function CustomDrawer(props) {
    return (
        <DrawerContentScrollView style={estilos.menu}> 
            <View style={estilos.email}>
                <Text style={estilos.texto}>usuario@dominio.com</Text>
            </View>
            <DrawerItemList {...props} />
            <DrawerItem 
                label="Sair" 
                onPress={() => props.navigation.navigate("Login")}
                labelStyle={{color: "#FFFFFF", fontFamily: "AveriaLibre_400Regular"}}
            />
        </DrawerContentScrollView>
    )
}

export default CustomDrawer;