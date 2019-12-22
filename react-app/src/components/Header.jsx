import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	header: {
		color: 'white',
		display: 'flex',
		height: 100,
		textAlign: 'center',
	},
	svg: {
		flex: 1,
	},
	'@keyframes draw_in': {
	   from: { strokeDashoffset: '100px' },
	   to: { strokeDashoffset: '0px' },
	},
	g: {
	   animation: '$draw_in 3s',
	   stroke: 'white',
	   strokeDasharray: '100px, 100px',
     strokeDashoffset: '0px',
     strokeWidth: 1,
	},
});

export default function Header() {
	const c = useStyles();
  return (
    <div className={c.header}>
      <svg className={c.svg} viewBox="0 0 95 30" version="1.1">
        <g className={c.g} id='robcmills'>
          <path id='ro' d='M 5,25 l 0,-5 c 0-2.76, 2.14-5, 5 -5 c 2.76 0, 5 2.14, 5 5 c 0 2.76, 2.14 5, 5 5 c 2.76 0, 5-2.14, 5-5 c 0-2.76, -2.14-5, -5-5 c -2.76 0, -5 2.14, -5 5'/>
          <path id='b' d='M 25 5 l 0 15 c 0 2.76, 2.14 5, 5 5 c 2.76 0, 5-2.14, 5-5 c 0-2.76, -2.14-5, -5-5 c -2.76 0, -5 2.14, -5 5'/>
          <path id='cmi' d='M 40 15 m 3.53 1.464 q -1.53 -1.464, -3.53 -1.464 c -2.76 0, -5 2.14, -5 5 c 0 2.76, 2.14 5, 5 5 c 2.76 0, 5-2.14, 5-5 c 0-2.76, 2.14-5, 5 -5 c 2.76 0, 5 2.14, 5 5 l 0 5 l 0 -5 c 0-2.76, 2.14-5, 5 -5 c 2.76 0, 5 2.14, 5 5 l 0 2.5 c 0 1.38, 1.07 2.5, 2.5 2.5 c 1.38 0, 2.5-1.07, 2.5-2.5 l 0 -7.5'/>
          <path id='l' d='M 75 5 l 0 17.5 c 0 1.38, 1.07 2.5, 2.5 2.5'/>
          <path id='ls' d='M 80 5 l 0 17.5 c 0 1.38, 1.07 2.5, 2.5 2.5 l 5 0 c 1.38 0, 2.5-1.07, 2.5-2.5 c 0-1.38, -1.07-2.5, -2.5-2.5 c -1.38 0, -2.5 -1.07, -2.5-2.5 c 0-1.38, 1.07-2.5, 2.5 -2.5 l 2.5 0'/>
         </g>
      </svg>
    </div>
  );
}
