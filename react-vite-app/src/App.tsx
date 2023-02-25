import { useRef } from 'react';
import './App.css';
import { Header } from './components/Header';
import { useHashTabs } from './hooks/useHashTabs';

export function App() {
  const appRef = useRef<HTMLDivElement>(null);

  const onChangeTab = () => {
    if (appRef.current) appRef.current.scrollTop = 0;
  };

  const { tabsContent, tabsNav } = useHashTabs({ onChangeTab });

  return (
    <div className="app" ref={appRef}>
      <Header />
      {tabsNav}
      <div className="main-background">
        <div className="main-content">{tabsContent}</div>
      </div>
      {tabsNav}
    </div>
  );
}
