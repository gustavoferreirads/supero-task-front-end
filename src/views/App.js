import React  from 'react';
import {Label} from 'react-bootstrap';
import logo from '../logo.svg';
import './App.css';
import ListTask from './task/list/ListTask';

export default function App() {
    return (
        <div className="app">
            <header className="app-header">
                <img src={logo} className="app-logo" alt="logo" />
                <h1 className="app-title">Gerenciador de tarefas</h1>
            </header>
            <div className="list-task col-md-6">
                <h3>
                    Minhas <Label>Tarefas</Label>
                </h3>
                <ListTask/>
            </div>
        </div>
    )
};
