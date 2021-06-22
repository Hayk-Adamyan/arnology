import { Routers } from "./Routers";
import Mob from "./mobile/mobile";
import MobMenu from "./mobile/mobMenu";
import Menu from "./menu";
import Nav from "./nav";
export const PageOne = () => {

  return (
    <div className="main">
      <Mob />
      <MobMenu />
      <Menu />
      <Nav />

      <div className="body">
        <header className="header">
          <div className="logo">
            <img src="./img/arn_logo.png" />
          </div>
          <div className="navigation">
            <div className="ul">
              <ul className="list">
                <li>About</li>
                <li>Services</li>
                <li>Works</li>
                <li>Career</li>
                <li>Contact</li>
              </ul>
            </div>
            {/* <Routers /> */}
            <div className="btn1">
              <button className="btn11">Get an estimate</button>
            </div>
          </div>
        </header>
        <div className="estimate">
          <div className="left">
            <h1>Get an Estimate free</h1>
            <p>
              After filling up this form, our Business Development Specialist
              will contact you within 3 business days max. We will send you the
              answer via Email.
            </p>
            <p>
              Get a quote for web design and development, mobile app creation,
              software testing or another type of IT project.
            </p>
            <div className="steps">
              <h5 className="h5">Steps:</h5>
              <div className="ellipse1">1</div>
              <h2 className="h2">Project needs</h2>
              <div className="line"></div>
              <div className="ellipse2">2</div>
              <p className="more">Moredetails</p>
            </div>
          </div>
          <div className="right">
            <img src="./img/estimate_img.png" />
          </div>
        </div>
        <div className="projects">
          <div className="needs">
            <h4>1.Your project needs</h4>
            <div className="type">
              <div className="active">
                <img src="./img/2.svg" />
                <span>Business Idea Verification</span>

                <span className="ellipse">
                  <span className=""></span>
                  <img src="./img/chek.svg" />
                </span>
              </div>
              <div>
                <img src="./img/1.svg" />
                <span>Some Improvements</span>

                <span className="ellipse">
                  <span className="Ellipse-972"></span>
                  <img src="./img/chek.svg" />
                </span>
              </div>
              <div>
                <img src="./img/3.svg" />
                <span>To be created from scratch</span>

                <span className="ellipse">
                  <span className="Ellipse-972"></span>
                  <img src="./img/chek.svg" />
                </span>
              </div>
            </div>
          </div>
          <div className="device">
            <h4>2.What is the device of your project?</h4>
            <span className="span1">(You can choose multiple options)</span>
            <div className="type">
              <div className="active">
                <img src="./img/2.svg" />
                <span>Web</span>

                <span className="ellipse">
                  <span className="Ellipse-972"></span>
                  <img src="./img/chek.svg" />
                </span>
              </div>
              <div>
                <img src="./img/1.svg" />
                <span>Mobile</span>

                <span className="ellipse">
                  <span className="Ellipse-972"></span>
                  <img src="./img/chek.svg" />
                </span>
              </div>
              <div>
                <img src="./img/3.svg" />
                <span>Othet</span>

                <span className="ellipse">
                  <span className="Ellipse-972"></span>
                  <img src="./img/chek.svg" />
                </span>
              </div>
            </div>
          </div>
          <h4>3.What is your budget?</h4>
          <div className="budget">
            <div>
              <span>Under 1000 $</span> <input type="checkbox" />
            </div>
            <div>
              <span>Under 1000 $</span> <input type="checkbox" />
            </div>
            <div className="margin">
              <span>Under 1000 $</span> <input type="checkbox" />
            </div>
          </div>
          <div className="button">
            <button className="next">next step</button>
          </div>
        </div>
      </div>
      <footer>
        <div className="black">
          <div className="body1">
            <img width="254.2px" height="37.6px" src="./img/arn_logo@3x.png" />
            <div className="all">
              <div className="contact">
                <h4>Contact</h4>
                <br />
                <p>arnologyllc@gmail.com</p>
                <br />
                <p>+37490 00 00 00</p>
                <p>+37490 00 00 00</p>
              </div>
              <div className="company">
                <h4>Company</h4>
                <p>About</p>
                <p>Works</p>
                <p>Career</p>
                <p>Team</p>
                <p>Get Estimate</p>
                <p>Privacy Policy</p>
                <p>FAQ</p>
              </div>
              <div className="services">
                <h4>Services</h4>
                Backend Web Development API Development Services Devops
                Consulting Services Django Development Frontend Web Development
                React Development Angular Development Mobile Development Python
                Development Product Design
              </div>
              <div className="end">
                <h4>
                  <br />
                </h4>
                User Interface Design
                <br /> UX Design Services
                <br /> Software Product Development Data Warehouse Consulting
                Case Studies DoveMed Best Egg PetDialog FormForce CloudVelox
              </div>
            </div>
            <div className="map">
              <img src="./img/world_map.svg" />
            </div>
            <div className="lineDiv"></div>
            <div className="icon">
              <div className="Rectangle">
                <p>Copyright. 2021</p>
              </div>
              <div className="imgIcon">
                <img src="./img/fb.svg" />
                <img src="./img/ins.svg" />
                <img src="./img/lin.svg" />
                <img src="./img/twt.svg" />
                <img src="./img/github.svg" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
