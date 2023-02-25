import { tabMap, TabName } from '../hooks/useHashTabs';
import './Tabs.css';

interface TabsProps {
  activeTab: TabName;
  onChangeTab: (newTab: TabName) => void;
}

export function Tabs({ activeTab, onChangeTab }: TabsProps) {
  const tabs = (Object.keys(tabMap) as TabName[]).map((name) => {
    const className = ['tab', activeTab === name ? 'activeTab' : ''].join(' ');
    const handleClick = () => onChangeTab(name);
    return (
      <nav className={className} key={name} onClick={handleClick}>
        {name}
      </nav>
    );
  });

  return <div className="tabs">{tabs}</div>;
}
