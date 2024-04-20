import { Button, Text, View } from "react-native";

function Home({ navigation }) {
    return (
        <View>
            <Text>Bem vindo a home page</Text>
            <Button onPress={() => navigation.navigate("Nova Pesquisa")} title="Nova pesquisa"/>
        </View>
    )
}

export default Home;