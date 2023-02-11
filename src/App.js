import './App.css';
import { Component } from 'react';
import Header from './components/header/Index'
import Card from './components/Card/index'



export default class App extends Component {
    render() {
        return (
            <>
                <Header/>
                <Card name='flavio'/>
            </>
        )
    }
}
