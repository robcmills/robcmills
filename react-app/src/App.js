import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';

import Header from './components/Header';
import Intro from './components/Intro';
import Main from './components/Main';
import Skills from './components/Skills';
import Tabs from './components/Tabs';

const useStyles = createUseStyles({
	app: {
		display: 'flex',
		flexDirection: 'column',
		fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
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
		skills: <Skills />,
	}[activeTab];

  return (
    <div className={c.app}>
      <Header />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <Main>{main}</Main>
    </div>
  );
}
