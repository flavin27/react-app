import './App.css';
import { Component } from 'react';
import Header from './components/header/Index'
import Card from './components/Card/index'
import Box from './components/Box';
import State from './components/State';



export default class App extends Component {
    render() {
        return (
            <>
                <Header/>
                <Card name='flavio'/>
                <Box>
                    <h1>doisaidoasidso</h1>
                </Box>
                <State/>
            </>
        )
    }
}
