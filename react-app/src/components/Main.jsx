import React from 'react';
import { createUseStyles } from 'react-jss';

import { verylightgray } from './colors';

const useStyles = createUseStyles({
	main: {
		background: verylightgray,
		flex: 1,
		paddingTop: 25,
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
