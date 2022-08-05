import React from 'react';
import './index.css';
import App from './App';
import {createRoot} from "react-dom/client";

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <style>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            @import url('https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova&display=swap');
        </style>
        <App/>
    </React.StrictMode>,
);