import { NavLink } from "react-router-dom";
import { Auth } from "../components/auth";

export default function Nav(){
  const activeClass = ({ isActive }) => isActive ? "active" : "";

  return (<span className="row">
    <nav className="column">
        <i className="fa-solid fa-bars menu"></i>
        <NavLink to={"/"}end className={activeClass}>Home</NavLink>
        {/* <NavLink to={"/pastquestions"} className={activeClass}>Past Questions</NavLink> */}
        {/* <NavLink to={"/questionrecomendations"} className={activeClass}>Question Recomendations</NavLink> */}
        <Auth/>
    </nav>
  </span>);
}