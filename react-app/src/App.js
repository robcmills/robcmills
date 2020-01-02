import React, { useState } from 'react';

import Header from './components/Header';
import Tabs from './components/Tabs';

export default function App() {
	const [activeTab, setActiveTab] = useState('intro');
  return (
    <div>
      <Header />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
