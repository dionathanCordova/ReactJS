import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import First from './components/First';
import {Node, ReactCurso} from './components/Doiscomponents' 
import Pai from './components/pai';
// import * as serviceWorker from './serviceWorker';
import Galeria from './components/galeria';

import ComponentesClasse from './components/ComponentesClasse'
import Contador from './components/Contador'
import Hooks from './components/hook'

ReactDOM.render(
    <div>
        <Contador curso="ReactJs Avançado"/>
        <ComponentesClasse curso="ReactJs"/>
        <Hooks />
    </div>,
    document.getElementById('root')
);

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
