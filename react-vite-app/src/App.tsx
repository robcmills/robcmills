import { useCallback, useEffect, useRef, useState } from 'react';
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
  const [activeTab, setActiveTab] = useState<TabName>('intro');
  const appRef = useRef<HTMLDivElement>(null);

  const onChangeTab = (newTab: TabName) => {
    window.location.hash = newTab;
    setActiveTab(newTab);
    if (appRef.current) appRef.current.scrollTop = 0;
  };

  const updateTabStateFromHash = useCallback(() => {
    const hash = window.location.hash.slice(1);
    const isValidTab = Object.keys(tabMap).includes(hash);
    const newTab =
      isValidTab && hash !== activeTab ? (hash as TabName) : 'intro';
    onChangeTab(newTab);
  }, [activeTab]);

  useEffect(() => {
    updateTabStateFromHash();
    window.addEventListener('hashchange', updateTabStateFromHash);
  }, []);

  return (
    <div className="app" ref={appRef}>
      <Header />
      <Tabs activeTab={activeTab} onChangeTab={onChangeTab} />
      <div className="main-background">
        <div className="main-content">{tabMap[activeTab]}</div>
      </div>
      <Tabs activeTab={activeTab} onChangeTab={onChangeTab} />
    </div>
  );
}
