import React, { Component } from 'react';

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>CNPJ</th>
                <th>Remover</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    const linhas = props.clientes.map((linha, index) => {
        return (
            <tr key={index}>
                <td>{linha.nome}</td>
                <td>{linha.sobrenome}</td>
                <td>{linha.cnpj}</td>
                <td><button onClick = {() => {props.removeCliente(index) }} className="Retngulo-20">Remover</button></td>
            </tr>

        )
    });

    return(
        <tbody>
            {linhas}
        </tbody>
    );
}
class Tabela extends Component {
    render() {
        const { clientes, removeCliente } = this.props;

        return (
            <table className="centered highlight">
                <TableHead />
                <TableBody clientes = { clientes } removeCliente = {removeCliente} />
            </table>

        );
    }

}

export default Tabela;