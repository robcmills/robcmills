import './Projects.css';
import accutouch from '../assets/accutouch.png';
import ember_todo from '../assets/ember_todo.png';
import hex_game from '../assets/hex_game.png';
import karn_keyboard from '../assets/karn_keyboard.jpeg';
import puzzle_box from '../assets/puzzle_box.gif';
import square_stacks from '../assets/square_stacks.png';
import staex from '../assets/staex.jpg';

export function Projects() {
  return (
    <div className="projects">
      <p>
        While I typically tend to spend 125% of my time and energy on "work"
        (related to my employer), I do try to find some time to work on fun side
        projects. Here is a list of a few projects I consider <i>mostly</i>{' '}
        finished. Of course I have a much longer list of unfinished projects.
        Don't we all, right? 😅
      </p>

      <section>
        <img src={karn_keyboard} alt="karn_keyboard" />
        <p>I created a custom keyboard called the Karn.</p>
        <a href="https://github.com/robcmills/karn-keyboard">
          robcmills/karn-keyboard
        </a>
        <p>
          It's a split, low-profile, ortholinear (non-staggered), 38-key
          keyboard. Every key is within one key distance from the home row. Very
          comfortable! I have noticed much less shoulder and neck pain after
          switching. I've been using it for about 6 months now, and this is
          definitely my "endgame" keyboard.
        </p>
      </section>

      <section>
        <img src={staex} alt="staex" />
        <p>
          Simple abstract strategy board game I created, that involves moving
          your tokens around a hexagonal board and stacking hexes of your color
          to accumulate points. Simple rules, emergent strategy.
        </p>
        <a href="http://robcmills.net/staex/">robcmills.net/staex</a>
      </section>

      <section>
        <img src={square_stacks} alt="square_stacks" />
        <p>
          Implementation of Staex, where the computer ai runs a simple Monte
          Carlo search implemented in c++ and compiled to web assembly:
        </p>
        <a href="http://robcmills.net/square-stacks/">
          robcmills.net/square-stacks
        </a>
      </section>

      <section>
        <img src={hex_game} alt="hex_game" />
        <p>Simple chess variant game I created with React 15, svg and Redux:</p>
        <a href="http://robcmills.net/hex">robcmills.net/hex</a>
      </section>

      <section>
        <img src={ember_todo} alt="ember_todo" />
        <p>Ember 2.0 Todo with Bootstrap 4:</p>
        <a href="http://robcmills.net/ember-todo">robcmills.net/ember-todo</a>
      </section>

      <section>
        <img src={puzzle_box} alt="puzzle_box" />
        <p>I designed and built a wooden coordinate motion puzzle box:</p>
        <a href="http://coordinatemotionpuzzlebox.blogspot.com">
          coordinatemotionpuzzlebox.blogspot.com
        </a>
      </section>

      <section>
        <img src={accutouch} alt="accutouch" />
        <p>A fun little pure javascript project:</p>
        <a href="http://robcmills.net/accutouch">robcmills.net/accutouch</a>
      </section>
    </div>
  );
}
