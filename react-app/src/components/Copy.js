import React from 'react';
import { createUseStyles } from 'react-jss';

import { spacingUnit } from './constants';

const useStyles = createUseStyles({
	title: {
		padding: spacingUnit,
	},
});

export default function Copy({ children }) {
	const c = useStyles();
  return (
  	<div className={c.title}>
    	{children}
  	</div>
  );
}
