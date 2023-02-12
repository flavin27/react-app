import React, { Component } from "react";

export default class Box extends Component {
    render() {
        return(
            <>
                <h1>A caixa infinita</h1>,
                {this.props.children}
            </>
        )
    }
}
