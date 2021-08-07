import { BarSVG, AngleDownSVG, SignOutSVG, EditSVG } from "./svg.component";
import Main from "./main.component";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Top() {
  const [isOpen, setIsOpen] = useState(false);
  const SVGHandleOpen = () => {
    console.log("woorks");
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="userdash__top">
        <div className="userdash__top__height">
          <div className="userdash__top__height__bar">
            <BarSVG />
          </div>
          <div className="userdash__top__height__name">
            <div className="userdash__top__height__name__profile" onClick={SVGHandleOpen}>
              <img src="https://via.placeholder.com/50" alt="" draggable="false" />
              <p>John Doe</p>
              <div className="userdash__top__height__name__profile__angle-down">
                <AngleDownSVG />
              </div>
            </div>
            <div
              className={
                isOpen
                  ? "userdash__top__height__name__dropdown isOpen"
                  : "userdash__top__height__name__dropdown"
              }
            >
              <ul>
                <Link to="/dashboard/edit-profile">
                  <EditSVG />
                  <li>Edit Profile</li>
                </Link>
                <Link to="/dashboard">
                  <SignOutSVG />
                  <li>Logout</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <Main />
      </div>
    </>
  );
}
