import './main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.jsx'
import Show from './components/ShowView.jsx'

ReactDOM.render(<Header />, document.getElementById('app'));
ReactDOM.render(<Show />, document.getElementById('show'))
