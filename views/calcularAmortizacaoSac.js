import { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { 
    Button,
    TextInput,
    Text,
    DataTable
} from 'react-native-paper';
import { calculaAmortizacaoSAC } from '../calcs/amortizacao';

export function CalcularAmortizacaoSac(){
    const [values, setValues] = useState({ saldoDevedor: 0, totalParcelas: 0, taxa: 0 })
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

    function calcularAmortizacao(){
        const resultados = calculaAmortizacaoSAC(
            values.saldoDevedor,
            values.totalParcelas,
            values.taxa
        )
        setResultado(resultados)
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text variant="bodyMedium">
                    Esta sessão serve para você calcular a amortização na modalidade SAC, onde o valor da parcela é decrescente
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder='0.00'
                    label="Saldo devedor"
                    mode='outlined'
                    value={values.saldoDevedor}
                    keyboardType='numeric'
                    onChangeText={text=>handleFieldChange('saldoDevedor', text)}
                    right={<TextInput.Icon icon="currency-usd" />}
                />
                <TextInput
                    style={styles.input}
                    placeholder='0.00'
                    label="Total de parcelas"
                    mode='outlined'
                    value={values.totalParcelas}
                    keyboardType='numeric'
                    onChangeText={text=>handleFieldChange('totalParcelas', text)}
                    right={<TextInput.Icon icon="calendar-clock" />}
                />
                <TextInput
                    style={styles.input}
                    placeholder='0.00'
                    label="Taxa de juros"
                    mode='outlined'
                    value={values.taxa}
                    keyboardType='numeric'
                    onChangeText={text=>handleFieldChange('taxa', text)}
                    right={<TextInput.Icon icon="percent" />}
                />
                <Button 
                    style={styles.button}
                    icon="check" mode="contained"
                    onPress={calcularAmortizacao}
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
                            Segue abaixo a tabela de amortização
                        </Text>
                        <DataTable>
                            <DataTable.Header>
                                <DataTable.Title>Mes</DataTable.Title>
                                <DataTable.Title>Prestação</DataTable.Title>
                                <DataTable.Title>Juros</DataTable.Title>
                                <DataTable.Title>Amortização</DataTable.Title>
                                <DataTable.Title>Saldo devedor</DataTable.Title>
                            </DataTable.Header>
                            {
                                resultado.slice((pagination.page * pagination.itemsPerPage), Math.min( (pagination.page+1)* pagination.itemsPerPage, resultado.length ) ).map((mes,index)=>(
                                    <DataTable.Row key={index}>
                                        <DataTable.Cell>{mes.mes}</DataTable.Cell>
                                        <DataTable.Cell>{mes.prestacao.toFixed(2)}</DataTable.Cell>
                                        <DataTable.Cell>{mes.juro.toFixed(2)}</DataTable.Cell>
                                        <DataTable.Cell>{mes.amortizacao.toFixed(2)}</DataTable.Cell>
                                        <DataTable.Cell>{mes.saldoDevedor.toFixed(2)}</DataTable.Cell>
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