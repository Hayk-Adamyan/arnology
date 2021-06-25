import { Routers } from "./Routers";
import { Header } from "./Header";
import { Project } from "./Project";
export const PageOne = () => {
  return (
    <>
      {/* <Routers/> */}

      <div className="body">
        <Header />

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
        <Project />
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
    </>
  );
};
