import './App.css';
import smallpeaks from '../assets/img/small-peaks.png';
import largepeaks from '../assets/img/large-peaks.png';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Katherine A. Williams</h1>
        <hr className="line" />
        <h2>Fullstack Software Engineer</h2>
      </div>
      <ul className="contact">
        <li>
          <a href="mailto:kawilliams8@gmail.com?subject=Hey, Katie!">
            Email Me
          </a>{" "}
          |
        </li>
        <li>
          <a href="https://github.com/kawilliams8/">&nbsp;GitHub</a> |
        </li>
        <li>
          <a href="https://www.linkedin.com/in/kawilliamsco/">&nbsp;LinkedIn</a>
        </li>
      </ul>
      <img
        src={largepeaks}
        id="largepeaks"
        alt="blue curved lines representing mountain peaks and valleys"
      />
      <h3>SKILLS</h3>
      <ul className="lists">
        <li>React, Redux, React Native, Expo, jQuery</li>
        <li>TDD with Jest/Enzyme and Mocha/Chai</li>
        <li>Accessible HTML5 with CSS/SCSS</li>
        <li>Git, GitHub/GitLab and Travis CI</li>
        <li>Illustrator, InDesign and Figma</li>
        <li>Bootstrap, Bootstrap Vue and Material UI</li>
        <li>MongoDB, ElasticSearch and AWS</li>
        <li>Read, write and speak French</li>
      </ul>
      <h3>EDUCATION</h3>
      <h4>Colorado Mountain College</h4>
      <ul className="lists">
        <li>Certificate in Graphic Technology</li>
      </ul>
      <h4>Western Michigan University</h4>
      <ul className="lists">
        <li>B.A. in French and Media Studies</li>
      </ul>
      <h3>EXPERIENCE</h3>
      <h4>NATIONAL RENEWABLE ENERGY LAB</h4>
      <h4>Fullstack Software Engineer</h4>
      <h4>2019 - present</h4>
      <ul className="lists">
        <li>Individual contributor to multiple production applications</li>
        <li>Task and project management experience</li>
        <li>Successful remote engineer</li>
      </ul>
      <h4>TURING SCHOOL OF SOFTWARE & DESIGN</h4>
      <h4>2019</h4>
      <ul className="lists">
        <li>Front End Engineering graduate</li>
        <li>Ten months of accelerated study</li>
        <li>Group & project-based learning</li>
      </ul>
      <div className="footer">
        <img
          src={smallpeaks}
          id="smallpeaks"
          alt="blue curved lines representing mountain peaks and valleys"
        />
      </div>
    </div>
  );
}

export default App;
