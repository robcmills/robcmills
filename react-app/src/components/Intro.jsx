import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	intro: {
		// background: 'white',
		// paddingTop: 25,
	},
});

export default function Intro() {
	const c = useStyles();

  return (
    <div className={c.intro}>
    	Intro
    </div>
  );
}
