/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { createUseStyles } from 'react-jss';

import A from './A';
import P from './P';

import aws_logo from './img/aws_logo.png';
import bootstrap_logo from './img/bootstrap_logo.png';
import bullet_logo from './img/bullet_logo.png';
import coffeescript_logo from './img/coffeescript_logo.png';
import cpp_logo from './img/cpp_logo.png';
import css3_logo from './img/css3_logo.png';
import django_logo from './img/django_logo.png';
import ember_logo from './img/ember_logo.png';
import flask_logo from './img/flask_logo.png';
import gtk_logo from './img/gtk_logo.png';
import html5_logo from './img/html5_logo.png';
import irr_logo from './img/irr_logo.png';
import jade_logo from './img/jade_logo.png';
import jinja_logo from './img/jinja_logo.png';
import jquery_logo from './img/jquery_logo.png';
import js_logo from './img/js_logo.png';
import jsx_logo from './img/jsx_logo.png';
import python_logo from './img/python_logo.png';
import react_logo from './img/react_logo.png';
import redux_logo from './img/redux_logo.png';
import sass_logo from './img/sass_logo.png';
import three_ds_logo from './img/3ds_logo.png';

const useStyles = createUseStyles({
	skills: {
		background: 'white',
		maxWidth: 800,
	},
  skill: {
    display: 'flex',
    padding: 16,
    '& img': {
      flex: '0 0 auto',
      height: 100,
      marginRight: 16,
      width: 100,
    },
  },
});

export default function Skills() {
	const c = useStyles();

  return (
    <div className={c.skills}>

      <div className={c.skill}>
        <img src={three_ds_logo} alt='three_ds_logo' />
        <P><b>3D Studio Max</b><br/>
        I've worked with a variety of 3d modeling programs since my first foray into Caligari Truspace in 1995. In high school I learned AutoCAD to model a CO2 car that I constructed in Woodshop class. More recently I designed and modeled a <A href="http://coordinatemotionpuzzlebox.blogspot.com/"> puzzle box </A> in 3d Studio MAX that I then fabricated at SF Tech Shop. I also used 3DS to model the levels and environments of a 3D game I created called <A href='http://kyuplex.blogspot.com/'>kyuplex</A>. I learned MaxScript to convert the levels into a custom XML format that the game rendering engine could read.</P>
      </div>

      <div className={c.skill}>
        <img src={aws_logo} alt='aws_logo' />
        <P><b>Amazon AWS</b><br/>
        I read a fascinating <A href='http://highscalability.com/blog/2015/1/12/the-stunning-scale-of-aws-and-what-it-means-for-the-future-o.html'>article</A> about Amazon's incredible lead in the cloud computing industry. <br/>
        <em>"All 14 other cloud providers combined have 1/5th the aggregate capacity of AWS (estimate by Gartner in 2013)"</em><br/>
        I'm a very forward thinker, fond of the likes of <em>Ray Kurzweil</em> and I believe that once ultra high speed fiber optic internet becomes cheap and prevalent, the browser will become the new OS, web applications the new native software, and cloud computing infrastructure will continue to grow at enormous rates. This is a train I want to be on, and so I take every opportunity to work with and learn about the variety of AWS services available today. Mostly I've worked with EC2, S3, S5 and RDS.
        </P>
      </div>

      <div className={c.skill}>
        <img src={bootstrap_logo} alt='bootstrap_logo' />
        <P><b>Twitter Bootstrap</b><br/>
        I first came across Bootstrap in June 2013 when I was hired at <A href='https://thegogame.com'>The Go Game</A>. Their real-world gaming platform uses Bootstrap for all of its applications across several different devices, primarily OSX, iOS and Android. So I have worked extensively with and created several interfaces using the framework. I also used Bootstrap for a custom client game with the Young Presidents Organization that was Progressive Web App for iPad (also my first Ember application). Since then I have used Bootstrap for various projects, and spent a lot of time rummaging around its code and pulling out useful bits and pieces (such as clearfix).
        </P>
      </div>

      <div className={c.skill}>
        <img src={bullet_logo} alt='bullet_logo' />
        <P><b>Bullet Physics Library</b><br/>
        I selected Bullet as the physics library to use for my 3d game project <A href='http://kyuplex.blogspot.com'>kyuplex</A>. I successfully integrated the library with the open source 3d rendering engine I was using, <A href='http://irrlicht.sourceforge.net'>irrlicht</A>.
        I worked mostly with dynamic rigid bodies and experimented with several different constraints.
        </P>
      </div>

      <div className={c.skill}>
        <img src={cpp_logo} alt='cpp_logo' />
        <P><b>c++</b><br/>
        My favorite language hands down. All of my favorite software, all of the powerful software, written in c++. And I know exactly why I like it; because it's fast. I remember what a difference it made when I went from a pyGtk UI to a compiled Gtk UI.  Night and day.<br/>
        Python was the first real programming language I learned, followed closely by c and then c++.  As mentioned previously, the bulk of my experience with c++ is from my <A href='http://kyuplex.blogspot.com'>kyuplex</A> project. I yearn to come back to it (or another static compiled language) someday.
        </P>
      </div>

      <div className={c.skill}>
        <img src={coffeescript_logo} alt='coffeescript_logo' />
        <P><b>coffeescript</b><br/>
        I love coffeescript. It infuses javascript with some of the good parts of Python and Ruby syntax and language constructs, as well as with beautiful, minimal punctuation. The documentation is excellent and definitely worth multiple readings.
        </P>
      </div>

      <div className={c.skill}>
        <img src={css3_logo} alt='css3_logo' />
        <P><b>CSS3</b><br/>
        I am strong with CSS. While working at <A href='http://thegogame.com'>The Go Game</A> I was given sole responsibility for rebuilding the entire website from the ground up. We hired a design firm to do the bulk of the content and layout, which they did and then handed it off to me. I spent months cleaning up the css, optimizing and polishing the site for desktop and mobile on all major browsers, including Internet Explorer all the way down to 8.<br/>
        So yeah, I don't really struggle anymore to get divs where I want them to be.
        </P>
      </div>

      <div className={c.skill}>
        <img src={django_logo} alt='django_logo' />
        <P><b>Django</b><br/>
        I've built a few projects with Django: <A href='http://thegogame.com'>The Go Game website</A> with <A href='http://mezzanine.jupo.org'>Mezzanine</A>, an excellent open source CMS built on top of Django.  I've also put together a <A href='https://github.com/robcmills/django-base'>Django base template</A> that can be used to quickly and easily get a bare bones Django app up and running and deployed to an EC2 instance. Also I rebuilt <A href='https://secure.thegogame.com'> the secure credit card processor</A> for The Go Game using pure Django.<br/>
        I like Django. I'd enjoy working with it more.
        </P>
      </div>

      <div className={c.skill}>
        <img src={ember_logo} alt='ember_logo' />
        <P><b>ember.js</b><br/>
        Ember is a modern javascript framework for building ambitious web applications.  The real-time gaming platform that I helped develop at The Go Game uses Ember for all of its client side applications.  I worked extensively with Ember, building, extending, refactoring, and fixing various components of a multi-application suite. And we had full test coverage.
        </P>
      </div>

      <div className={c.skill}>
        <img src={flask_logo} alt='flask_logo' />
        <P><b>Flask - Python Microframework</b><br/>
        The gaming platform I helped build at The Go Game was built on top of Flask, along with a ton of custom api code.
        </P>
      </div>

      <div className={c.skill}>
        <img src={gtk_logo} alt='gtk_logo' />
        <P><b>GTK+</b><br/>
        I fell immediately in love with Linux when I discovered it, and soon after began learning to code. The first language I learned was Python, and the first UI library I used was pyGtk. Packing boxes, widgets, signals and handlers are like Saturday morning cartoons for me. Warm reminiscent joys when programming was fresh to me.
        </P>
      </div>

      <div className={c.skill}>
        <img src={html5_logo} alt='html5_logo' />
        <P><b>HTML</b><br/>
        I think it goes without saying that I know HTML very well, but for completeness I'm including it here.
        </P>
      </div>

      <div className={c.skill}>
        <img src={irr_logo} alt='irr_logo' />
        <P><b><A href='http://irrlicht.sourceforge.net/'>irrlicht - lightning fast realtime engine</A></b><br/>
        For years and years I fantasized about creating my own 3d game, with no shortage of ideas that combined elements of many other games in unique ways. Finally once I had crossed the divide from computer power user to computer programmer, that dream seemed reachable. But it took a long time and a lot of hard work to go from Python to c to c++ to irrlicht. An open-source 3d rendering engine that I used for <A href='http://kyuplex.blogspot.com'>kyuplex</A>. It was a joyous journey and I think fondly on the days I was active in the irrlicht forums.
        </P>
      </div>

      <div className={c.skill}>
        <img src={jade_logo} alt='jade_logo' />
        <P><b>jade - Node Template Engine</b><br/>
        Although Jinja was my first exposure to templating, jade is uniquely both a dialect of HTML and a templating language. I utilized it for generating content heavy HTML quickly and efficiently. It does not play well with Handlebars templates, unfortunately, and I wish I had enough time to write an extension to the language. Would be a fun project.
        </P>
      </div>

      <div className={c.skill}>
        <img src={js_logo} alt='js_logo' />
        <P><b>javascript</b><br/>
        Javascript is the language I am most comfortable with. I have worked extensively with Ember for 3 years at The Go Game, and another 3 years working with React and Node at BuildingConnected. I worked with CoffeeScript a bit, before ECMAScript evolved to consume most of their good parts.</P>
      </div>

      <div className={c.skill}>
        <img src={jinja_logo} alt='jinja_logo' />
        <P><b>Jinja2</b><br/>
        An excellent templating language for Python. Great for use with Flask (Python Microframework). Similar to Django's templates, this was one of my first exposures to templating in Python.
        </P>
      </div>

      <div className={c.skill}>
        <img src={jquery_logo} alt='jquery_logo' />
        <P><b>jQuery</b><br/>
        jQuery was fun while it lasted. I wrote my share of ajax methods back in the day.
        </P>
      </div>

      <div className={c.skill}>
        <img src={jsx_logo} alt='jsx_logo' />
        <P><b>Photoshop Scripting</b><br/>
        My father bought me Photoshop Version 3.1 in the early 90's when I was still a child. I've been using it ever since and know it like the back of my hand. Me and most millenials. So once I learned to program it wasn't much of a jump to learn Photoshop scripting. Quite handy for bulk processing of images, or splitting a large tiled image of 77 cars into 77 small separate files.
        </P>
      </div>

      <div className={c.skill}>
        <img src={python_logo} alt='python_logo' />
        <P><b>Python</b><br/>
        The swiss army knife of programming languages! Python is the first language I learned and I have since grown to like it more and more, even though it's slower than molasses north of The Wall in Westeros. It's got some handy libraries though, such as requests, lxml, BeautifulSoup, and Kivy.
        </P>
      </div>

      <div className={c.skill}>
        <img src={react_logo} alt='react_logo' />
        <P><b>React</b><br/>
        When I started working at <A href="http://www.buildingconnected.com">buildingconnected.com</A> (October 2015) is when I learned React. Their construction bidding management platform was originally built with Backbone, but we migrated to React. Being a young startup, with a small team, I had the opportunity to get my hands very dirty, and I built hundreds of React components, large and small, both inside and outside of Backbone views. I love working with React, and pure functional components are a great leap forward for front-end development.</P>
      </div>

      <div className={c.skill}>
        <img src={redux_logo} alt='redux_logo' />
        <P><b>Redux</b><br/>
        I worked extensively with Redux while working at <A href="http://www.buildingconnected.com">buildingconnected.com</A>. They used client state as a document store in their platform, as well as to store all application ui state in a very complex app.</P>
      </div>

      <div className={c.skill}>
        <img src={sass_logo} alt='sass_logo' />
        <P><b>Sass</b><br/>
        Syntactically Awesome Style Sheets are simply a dialect of CSS, and the first alternate dialect of a programming language that I learned. After realizing the potential of programming dialects and their benefits, both practically and aesthetically, I went on to learn dialects of HTML and Javascript such as Jade and CoffeeScript. These days though, in a React world I prefer css-in-js solutions, my favorite being <A href='https://cssinjs.org'>jss</A>.
        </P>
      </div>

    </div>
  );
}
