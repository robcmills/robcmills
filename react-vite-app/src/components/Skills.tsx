import './Skills.css';
import aws_logo from '../assets/aws_logo.png';
import bootstrap_logo from '../assets/bootstrap_logo.png';
import bullet_logo from '../assets/bullet_logo.png';
import coffeescript_logo from '../assets/coffeescript_logo.png';
import cpp_logo from '../assets/cpp_logo.png';
import css3_logo from '../assets/css3_logo.png';
import django_logo from '../assets/django_logo.png';
import ember_logo from '../assets/ember_logo.png';
import flask_logo from '../assets/flask_logo.png';
import gtk_logo from '../assets/gtk_logo.png';
import html5_logo from '../assets/html5_logo.png';
import irr_logo from '../assets/irr_logo.png';
import jade_logo from '../assets/jade_logo.png';
import jinja_logo from '../assets/jinja_logo.png';
import jquery_logo from '../assets/jquery_logo.png';
import javascript_logo from '../assets/javascript_logo.png';
import jsx_logo from '../assets/jsx_logo.png';
import kicad_logo from '../assets/kicad_logo.png';
import python_logo from '../assets/python_logo.png';
import react_logo from '../assets/react_logo.png';
import redux_logo from '../assets/redux_logo.png';
import sass_logo from '../assets/sass_logo.png';
import three_ds_logo from '../assets/3ds_logo.png';
import typescript_logo from '../assets/typescript_logo.png';

export function Skills() {
  return (
    <div className="skills">
      <div className="skill">
        <img src={three_ds_logo} alt="three_ds_logo" />
        <p>
          <b>3D Studio Max</b>
          <br />
          I've worked with a variety of 3d modeling programs since my first
          foray into Caligari Truspace in 1995. In high school I learned AutoCAD
          to model a CO2 car that I constructed in Woodshop class. More recently
          I designed and modeled a{' '}
          <a href="http://coordinatemotionpuzzlebox.blogspot.com/">
            {' '}
            puzzle box{' '}
          </a>{' '}
          in 3d Studio MAX that I then fabricated at SF Tech Shop. I also used
          3DS to model the levels and environments of a 3D game I created called{' '}
          <a href="http://kyuplex.blogspot.com/">kyuplex</a>. I learned
          MaxScript to convert the levels into a custom XML format that the game
          rendering engine could read.
        </p>
      </div>

      <div className="skill">
        <img src={aws_logo} alt="aws_logo" />
        <p>
          <b>Amazon AWS</b>
          <br />I read a fascinating{' '}
          <a href="http://highscalability.com/blog/2015/1/12/the-stunning-scale-of-aws-and-what-it-means-for-the-future-o.html">
            article
          </a>{' '}
          about Amazon's incredible lead in the cloud computing industry. <br />
          <em>
            "All 14 other cloud providers combined have 1/5th the aggregate
            capacity of AWS (estimate by Gartner in 2013)"
          </em>
          <br />
          I'm a very forward thinker, fond of the likes of <em>
            Ray Kurzweil
          </em>{' '}
          and I believe that once ultra high speed fiber optic internet becomes
          cheap and prevalent, the browser will become the new OS, web
          applications the new native software, and cloud computing
          infrastructure will continue to grow at enormous rates. This is a
          train I want to be on, and so I take every opportunity to work with
          and learn about the variety of AWS services available today. Mostly
          I've worked with EC2, S3, S5 and RDS.
        </p>
      </div>

      <div className="skill">
        <img src={bootstrap_logo} alt="bootstrap_logo" />
        <p>
          <b>Twitter Bootstrap</b>
          <br />I first came across Bootstrap in June 2013 when I was hired at{' '}
          <a href="https://thegogame.com">The Go Game</a>. Their real-world
          gaming platform uses Bootstrap for all of its applications across
          several different devices, primarily OSX, iOS and Android. So I have
          worked extensively with and created several interfaces using the
          framework. I also used Bootstrap for a custom client game with the
          Young Presidents Organization that was Progressive Web App for iPad
          (also my first Ember application). Since then I have used Bootstrap
          for various projects, and spent a lot of time rummaging around its
          code and pulling out useful bits and pieces (such as clearfix).
        </p>
      </div>

      <div className="skill">
        <img src={bullet_logo} alt="bullet_logo" />
        <p>
          <b>Bullet Physics Library</b>
          <br />I selected Bullet as the physics library to use for my 3d game
          project <a href="http://kyuplex.blogspot.com">kyuplex</a>. I
          successfully integrated the library with the open source 3d rendering
          engine I was using,{' '}
          <a href="http://irrlicht.sourceforge.net">irrlicht</a>. I worked
          mostly with dynamic rigid bodies and experimented with several
          different constraints.
        </p>
      </div>

      <div className="skill">
        <img src={cpp_logo} alt="cpp_logo" />
        <p>
          <b>c++</b>
          <br />
          Most of my favorite, powerful software, such as games and 3D modeling
          software, is written in c++. I love it because it's fast. I remember
          what a difference it made when I went from a pyGtk UI to a compiled
          Gtk UI. Night and day.
          <br />
          Python was the first real programming language I learned, followed
          closely by c and then c++. As mentioned previously, the bulk of my
          experience with c++ is from my{' '}
          <a href="http://kyuplex.blogspot.com">kyuplex</a> project. I yearn to
          come back to it (or another static compiled language) someday.
        </p>
      </div>

      <div className="skill">
        <img src={coffeescript_logo} alt="coffeescript_logo" />
        <p>
          <b>coffeescript</b>
          <br />I love coffeescript. It infuses javascript with some of the good
          parts of Python and Ruby syntax and language constructs, as well as
          with beautiful, minimal punctuation. The documentation is excellent
          and definitely worth multiple readings.
        </p>
      </div>

      <div className="skill">
        <img src={css3_logo} alt="css3_logo" />
        <p>
          <b>CSS3</b>
          <br />I am strong with CSS. While working at{' '}
          <a href="http://thegogame.com">The Go Game</a> I was given sole
          responsibility for rebuilding the entire website from the ground up.
          We hired a design firm to do the bulk of the content and layout, which
          they did and then handed it off to me. I spent months cleaning up the
          css, optimizing and polishing the site for desktop and mobile on all
          major browsers, including Internet Explorer all the way down to 8.
          <br />
          So yeah, I don't really struggle anymore to get divs where I want them
          to be.
        </p>
      </div>

      <div className="skill">
        <img src={django_logo} alt="django_logo" />
        <p>
          <b>Django</b>
          <br />
          I've built a few projects with Django:{' '}
          <a href="http://thegogame.com">The Go Game website</a> with{' '}
          <a href="http://mezzanine.jupo.org">Mezzanine</a>, an excellent open
          source CMS built on top of Django. I've also put together a{' '}
          <a href="https://github.com/robcmills/django-base">
            Django base template
          </a>{' '}
          that can be used to quickly and easily get a bare bones Django app up
          and running and deployed to an EC2 instance. Also I rebuilt{' '}
          <a href="https://secure.thegogame.com">
            {' '}
            the secure credit card processor
          </a>{' '}
          for The Go Game using pure Django.
          <br />I like Django. I'd enjoy working with it more.
        </p>
      </div>

      <div className="skill">
        <img src={ember_logo} alt="ember_logo" />
        <p>
          <b>ember.js</b>
          <br />
          Ember is a modern javascript framework for building ambitious web
          applications. The real-time gaming platform that I helped develop at
          The Go Game uses Ember for all of its client side applications. I
          worked extensively with Ember, building, extending, refactoring, and
          fixing various components of a multi-application suite. And we had
          full test coverage.
        </p>
      </div>

      <div className="skill">
        <img src={flask_logo} alt="flask_logo" />
        <p>
          <b>Flask - Python Microframework</b>
          <br />
          The gaming platform I helped build at The Go Game was built on top of
          Flask, along with a ton of custom api code.
        </p>
      </div>

      <div className="skill">
        <img src={gtk_logo} alt="gtk_logo" />
        <p>
          <b>GTK+</b>
          <br />I fell immediately in love with Linux when I discovered it, and
          soon after began learning to code. The first language I learned was
          Python, and the first UI library I used was pyGtk. Packing boxes,
          widgets, signals and handlers are like Saturday morning cartoons for
          me. Warm reminiscent joys when programming was fresh to me.
        </p>
      </div>

      <div className="skill">
        <img src={html5_logo} alt="html5_logo" />
        <p>
          <b>HTML</b>
          <br />I think it goes without saying that I know HTML very well, but
          for completeness I'm including it here.
        </p>
      </div>

      <div className="skill">
        <img src={irr_logo} alt="irr_logo" />
        <p>
          <b>
            <a href="http://irrlicht.sourceforge.net/">
              irrlicht - lightning fast realtime engine
            </a>
          </b>
          <br />
          For years and years I fantasized about creating my own 3d game, with
          no shortage of ideas that combined elements of many other games in
          unique ways. Finally once I had crossed the divide from computer power
          user to computer programmer, that dream seemed reachable. But it took
          a long time and a lot of hard work to go from Python to c to c++ to
          irrlicht. An open-source 3d rendering engine that I used for{' '}
          <a href="http://kyuplex.blogspot.com">kyuplex</a>. It was a joyous
          journey and I think fondly on the days I was active in the irrlicht
          forums.
        </p>
      </div>

      <div className="skill">
        <img src={jade_logo} alt="jade_logo" />
        <p>
          <b>jade - Node Template Engine</b>
          <br />
          Although Jinja was my first exposure to templating, jade is uniquely
          both a dialect of HTML and a templating language. I utilized it for
          generating content heavy HTML quickly and efficiently. It does not
          play well with Handlebars templates, unfortunately, and I wish I had
          enough time to write an extension to the language. Would be a fun
          project.
        </p>
      </div>

      <div className="skill">
        <img src={javascript_logo} alt="javascript_logo" />
        <p>
          <b>javascript</b>
          <br />
          Javascript is the language I am most comfortable with. I have worked
          extensively with Ember.js for 3 years at The Go Game, 3 years working
          with React and Node at BuildingConnected, and then another 4 years at
          OpenSpace, working with TypeScript and React.
        </p>
      </div>

      <div className="skill">
        <img src={jinja_logo} alt="jinja_logo" />
        <p>
          <b>Jinja2</b>
          <br />
          An excellent templating language for Python. Great for use with Flask
          (Python Microframework). Similar to Django's templates, this was one
          of my first exposures to templating in Python.
        </p>
      </div>

      <div className="skill">
        <img src={jquery_logo} alt="jquery_logo" />
        <p>
          <b>jQuery</b>
          <br />
          jQuery was my gateway into web development. I learned it alongside
          javascript, back in 2012, and played around with it for a while before
          getting into ember.js. It was fun while it lasted, and I wrote my
          share of ajax methods to dynamically load content without a full page
          refresh. Good times.
        </p>
      </div>

      <div className="skill">
        <img src={kicad_logo} alt="kicad_logo" />
        <p>
          <b>KiCad</b>
          <br />I previously knew nothing about hobby electronics. I wasn't even
          sure whether red or black was positive. But I somehow got the idea in
          my head that I was tired of my fingers constantly leaving the homerow
          on my keyboard to reach the arrow keys and other shortcuts. I have
          been using vim modal style editing the entirety of my programming
          career, so I'm all about keyboard shortcuts. So naturally, I fell deep
          down the custom mechanical keyboards rabbit hole. I kept telling
          myself I didn't have time for it, but the idea burned in my brain,
          until I had designed (with KiCad) and built my own, custom keyboard:
          <br />
          <a href="https://github.com/robcmills/karn-keyboard">
            robcmills/karn-keyboard
          </a>
        </p>
      </div>

      <div className="skill">
        <img src={jsx_logo} alt="jsx_logo" />
        <p>
          <b>Photoshop Scripting</b>
          <br />
          My father bought me Photoshop Version 3.1 in the early 90's when I was
          still a child. I've been using it ever since and know it like the back
          of my hand. Me and most millenials. So once I learned to program it
          wasn't much of a jump to learn Photoshop scripting. Quite handy for
          bulk processing of images, or splitting a large tiled image of 77 cars
          into 77 small separate files.
        </p>
      </div>

      <div className="skill">
        <img src={python_logo} alt="python_logo" />
        <p>
          <b>Python</b>
          <br />
          The swiss army knife of programming languages! Python is the first
          language I learned and I have since grown to like it more and more,
          even though it's slower than molasses north of The Wall in Westeros.
          It's got some handy libraries though, such as requests, lxml,
          BeautifulSoup, and Kivy.
        </p>
      </div>

      <div className="skill">
        <img src={react_logo} alt="react_logo" />
        <p>
          <b>React</b>
          <br />
          When I started working at{' '}
          <a href="http://www.buildingconnected.com">
            buildingconnected.com
          </a>{' '}
          (October 2015) is when I learned React (back then it was v0.14.01).
          Their construction bidding management platform was originally built
          with Backbone, but we migrated to React. Being a young startup, with a
          small team, I had the opportunity to get my hands very dirty, and I
          built hundreds of React components, large and small, both inside and
          outside of Backbone views. Then I joined OpenSpace (in October 2018)
          and continued working with React, but with TypeScript. I love working
          with React, and pure functional components are a great leap forward
          for front-end development.
        </p>
      </div>

      <div className="skill">
        <img src={redux_logo} alt="redux_logo" />
        <p>
          <b>Redux</b>
          <br />I have worked extensively with Redux while working at{' '}
          <a href="http://www.buildingconnected.com">
            buildingconnected.com
          </a>{' '}
          and OpenSpace (a total of about 7 years). They used client state as a
          document store in their platforms, as well as to store most global
          application ui state in very complex apps. While we had a good run, it
          looks like the frontend ecosystem is finally evolving away from redux.
          We are currently phasing it out in favor of local state hooks, React
          Contexts, and react-query. I am excited to see what the future holds
          for frontend state management.
        </p>
      </div>

      <div className="skill">
        <img src={sass_logo} alt="sass_logo" />
        <p>
          <b>Sass</b>
          <br />
          Syntactically Awesome Style Sheets are simply a dialect of CSS, and
          the first alternate dialect of a programming language that I learned.
          After realizing the potential of programming dialects and their
          benefits, both practically and aesthetically, I went on to learn
          dialects of HTML and Javascript such as Jade and CoffeeScript. These
          days though, in a React world I prefer css-in-js solutions, my
          favorite being <a href="https://cssinjs.org">jss</a>.
        </p>
      </div>

      <div className="skill">
        <img src={typescript_logo} alt="typescript_logo" />
        <p>
          <b>TypeScript</b>
          <br />I picked up TypeScript in 2018 when I joined OpenSpace, as a
          small startup. And boy do I love it. TypeScript has done so much to
          bring JavaScript to the next level. Of course, now I feel naked when I
          have to write plain JavaScript, and I absolutely enjoy learning and
          improving my type skills. Currently working through this excellent
          learning resource:{' '}
          <a href="https://github.com/type-challenges/type-challenges">
            github.com/type-challenges
          </a>
        </p>
      </div>
    </div>
  );
}
