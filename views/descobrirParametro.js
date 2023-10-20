import { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { 
    Button,
    TextInput,
    Text
} from 'react-native-paper';
import { descobreParametro } from '../calcs/parametros';

export function DescobrirParametro(){

    const [values, setValues] = useState({
        capital: 0,
        periodoMeses: 0,
        taxaAoMes: 0,
        montante: 0
    })

    function handleFieldChange(name, text){
        setValues({
            ...values,
            [name]: text
        })
    }

    function calcularParametro(){
        const {capital, montante, taxa, tempo} = descobreParametro(
            values.capital,
            values.periodoMeses,
            values.taxaAoMes,
            values.montante
        )
        setValues({
            capital,
            montante,
            periodoMeses: tempo,
            taxaAoMes: taxa
        })
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text Text variant="bodyMedium">
                    Esta sessão serve para você calcular algum parametro que não possui, como por exemplo uma taxa de juros de um financiamento.
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder='0.00'
                    label="Capital"
                    mode='outlined'
                    value={values.capital}
                    keyboardType='numeric'
                    onChangeText={text=>handleFieldChange('capital', text)}
                    right={<TextInput.Icon icon="currency-usd" />}
                />
                <TextInput
                    style={styles.input}
                    placeholder='0.00'
                    label="Periodo (meses)"
                    mode='outlined'
                    value={values.periodoMeses}
                    keyboardType='numeric'
                    onChangeText={text=>handleFieldChange('periodoMeses', text)}
                    right={<TextInput.Icon icon="calendar-clock" />}
                />
                <TextInput
                    style={styles.input}
                    placeholder='0.00'
                    label="Taxa A.M"
                    mode='outlined'
                    value={values.taxaAoMes}
                    keyboardType='numeric'
                    onChangeText={text=>handleFieldChange('taxaAoMes', text)}
                    right={<TextInput.Icon icon="percent" />}
                />
                <TextInput
                    style={styles.input}
                    placeholder='0.00'
                    label="Montante"
                    mode='outlined'
                    value={values.montante}
                    keyboardType='numeric'
                    onChangeText={text=>handleFieldChange('montante', text)}
                    right={<TextInput.Icon icon="currency-usd" />}
                />
                <Button 
                    style={styles.button}
                    icon="check" mode="contained"
                    onPress={calcularParametro}
                    rippleColor={'#fff'}
                >
                    Calcular
                </Button>
            </View>
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 30,
        paddingRight: 30,
        marginTop: 30,
        justifyContent: 'center'
    },
    button: {
        borderRadius: 5,
        fontSize: 32,
        top: 30
    },
    input: {
        top: 10,
        bottom: 10
    }
})