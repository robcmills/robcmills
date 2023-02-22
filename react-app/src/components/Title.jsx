import React from 'react';
import { createUseStyles } from 'react-jss';

import { spacingUnit } from './constants';

const useStyles = createUseStyles({
	title: {
		background: 'black',
		color: 'white',
		fontSize: '2em',
		fontWeight: 200,
		padding: ['1rem', spacingUnit],
	},
});

export default function Title({ children }) {
	const c = useStyles();
  return (
  	<div className={c.title}>
    	{children}
  	</div>
  );
}
