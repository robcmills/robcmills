import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Tabs } from './components/Tabs';

export const tabMap = {
  intro: <Intro />,
  skills: <Skills />,
  projects: <Projects />,
};

export type TabName = keyof typeof tabMap;

export function App() {
  const [tab, setTab] = useState<TabName>('intro');

  return (
    <div className="app">
      <Header />
      <Tabs activeTab={tab} setActiveTab={setTab} />
      <div className="main-background">
        <div className="main-content">{tabMap[tab]}</div>
      </div>
    </div>
  );
}
