import React from 'react';
import { createUseStyles } from 'react-jss';
import cn from 'classnames';

import { verylightgray } from './colors';

const useStyles = createUseStyles({
	tab: {
		alignItems: 'center',
		background: 'black',
		color: 'white',
		cursor: 'pointer',
		display: 'flex',
		justifyContent: 'center',
		padding: [0, 16],
		'&:hover, &:focus': {
			background: 'dimgray',
		},
	},
	activeTab: {
		background: verylightgray,
		color: 'black',
		'&:hover, &:focus': {
			background: verylightgray,
		},
	},
});

export default function Tab({ activeTab, name, setActiveTab }) {
	const c = useStyles();
	const className = cn(c.tab, { [c.activeTab]: activeTab === name });
	const handleClick = () => setActiveTab(name);
  return (
  	<div
  		className={className}
  		onClick={handleClick}
  	>
  		{name}
  	</div>
  );
}
