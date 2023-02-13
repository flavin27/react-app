import React, { Component } from "react";

export default class State extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ligado: false,
            numero: 0
        }
    }
    botao() {
        this.setState({ligado: !this.state.ligado})
    }
    render() {
        return(
            <div>
                <p>LIgado: {this.state.ligado ? 'sim':'nao'}</p>
                <p>Quantidade: {this.state.numero}</p>
                <button onClick= {() => this.botao()}>
                    {this.state.ligado ? 'desligar' :'ligar'}
                </button>
            </div>
        )
    }
}