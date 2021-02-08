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
          <a href="https://github.com/kawilliams8/">GitHub</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/kawilliamsco/">LinkedIn</a>
        </li>
        <li>
          <a href="mailto:kawilliams8@gmail.com?subject=Hey, Katie!">
            Send me an email
          </a>
        </li>
      </ul>
      <img
        src={largepeaks}
        id="largepeaks"
        alt="blue curved lines representing mountain peaks and valleys"
      />
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
