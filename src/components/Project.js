import NextPage from "./../NextPage";

export const Project = (props) => {
  console.log(props)
  return (
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
      <NextPage />
    </div>
  );
};
