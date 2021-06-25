function Mob() {
  return (
    <div className="mob">
      <div className="log">
        <img src="./img/arn_logo.png" />
      </div>
      <nav role="navigation-mob">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      <div className="contakt">
        <h2>Contact</h2>
        <p>arnologyllc@gmail.com</p>
        <p>+374 90 00 00 00</p>
        <p>+374 90 00 00 00</p>
      </div>
      <div className="company">
        <h2>Company</h2>
        <ul>
          <a href="#">
            <li>About</li>
          </a>
          <a href="#">
            <li>Works</li>
          </a>
          <a href="#">
            <li>Career</li>
          </a>
          <a href="#">
            <li>Team</li>
          </a>
          <a href="#">
            <li>Get Estimate</li>
          </a>
          <a href="#">
            <li> Privacy Policy</li>
          </a>
          <a href="#">
            <li>FAQ</li>
          </a>
        </ul>
      </div>
      <div className="lineTwo"></div>
      <div>
        <div className="imgIconMob">
          <img src="./img/fb.svg" />
          <img src="./img/ins.svg" />
          <img src="./img/lin.svg" />
          <img src="./img/twt.svg" />
          <img src="./img/github.svg" />
        </div>
      </div>
      <div className="divSpan">
        <span>Copyright. 2021</span>
      </div>
    </div>
  );
}
export default Mob;
