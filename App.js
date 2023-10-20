import { StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { 
  Home,
  CalcularInvestimento,
  CalcularAplicacao,
  CalcularAmortizacaoPrice,
  CalcularAmortizacaoSac,
  DescobrirParametro
} from './views';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Calcula Investimento' component={CalcularInvestimento} />
          <Stack.Screen name='Calcula Aplicação' component={CalcularAplicacao} />
          <Stack.Screen name='Amortização PRICE' component={CalcularAmortizacaoPrice} />
          <Stack.Screen name='Amortização SAC' component={CalcularAmortizacaoSac} />
          <Stack.Screen name='Descobrir Parametro' component={DescobrirParametro} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>  
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 35 : 0
  }
});