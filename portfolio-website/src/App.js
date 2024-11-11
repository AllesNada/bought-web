import './App.css';
import profileImage from './image.jpg'; // import the profile image
import skillImage from './image.jpg';    // import the skill image
import projectImage1 from './pics-01.png';
import projectImage2 from './pics-02.png';
import projectImage3 from './pics-03.png';

function App() {
  return (
    <div>
      <header className="header">
        <a href="#" className="logo"><span>Nada Hanina</span></a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <i className="fa-solid fa-bars" id="menu-icon"></i>
        <button className="visit-btn">Visit Instagram</button>
      </header>

      <section className="about" id="about">
        <div className="about-container">
          <img src={profileImage} alt="Profile" />
          <div className="info-box">
            <div className="text">
              <h3>Hi, I'm</h3>
              <h1>Nada Hanina</h1>
              <span>Graphic Designer</span>
            </div>
            <div className="btn-group">
              <div className="btn">Download CV</div>
              <div className="btn">Contact</div>
            </div>
            <div className="socials">
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="skills" id="skills">
        <h2 className="section-title">Skills</h2>
        <div className="skills-info">
          <div className="grid">
            <div className="grid-card">
              <i className="fa-solid fa-computer-mouse"></i>
              <span>Adobe Illustrator</span>
              <h3>Intermediate</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, iste.</p>
            </div>
            <div className="grid-card">
              <i className="fa-solid fa-pen"></i>
              <span>Procreate</span>
              <h3>Intermediate</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, iste.</p>
            </div>
            <div className="grid-card">
              <i className="fa-solid fa-paintbrush"></i>
              <span>Photoshop</span>
              <h3>Beginner</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, iste.</p>
            </div>
            <div className="grid-card">
              <i className="fa-solid fa-circle-nodes"></i>
              <span>Blender</span>
              <h3>Beginner</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, iste.</p>
            </div>
          </div>
          <img src={skillImage} alt="Skills" />
        </div>
      </section>

      <section className="projects" id="projects">
        <h2 className="section-title">Recent Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <img src={projectImage1} alt="Fantasy World" />
            <h3>Fantasy World</h3>
            <p>Photoshop image compositing, depicting a fantasy world.</p>
            <div className="btn-group">
              <div className="btn">YouTube</div>
              <div className="btn">Instagram</div>
            </div>
          </div>
          <div className="project-card">
            <img src={projectImage2} alt="OATSIDE Poster" />
            <h3>OATSIDE Poster</h3>
            <p>Photoshop poster, compositing from multiple assets using many compositing techniques.</p>
            <div className="btn-group">
              <div className="btn">YouTube</div>
              <div className="btn">Instagram</div>
            </div>
          </div>
          <div className="project-card">
            <img src={projectImage3} alt="Witch's Library" />
            <h3>Witch's Library</h3>
            <p>A scene made in Blender depicting a fantastical library.</p>
            <div className="btn-group">
              <div className="btn">YouTube</div>
              <div className="btn">Instagram</div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="input-box">
          <h2 className="section-title">Contact Me</h2>
          <div className="input">
            <input type="text" placeholder="example@email.com" />
            <i className="fa-solid fa-envelope"></i>
          </div>
          <div className="btn">Submit</div>
        </div>
      </section>

      <footer>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <p className="copyright">© All Rights Reserved | Nada Hanina</p>
      </footer>
    </div>
  );
}

export default App;
