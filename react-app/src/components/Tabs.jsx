import React from 'react';
import { createUseStyles } from 'react-jss';

import Tab from './Tab';

const useStyles = createUseStyles({
	tabs: {
		background: 'dimgray',
		display: 'flex',
		flex: '0 0 auto',
		height: 50,
		justifyContent: 'center',
	},
});

export default function Tabs({ activeTab, setActiveTab }) {
	const c = useStyles();

	const tabs = ['intro', 'skills', 'more'].map(name => (
		<Tab {...{ activeTab, key: name, name, setActiveTab }} />
	));

  return (
    <div className={c.tabs}>
    	{tabs}
    </div>
  );
}
