import React, {useState} from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";

import axios from "axios";

export default function PedidoScreen() {
    const [nome, setNome] = useState("");
    const [pedido, setPedido] = useState("");
    const [valor, setValor] = useState("");

    const enviarPedido = async () => {
        try {
            const response = await axios.post("http://10.10.104.46:3000/pedidos/novo", {
                nome_cliente: nome,
                pedido: pedido,
                valor_total: Number(valor)
            });

            Alert.alert("Sucesso", `Pedido criado! Pontos ganhos: ${response.data.pontos}`);
        } catch (error) {
            Alert.alert("Erro", "Não foi possível enviar o pedido.");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tempero da Vó</Text>

            <TextInput
                style={styles.input}
                placeholder="Seu nome"
                value={nome}
                onChangeText={setNome}
            />

            <TextInput
                style={styles.input}
                placeholder="Seu pedido"
                value={pedido}
                onChangeText={setPedido}
            />

            <TextInput
                style={styles.input}
                placeholder="Valor total"
                value={valor}
                onChangeText={setValor}
                keyboardType="numeric"
            />

            <Button title="Finalizar Pedido" onPress={enviarPedido} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        justifyContent: "center",
    },

    title: {
        fontSize: 28,
        marginBottom: 20,
        textAlign: "center",
    },

    input: {
        borderWidth: 1,
        borderRadius: 8,
        padding: 12,
        marginBottom: 15,
    },
});