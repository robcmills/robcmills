import './Intro.css';
import intpLogo from '../assets/intp-logo.png';
import me from '../assets/me-square.jpg';
import shibusa from '../assets/shibusa.jpg';
import wayThingsWork from '../assets/way-things-work.jpg';

export function Intro() {
  return (
    <>
      <section className="title">
        <img className="portrait" src={me} alt="portrait" />
        <div>
          <h1>Robert Carter Mills</h1>
          <h3>coder, engineer, linguist, artist</h3>
        </div>
      </section>
      <section>
        <p>
          Although I earned my degree studying English linguistics, I was
          eventually, inevitably, drawn to programming because the traits of an
          engineer are inherent in my core personality. I have always drawn a
          deep sense of satisfaction out of learning and working with computers.
        </p>
        <p>
          In 2011 I was living in Japan and teaching English full time. It was
          there that I discovered Linux and immediately fell in love with it. In
          my spare time, I began teaching myself C++ by working through Bjarne
          Stroustrup's seminal book,{' '}
          <i>Programming - Principles and Practice Using C++</i>. Since then I
          have continued to enjoy programming with a passion that continues
          today.
        </p>
        <img className="intp" src={intpLogo} alt="intp" />
        <p>
          In terms of{' '}
          <a href="http://www.myersbriggs.org">
            Myers Brigg's personality types
          </a>{' '}
          I am <b>INTP</b>:<br />
          <b>I</b>ntroverted i<b>N</b>tuitive <b>T</b>hinking <b>P</b>erceptive
        </p>
        <i>
          <q>
            INTP's seek to develop logical explanations for everything that
            interests them. Theoretical and abstract, interested more in ideas
            than in social interaction. Quiet, contained, flexible, and
            adaptable. They have an unusual ability to focus in depth to solve
            problems in their area of interest. Skeptical, sometimes critical,
            always analytical.
          </q>
        </i>
        <br />
        <br />
        <img
          className="wayThingsWork"
          src={wayThingsWork}
          alt="wayThingsWork"
        />
        <p>
          My favorite book as a child was{' '}
          <a href="http://www.amazon.com/The-Things-Work-David-Macaulay/dp/0590429892/ref=pd_sim_b_5">
            The Way Things Work
          </a>{' '}
          by David Macaulay, and my favorite toy was my latest Legos set. I
          think that pretty much sums up my strongest personality trait. I love
          learning about and understanding the world around me and then using
          that knowledge to build things with my hands.
        </p>
        <p>
          I also have a strong artistic, creative streak with a deep
          appreciation for efficiency and organization of form, function and
          design. The aesthetic I strive for is a minimal, simple, elegant and
          polished form that unfolds complexity and power. In a word:
          <a href="http://en.wikipedia.org/wiki/Shibui"> shibusa (渋さ)</a>
          <br />
          <br />
          <i>
            <q>
              A Japanese word which refers to a particular aesthetic of simple,
              subtle, and unobtrusive beauty. Shibusa objects appear to be
              simple overall but they include subtle details, such as textures,
              that balance simplicity with complexity. This balance ensures that
              one does not tire of a shibusa object but constantly finds new
              meaning and enriched beauty that cause its aesthetic value to grow
              over the years... <br />
              <br />
              Shibusa walks a fine line between contrasting aesthetic concepts
              such as elegant and rough or spontaneous and restrained.
            </q>
          </i>
        </p>
      </section>
      <img className="shibusa" src={shibusa} alt="shibusa" />
    </>
  );
}
