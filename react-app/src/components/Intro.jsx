import React from 'react';
import { createUseStyles } from 'react-jss';

import Copy from './Copy';
import H3 from './H3';
import P from './P';
import Title from './Title';

import me from './img/me-square.jpg';
import intpLogo from './img/intp-logo.png';
import wayThingsWork from './img/way-things-work.jpg';
import shibusa from './img/shibusa.jpg';

const useStyles = createUseStyles({
	intro: {
		background: 'white',
		maxWidth: 800,
	},
	portrait: {
		float: 'left',
		marginRight: 16,
		width: '25%',
	},
	intp: {
		float: 'right',
		marginLeft: 16,
		width: '20%',
	},
	wayThingsWork: {
		float: 'left',
		marginRight: 16,
		width: '20%',
	},
	shibusa: {
		marginBottom: -4,
		width: '100%',
	},
});

const p1 = 'Although I earned my degree studying English linguistics, I was eventually, inevitably, drawn to programming because the traits of an engineer are inherent in my core personality. I have always drawn a deep sense of satisfaction out of learning and working with computers.';
const p2 = "In 2011 I was living in Japan and teaching English full time. It was there that I discovered Linux and immediately fell in love with it. In my spare time, I began teaching myself C++ by working through Bjarne Stroustrup's seminal book, Programming - Principles and Practice Using C++. Since then I have continued to enjoy programming with a passion that continues today."

export default function Intro() {
	const c = useStyles();

  return (
    <div className={c.intro}>
  		<img className={c.portrait} src={me} alt='portrait' />
    	<Title>Robert Carter Mills</Title>
    	<Copy>
    		<H3>coder, engineer, linguist, artist</H3>
    		<br/><br/>
    		<P>{p1}</P>
    		<br/>
    		<P>{p2}</P>
    		<br/>
	  		<img className={c.intp} src={intpLogo} alt='intp' />
      	<P>
      		In terms of <a href='http://www.myersbriggs.org'>Myers Brigg's personality types</a> I am <b>INTP</b>:<br/>
      		<b>I</b>ntroverted i<b>N</b>tuitive <b>T</b>hinking <b>P</b>erceptive
      	</P>
      	<br/>
    		<i>
    			<q>
        		INTP's seek to develop logical explanations for everything that interests them. Theoretical and abstract, interested more in ideas than in social interaction. Quiet, contained, flexible, and adaptable. They have an unusual ability to focus in depth to solve problems in their area of interest. Skeptical, sometimes critical, always analytical.
    			</q>
    		</i>
    		<br/><br/><br/>
        <img className={c.wayThingsWork} src={wayThingsWork} alt='wayThingsWork' />
        <P>My favorite book as a child was <a href='http://www.amazon.com/The-Things-Work-David-Macaulay/dp/0590429892/ref=pd_sim_b_5'>The Way Things Work</a> by David Macaulay, and my favorite toy was my latest Legos set. I think that pretty much sums up my strongest personality trait. I love learning about and understanding the world around me and then using that knowledge to build things with my hands.
        </P>
        <br/>
        <P>
        	I also have a strong artistic, creative streak with a deep appreciation for efficiency and organization of form, function and design. The aesthetic I strive for is a minimal, simple, elegant and polished form that unfolds complexity and power. In a word:
	        <a href='http://en.wikipedia.org/wiki/Shibui'> shibusa (渋さ)</a>
  	      <br/><br/>
    	    <i><q>A Japanese word which refers to a particular aesthetic of simple, subtle, and unobtrusive beauty. Shibusa objects appear to be simple overall but they include subtle details, such as textures, that balance simplicity with complexity. This balance ensures that one does not tire of a shibusa object but constantly finds new meaning and enriched beauty that cause its aesthetic value to grow over the years... <br/><br/>
      	  Shibusa walks a fine line between contrasting aesthetic concepts such as elegant and rough or spontaneous and restrained.</q></i>
        </P>
        <br/>
    	</Copy>
      <img className={c.shibusa} src={shibusa} alt='shibusa' />
    </div>
  );
}
