import { HomeSVG, SignOutSVG, BriefCaseSVG } from "./svg.component";
import { Link } from "react-router-dom";
export default function SideBar() {
  const aa = "";
  return (
    <>
      <div className="userdash__side">
        <h4 className="userdash__side--brand">Software House</h4>
        <div className="userdash__side__username">
          <img src="https://via.placeholder.com/50" alt="" draggable="false" />
          <p>John Doe</p>
        </div>
        <div className="userdash__side__item">
          <ul>
            <Link to="/dashboard">
              <HomeSVG />
              <li>home</li>
            </Link>
            <Link to="/dashboard/attendance">
              <BriefCaseSVG />
              <li>Attendance</li>
            </Link>
            <Link to="/dashboard/dummy">
              <li>Dummy</li>
            </Link>
            <Link to="/logout">
              <SignOutSVG />
              <li>Logout</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
