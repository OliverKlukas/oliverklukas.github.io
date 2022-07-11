import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <style>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            @import url('https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova&display=swap');
        </style>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);