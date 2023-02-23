import { Dispatch, SetStateAction } from 'react';
import { tabMap, TabName } from '../App';
import './Tabs.css';

interface TabsProps {
  activeTab: TabName;
  setActiveTab: Dispatch<SetStateAction<TabName>>;
}

export function Tabs({ activeTab, setActiveTab }: TabsProps) {
  const tabs = (Object.keys(tabMap) as TabName[]).map((name) => {
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
