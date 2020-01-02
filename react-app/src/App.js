import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';

import Header from './components/Header';
import Intro from './components/Intro';
import Main from './components/Main';
import Tabs from './components/Tabs';

const useStyles = createUseStyles({
	app: {
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
		position: 'absolute',
		width: '100%',
	},
});

export default function App() {
	const c = useStyles();
	const [activeTab, setActiveTab] = useState('intro');
	const main = {
		intro: <Intro />,
	}[activeTab];

  return (
    <div className={c.app}>
      <Header />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <Main>{main}</Main>
    </div>
  );
}
