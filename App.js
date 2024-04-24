import 'react-native-gesture-handler';
import Navigation from './routes/Navigation';
import { useFonts, AveriaLibre_400Regular, AveriaLibre_700Bold } from "@expo-google-fonts/averia-libre";

export default function App() {
  const [fontsLoaded] = useFonts({
    AveriaLibre_400Regular,
    AveriaLibre_700Bold
  })

  if(!fontsLoaded) {
    return null;
  }

  return (
    <Navigation />
  );
}
