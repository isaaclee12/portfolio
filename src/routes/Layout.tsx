import React from 'react';
import '../app.css';
import projectList from '../projectList.json';

const Layout: React.FC = () => {
  return (
    <body className="is-preload">
      {/* Header */}
      <section id="header">
        <div className="inner">
          <h1>
            <strong>Isaac Lee</strong> is a Full Stack Software Engineer with an <br />
            enthusiastic drive for creating incredible products.
          </h1>
          <ul className="actions special">
            <li><a href="#one" className="button scrolly">Discover</a></li>
          </ul>
        </div>
      </section>

      {/* One */}
      <section id="one" className="main style1">
        <div className="container">
          <div className="row gtr-150">
            <div className="col-6 col-12-medium">
              <header className="major">
                <h2>A Self-Starter, and a Go-Getter</h2>
              </header>
              <p>
                Planned, managed, and developed diverse projects. Mastered broad domain knowledge, technologies, and their uses.
                Demonstrated ability to adapt on the fly. Achieved and exceeded several product goals for different clients.
              </p>
            </div>
            <div className="col-6 col-12-medium imp-medium">
              <span className="image fit"><img src="assets/me_coding.gif" alt="" /></span>
            </div>
          </div>

          <div className="container new-item">
            <div className="row gtr-150">
              <div className="col-6 col-12-medium imp-medium">
                <span className="image fit"><img src="assets/2U_XpertAssistantDemo.gif" alt="" /></span>
              </div>
              <div className="col-6 col-12-medium">
                <header className="major">
                  <h2>Achievements</h2>
                </header>
                <ul>
                  <li>Architected robust AI systems that <strong>increased revenue prospects by over 150% in 6 weeks</strong></li>
                  <li>Designed and built incredible applications for a <strong>prestigious international education platform</strong></li>
                  <li>Owned solutions to resolve problems that affected <strong>thousands of students around the world at a time</strong></li>
                  <li>Mentored an intern engineer to foster an <strong>environment focused on learning and growth</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two */}
      <section id="two" className="main style2">
        <div className="container">
          <div className="row gtr-150">
            <div className="col-6 col-12-medium">
              <ul className="major-icons">
                <li><span className="icon style1 major brands fa-node-js"></span></li>
                <li><span className="icon style2 major brands fa-react"></span></li>
                <li><span className="icon style3 major brands fa-python"></span></li>
                <li><span className="icon style4 major brands fa-github"></span></li>
                <li><span className="icon style5 major brands fa-docker"></span></li>
                <li><span className="icon style6 major fa-solid fa-snowflake"></span></li>
                <li><span className="icon style7 major brands fa-slack"></span></li>
                <li><span className="icon style8 major brands fa-figma"></span></li>
                <li><span className="icon style9 major brands fa-aws"></span></li>
                <li><span className="icon style10 major fa-solid fa-comments"></span></li>
                <li><span className="icon style11 major fa-solid fa-keyboard"></span></li>
                <li><span className="icon style12 major brands fa-cloudflare"></span></li>
              </ul>
            </div>
            <div className="col-6 col-12-medium">
              <header className="major">
                <h2>Master of Technologies, from Front-End to Back-End</h2>
              </header>
              <p>Mastered broad domain knowledge, technologies, and their uses. Demonstrated ability to adapt on the fly.</p>
              
              <div className="skills-list">
                <p>Languages:</p><p className="skills-list-item">Python, JavaScript, TypeScript, HTML, CSS, Java, C++</p>
                <p>Frameworks/Utilities:</p><p className="skills-list-item">Django, Generative AI (OpenAI), React, Next.js, Redux </p>
                <p>Databases:</p><p className="skills-list-item">SQL (PostgreSQL, MySQL), NoSQL (MongoDB)</p>
                <p>Software Development:</p><p className="skills-list-item">Development APIs, UI/UX, Agile, Lean, Accessibility, A/B Testing</p>
                <p>Version Control & CI/CD:</p><p className="skills-list-item">Git/Github, GoCD, ArgoCD, Snowflake, Jenkins</p>
                <p>DevOps:</p><p className="skills-list-item">Docker, Kubernetes, AWS, Kafka, Terraform</p>
                <p>Other:</p><p className="skills-list-item">Slack, Jira, Figma, Written and Verbal Communication, Problem-Solving Skills</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three */}
      <section id="three" className="main style1 special">
        <div className="container">
          <header className="major">
            <h2>Projects</h2>
          </header>
          <p>Isaac Lee has designed and developed several projects as a solo creator and a team player in remote Agile work environments.</p>

          {/* ROW 1 */}
          <div className="row gtr-150">
            <div className="col-4 col-12-medium">
              <span className="image fit"><img src="assets/ScheduleMaker.jpg" alt=""/></span>
              <h3>ScheduleMaker</h3>
              <p>A webtool designed to help small businesses keep track of their employee's schedules.  
                Created with 
                <strong>JavaScript</strong>, 
                <strong>React</strong>, 
                <strong>Django</strong>, 
                & <strong>MySQL</strong>.</p>
              <ul className="actions special">
                <li><a href="https://github.com/isaaclee12/ScheduleMaker" target="_blank" className="button">View</a></li>
              </ul>
            </div>

            <div className="col-4 col-12-medium">
              <span className="image fit"><img src="assets/twitbot.jpg" alt="" /></span>
              <h3>RL for Social Media Engagement</h3>
              <p>A reinforcement learning agent intended to maximize engagement on Twitter by means of liking, retweeting, following, and more. Created with <strong>Python</strong>.</p>
              <ul className="actions special">
                <li><a href="https://github.com/isaaclee12/rl-social-media-engagment" target="_blank" className="button">View</a></li>
              </ul>
            </div>

            <div className="col-4 col-12-medium">
              <span className="image fit"><img src="assets/policemap.jpg" alt="" /></span>
              <h3>Racial Disparities In Police Killings</h3>
              <p>A data visualization of racial disparities in police killings by US state. Created with 
                <strong>HTML</strong>, 
                <strong>CSS</strong>, 
                <strong>JavaScript</strong>, 
                <strong>Flask</strong>, 
                & <strong>MongoDB</strong>.</p>
              <ul className="actions special">
                <li><a href="https://github.com/isaaclee12/racial-disparities-in-police-killings-by-state" target="_blank" className="button">View</a></li>
              </ul>
            </div>
          </div>

          {/* ROW 2 */}
          <div className="row gtr-150">
            <div className="col-4 col-12-medium">
              <span className="image fit"><img src="assets/chedd.jpg" alt=""/></span>
              <h3>CheddyBot</h3>
              <p>A project where I used Discord's bot API to create a bot account for my university's gaming club. Created in JavaScript.</p>
              <ul className="actions special">
                <li><a href="https://github.com/isaaclee12/CheddyBot" target="_blank" className="button">View</a></li>
              </ul>
            </div>

            <div className="col-4 col-12-medium">
              <span className="image fit"><img src="assets/uvmstatsclub.png" alt="" /></span>
              <h3>UVM S&DS Club Website</h3>
              <p>A project where I used Django, HTML, and Boostrap to revise the website for UVM's Statistics and Data Science Club.</p>
              <ul className="actions special">
                <li><a href="https://github.com/isaaclee12/statistics-and-data-science-club-v2" target="_blank" className="button">View</a></li>
              </ul>
            </div>

            <div className="col-4 col-12-medium">
              <span className="image fit"><img src="assets/four-elements.jpg" alt="" /></span>
              <h3>Leap Motion Element Game</h3>
              <p>An in-browser game that controlled by a Leap Motion device. Uses KNN to map hand gestures to elemental attacks. Made with JS</p>
              <ul className="actions special">
                <li><a href="https://github.com/isaaclee12/Leap_Motion_Element_Game" target="_blank" className="button">View</a></li>
              </ul>
            </div>
          </div>

          {/* ROW 3 */}
          <div className="row gtr-150">
            <div className="col-4 col-12-medium">
              <span className="image fit"><img src="assets/lock.jpg" alt=""/></span>
              <h3>Symmetric Cryptographer</h3>
              <p>A C++ program that can be used to encrypt and decrypt a string.</p>
              <ul className="actions special">
                <li><a href="https://github.com/isaaclee12/Symmetric-Cryptographer" target="_blank" className="button">View</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
};

export default Layout;
