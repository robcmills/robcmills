import React from 'react';
import { createUseStyles } from 'react-jss';

import { verylightgray } from './colors';

const useStyles = createUseStyles({
	main: {
		background: verylightgray,
		display: 'flex',
		flex: 1,
		justifyContent: 'center',
		padding: [25, 0],
	},
});

export default function Main({ children }) {
	const c = useStyles();
  return (
    <div className={c.main}>
    	{children}
    </div>
  );
}
