import React from 'react';
import { createUseStyles } from 'react-jss';

import A from './A';
import Copy from './Copy';
import P from './P';

const useStyles = createUseStyles({
	more: {
		background: 'white',
		maxWidth: 800,
	},
});

export default function More() {
	const c = useStyles();

  return (
    <div className={c.more}>

      <Copy>
        <P>Simple abstract strategy board game I created:</P>
        <A href='http://robcmills.net/staex/'>robcmills.net/staex</A>
      </Copy>

      <Copy>
        <P>Implementation of Staex, where the computer ai runs a simple Monte Carlo search implemented in web assembly:</P>
        <A href='http://robcmills.net/square-stacks/'>robcmills.net/square-stacks</A>
      </Copy>

      <Copy>
        <P>Simple chess variant game I created with React 15, svg and Redux:</P>
        <A href='http://robcmills.net/hex'>robcmills.net/hex</A>
      </Copy>

      <Copy>
        <P>Ember 2.0 Todo with Bootstrap 4:</P>
        <A href="http://robcmills.net/ember-todo">robcmills.net/ember-todo</A>
      </Copy>

      <Copy>
        <P>I designed and built a wooden coordinate motion puzzle box:</P>
        <A href="http://coordinatemotionpuzzlebox.blogspot.com">coordinatemotionpuzzlebox.blogspot.com</A>
      </Copy>

      <Copy>
        <P>A fun little pure javascript project:</P>
        <A href="http://robcmills.net/accutouch">robcmills.net/accutouch</A>
      </Copy>

    </div>
  );
}
