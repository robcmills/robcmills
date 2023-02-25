import { useCallback, useEffect, useState } from 'react';
import { Intro } from '../components/Intro';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';
import { Tabs } from '../components/Tabs';

export const tabMap = {
  intro: <Intro />,
  skills: <Skills />,
  projects: <Projects />,
};

export type TabName = keyof typeof tabMap;

interface UseHashTabsProps {
  onChangeTab: (newTab: TabName) => void;
}

export function useHashTabs({ onChangeTab }: UseHashTabsProps) {
  const [activeTab, setActiveTab] = useState<TabName>('intro');

  const handleChangeTab = (newTab: TabName) => {
    window.location.hash = newTab;
    setActiveTab(newTab);
    onChangeTab(newTab);
  };

  const updateTabStateFromHash = useCallback(() => {
    const hash = window.location.hash.slice(1);
    const isValidTab = Object.keys(tabMap).includes(hash);
    const newTab =
      isValidTab && hash !== activeTab ? (hash as TabName) : 'intro';
    handleChangeTab(newTab);
  }, [activeTab]);

  useEffect(() => {
    updateTabStateFromHash();
    window.addEventListener('hashchange', updateTabStateFromHash);
  }, []);

  const tabsNav = <Tabs activeTab={activeTab} onChangeTab={handleChangeTab} />;
  const tabsContent = tabMap[activeTab];

  return { tabsContent, tabsNav };
}
