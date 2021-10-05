import React from 'react';
import ReactDOM from 'react-dom';
import {Lista}  from './Lista';

const divRoot = document.querySelector('#root');
ReactDOM.render(<Lista   numElementos={100} /> , divRoot);

