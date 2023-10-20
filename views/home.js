import { View } from 'react-native';
import { NavigationCard } from '../components';
import { GridContainer } from '../components';
import { 
    MaterialCommunityIcons,
    FontAwesome,
    MaterialIcons,
    FontAwesome5
 } from '@expo/vector-icons';
export function Home({navigation}){
    return (
        <View>
            <GridContainer>
                <NavigationCard
                    navigation={navigation}
                    description="Calculadora de investimento"
                    goto="Calcula Investimento"
                    icon={<MaterialCommunityIcons name="piggy-bank-outline" size={60} color="white" />}
                />
                <NavigationCard
                    navigation={navigation}
                    description="Calcula aplicação"
                    goto="Calcula Aplicação"
                    icon={<FontAwesome name="exchange" size={60} color="white" />}
                />
                <NavigationCard
                    navigation={navigation}
                    description="Amortização PRICE"
                    goto="Amortização PRICE"
                    icon={<MaterialIcons name="money" size={60} color="white" />}
                />
                <NavigationCard
                    navigation={navigation}
                    description="Amortização SAC"
                    goto="Amortização SAC"
                    icon={<MaterialIcons name="money-off" size={60} color="white" />}
                />
                <NavigationCard
                    navigation={navigation}
                    description="Descobrir parametro"
                    goto="Descobrir Parametro"
                    icon={<FontAwesome5 name="search-dollar" size={60} color="white" />}
                />
            </GridContainer>
        </View>
    )
}