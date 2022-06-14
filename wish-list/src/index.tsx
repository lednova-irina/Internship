import ReactDOM from 'react-dom/client';
import './styles/main.scss';
import './styles/wishForm.scss';
import './styles/navbar.scss';
import './styles/wishList.scss';
import React from 'react';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(<App />);
