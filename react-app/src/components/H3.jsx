import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	h3: {
		fontSize: 18,
		fontWeight: 'bold',
	},
});

export default function H3({ children }) {
	const c = useStyles();
  return (
  	<span className={c.h3}>{children}</span>
  );
}
