import React, { Component } from 'react';
import FormValidator from './FormValidator';
import PopUp  from './PopUp';


class Formulario extends Component {

    constructor(props) {
        super(props);

        this.validador = new FormValidator([
            {
                campo: 'nome',
                metodo: 'isEmpty',
                validoQuando: false,
                mensagem: 'Entre com um nome'
            },
            {
                campo: 'sobrenome',
                metodo: 'isEmpty',
                validoQuando: false,
                mensagem: 'Entre com um sobrenome'
            },
            {
                campo: 'cnpj',
                metodo: 'isInt',
                args: [{ min: 0, max: 999999999999 }],
                validoQuando: true,
                mensagem: 'Entre com um valor numérico'
            }
        ]);

        this.stateInicial = {
            nome: '',
            sobrenome: '',
            cnpj: '',
            validacao: this.validador.valido(),
        }

        this.state = this.stateInicial;
    }

    escutadorDeInput = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    submitFormulario = () => {

        const validacao = this.validador.valida(this.state);
    
        if(validacao.isValid) {
            this.props.escutadorDeSubmit(this.state);
            this.setState(this.stateInicial);
        }else{
            const {nome, sobrenome, cnpj} = validacao;
            const campos = [nome, sobrenome, cnpj];
    
            const camposInvalidos = campos.filter(elem => {
                return elem.isInvalid;
            });
            camposInvalidos.forEach(campo => {
                PopUp.exibeMensagem('error', campo.message)
            });
        }
    }

    render() {

        const { nome, sobrenome, cnpj } = this.state;

        return (
            <form>
                <div className="row">
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="nome">Nome</label>
                        <input
                            id="nome"
                            type="text"
                            name="nome"
                            value={nome}
                            onChange={this.escutadorDeInput}
                        />
                    </div>
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="sobrenome">Sobrenome</label>
                        <input
                            id="sobrenome"
                            type="text"
                            name="sobrenome"
                            value={sobrenome}
                            onChange={this.escutadorDeInput}
                        />

                    </div>
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="cnpj">CNPJ</label>
                        <input
                            id="cnpj"
                            type="text"
                            name="cnpj"
                            value={cnpj}
                            onChange={this.escutadorDeInput}
                        />
                    </div>
                </div>
                <button onClick={this.submitFormulario} type="button" className="Retngulo-20">Salvar
                </button>
            </form>

        )

    }
}

export default Formulario;