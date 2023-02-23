import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';

export function App() {
  const [tab, setTab] = useState('intro');

  return (
    <div className="App">
      <Header />
      App
    </div>
  );
}
