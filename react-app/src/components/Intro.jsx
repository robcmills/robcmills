import React from 'react';
import { createUseStyles } from 'react-jss';

import Copy from './Copy';
import H3 from './H3';
import P from './P';
import Title from './Title';
import me from './me-square.jpg';

const useStyles = createUseStyles({
	intro: {
		background: 'white',
		display: 'flex',
		maxWidth: 800,
	},
	column1: {
		flex: 1,
	},
	column2: {
		flex: 2,
	},
	img: {
		width: '100%',
	},
});

const p1 = 'Although I earned my degree studying English linguistics, I was eventually, inevitably, drawn to programming because the traits of an engineer are inherent in my core personality.';

export default function Intro() {
	const c = useStyles();

  return (
    <div className={c.intro}>
    	<div className={c.column1}>
    		<img className={c.img} src={me} alt='portrait' />
    	</div>
    	<div className={c.column2}>
	    	<Title>Robert Carter Mills</Title>
	    	<Copy>
	    		<H3>coder, engineer, linguist, artist</H3>
	    		<br></br>
	    		<br></br>
	    		<P>{p1}</P>
	    	</Copy>
    	</div>
    </div>
  );
}
