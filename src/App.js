import React, { Component, Fragment } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Tabela from './Tabela';
import Form from './Formulario';
import Header from './Header';
import PopUp from './PopUp';

class App extends Component {

  state = {
    clientes: [
      {
        nome: 'Paulo',
        sobrenome: 'Silva',
        cnpj: '03366127000117'
      },
      {
        nome: 'Daniel',
        sobrenome: 'Neves',
        cnpj: '19655470000111'
      },
      {
        nome: 'Marcos',
        sobrenome: 'Dias',
        cnpj: '98918133000146'
      }
    ],
  };

  removeCliente = index => {
    const { clientes } = this.state;

    this.setState(
      {
        clientes: clientes.filter((cliente, posAtual) => {
          return posAtual !== index;
        }),
      }
    );
    PopUp.exibeMensagem('success', "Cliente removido com sucesso");
  }

  escutadorDeSubmit = cliente => {
    this.setState({ clientes: [...this.state.clientes, cliente] });
    PopUp.exibeMensagem('success', "Cliente adicionado com sucesso");
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
          <h1>Veja seus boletos DAS na hora com a  DicasMEI!</h1>
          <h2>Crie e remova as informações abaixo.</h2>
          <Form escutadorDeSubmit={this.escutadorDeSubmit} />
          <Tabela clientes={this.state.clientes} removeCliente={this.removeCliente} />
        </div>
      </Fragment>
    );
  }
}

export default App;