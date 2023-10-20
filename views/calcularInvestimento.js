import { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { 
    Button,
    TextInput,
    Text,
    DataTable
} from 'react-native-paper';
import { calculaAplicacaoSimples } from '../calcs/investimento';

export function CalcularInvestimento(){

    const [values, setValues] = useState({ valor: 0, taxaAoMes: 0, periodoMeses: 0 })
    const [resultado, setResultado] = useState([])
    const [pagination, setPagination] = useState({
        page: 0,
        numberOfItemsPerPageList: [5,6,8,12],
        itemsPerPage: 5
    })

    function handleFieldChange(name, text){
        setValues({
            ...values,
            [name]: text
        })
    }

    function calcularJuro(){
        const resultados = calculaAplicacaoSimples(
            values.valor,
            values.taxaAoMes,
            values.periodoMeses
        )
        setResultado(resultados)
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text variant="bodyMedium">
                    Esta sessão serve para você calcular a quantia monetária de um juros sobre um determinado valor,
                    basta preencher os campos e clicar em calcular e sairá o resultado com o capital obtido ao final
                    do periodo
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder='0.00'
                    label="Valor aplicado"
                    mode='outlined'
                    value={values.valor}
                    keyboardType='numeric'
                    onChangeText={text=>handleFieldChange('valor', text)}
                    right={<TextInput.Icon icon="currency-usd" />}
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
                    label="Periodo (Meses)"
                    mode='outlined'
                    value={values.periodoMeses}
                    keyboardType='numeric'
                    onChangeText={text=>handleFieldChange('periodoMeses', text)}
                    right={<TextInput.Icon icon="calendar-clock" />}
                />
                <Button 
                    style={styles.button}
                    icon="check" mode="contained"
                    onPress={calcularJuro}
                    rippleColor={'#fff'}
                >
                    Calcular
                </Button>
                
            </View>
            <View style={styles.container}>
            {
                    resultado.length>0 &&
                    <View style={{marginTop: 50, marginBottom: 50}}>
                        <Text variant="headlineSmall">
                            Resultado do calculo
                        </Text>
                        <Text variant="bodyMedium">
                            Você terá R$ {resultado[resultado.length-1].montante.toFixed(2)} ao final do periodo de {resultado.length} Meses
                        </Text>
                        <DataTable>
                            <DataTable.Header>
                                <DataTable.Title>Mes</DataTable.Title>
                                <DataTable.Title>Capital</DataTable.Title>
                                <DataTable.Title>Taxa</DataTable.Title>
                                <DataTable.Title>Montante</DataTable.Title>
                            </DataTable.Header>
                            {
                                resultado.slice((pagination.page * pagination.itemsPerPage), Math.min( (pagination.page+1)* pagination.itemsPerPage, resultado.length ) ).map((mes,index)=>(
                                    <DataTable.Row key={index}>
                                        <DataTable.Cell>{mes.mes}</DataTable.Cell>
                                        <DataTable.Cell>{mes.capital.toFixed(2)}</DataTable.Cell>
                                        <DataTable.Cell>{mes.taxa.toFixed(2)}</DataTable.Cell>
                                        <DataTable.Cell>{mes.montante.toFixed(2)}</DataTable.Cell>
                                    </DataTable.Row>

                                ))
                            }
                            <DataTable.Pagination
                                page={pagination.page}
                                numberOfPages={Math.ceil(resultado.length/pagination.itemsPerPage)}
                                onPageChange={(page)=>{setPagination({...pagination, page})}}
                                numberOfItemsPerPageList={pagination.numberOfItemsPerPageList}
                                onItemsPerPageChange={(itemsPerPage)=>{setPagination({...pagination, itemsPerPage})}}
                                label={`de ${(pagination.page * pagination.itemsPerPage)+1} até ${Math.min( (pagination.page+1)* pagination.itemsPerPage, resultado.length ) }`}
                                showFastPaginationControls
                                selectPageDropdownLabel={'Rows per page'}
                            />
                        </DataTable>
                    </View>
                }
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