import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Tabs } from './components/Tabs';

export function App() {
  const [tab, setTab] = useState('intro');

  return (
    <div className="App">
      <Header />
      <Tabs activeTab={tab} setActiveTab={setTab} />
      App
    </div>
  );
}
