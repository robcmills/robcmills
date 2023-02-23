import { Dispatch, SetStateAction } from 'react';
import './Tabs.css';

interface TabsProps {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

export function Tabs({ activeTab, setActiveTab }: TabsProps) {
  const tabs = ['intro', 'skills', 'projects'].map((name) => {
    const className = ['tab', activeTab === name ? 'activeTab' : ''].join(' ');
    const handleClick = () => setActiveTab(name);
    return (
      <div className={className} key={name} onClick={handleClick}>
        {name}
      </div>
    );
  });

  return <div className="tabs">{tabs}</div>;
}
