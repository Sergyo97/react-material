import React, { Component } from 'react';
import { Login } from "./components/Login";
import { TodoApp } from "./components/TodoApp";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import logo from '../src/logo.svg';
import './App.css';

const View = () => (
    <div>
        {localStorage.getItem('isLoggedIn') === 'true' ? <TodoApp /> : <Login />}
    </div>
);

export default class App extends Component {

    constructor(props) {
        super(props)
        localStorage.setItem('test', 'test');
    }

    render() {

        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">TODO React App</h1>
                    </header>
                    <div>
                        <Switch>
                            <Route exact path='/' component={View} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }

}
