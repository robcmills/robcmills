import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	p: {
		lineHeight: '20px',
	},
});

export default function P({ children }) {
	const c = useStyles();
  return (
  	<div className={c.p}>{children}</div>
  );
}
