import { Component } from "react";
import './styles.css'

export default class Card extends Component {
    render() {
        return (
            <section>
                <p>Name: {this.props.name}</p>
            </section>
        )
    }
}
