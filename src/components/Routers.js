import { BrowserRouter, Route, NavLink } from "react-router-dom";
import { PageOne } from "./../components/pageOne";
export const Routers = () => {
  return (
    <div>
      {/* <BrowserRouter>
        <div className="ul">
          <ul className="list">
            <li>
              <NavLink exact to="/">
                About
              </NavLink>
            </li>
            <li>Services</li>
            <li>Works</li>
            <li>Career</li>
            <li>Contact</li>
          </ul>
        </div>
        <header>
          <ul>
            <li>
              <NavLink
                exact
                to="/"
                // activeStyle={{ background: "red", color: "blue", fontSize: "45px" }}
              >
                About
              </NavLink>
            </li>
          </ul>
          |<NavLink to="/Services">Services</NavLink>|
          <NavLink
            to="/Works"
            // activeStyle={{ background: "red", color: "blue", fontSize: "45px" }}
          >
            Works
          </NavLink>
          |
          <NavLink
            to="/Career"
            // activeStyle={{ background: "red", color: "blue", fontSize: "45px" }}
          >
            Career
          </NavLink>
          <NavLink
            to="/Contact"
            // activeStyle={{ background: "red", color: "blue", fontSize: "45px" }}
          >
            Contact
          </NavLink>
        </header>
        <Route path="/" component={PageOne} />
      </BrowserRouter> */}
    </div>
  );
};
