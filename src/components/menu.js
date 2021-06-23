function Menu() {
  return (
    <div>
      <div id="menu">
        <div className="up">
          <div className="logo">
            <img src="./img/arn_logo.png" />
          </div>
          <div className="ri">
            <ul>
              <a href="#">
                <li>ABOUT</li>
              </a>
              <a href="#">
                <li>SERVICES</li>
              </a>
              <a href="#">
                <li>WORKS</li>
              </a>
              <a href="#">
                <li>CAREER</li>
              </a>
              <a href="https://erikterwan.com/" target="_blank">
                <li>CONTACT</li>
              </a>
            </ul>
           
          </div>
        </div>
        <div className="am">
              <span id="actSpan">EN</span>
              <span>RU</span>
              <span>HY</span>
            </div>
        <div className="icon_active">
          <div className="imgIcon">
            <img src="./img/fb.svg" />
            <img src="./img/ins.svg" />
            <img src="./img/lin.svg" />
            <img src="./img/twt.svg" />
            <img src="./img/github.svg" />
          </div>
          <div className="btn2">
            <button className="btn22">Get an estimate</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Menu;
