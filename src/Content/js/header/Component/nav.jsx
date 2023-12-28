import { FaRegUserCircle, FaBars  } from "react-icons/fa";
import APIs from "../../../data/API";
import Account from "../../body/Component/Account/Account";
import { useState, useContext } from "react";
import classnames from "classnames/bind";
import styles from "./Nav.module.scss";
import { Shome_Context } from "../../../../provider/ShomeContext";
const cb = classnames.bind(styles);
function Navigation() {
  const context = useContext(Shome_Context);
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className={cb("d-flex", "align-items-center", "mobile_container")}>
        {context.webResponsiveStyle !== "is-phone" && (
          <>
            <ul className="nav">
              {APIs.headerAPIs.Navigation[0].Menu.map((item) => {
                return (
                  <li key={item.id} className="nav-item header__nav-item">
                    <a className="nav-link header__nav-link" href={item.path}>
                      {item.content}
                    </a>
                  </li>
                );
              })}
            </ul>
            <ul className="nav">
              {APIs.headerAPIs.Navigation[0].UserActions.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="nav-item user-action header__nav-item"
                  >
                    <item.elementType className=" nav-link header__nav-link">
                      {item.content}
                    </item.elementType>
                  </li>
                );
              })}
            </ul>
            <div className="header__user">
              <div className="header__user-link">
                <FaRegUserCircle
                  onClick={() => setModalShow(true)}
                  fontSize={36}
                  color="orange"
                  className="ms-4 header__user-img"
                />
              </div>
            </div>
          </>
        )}
        {context.webResponsiveStyle === "is-phone" && (
          <>
            <FaBars fontSize={30}/>
            {/* <ul className="nav">
              {APIs.headerAPIs.Navigation[0].Menu.map((item) => {
                return (
                  <li key={item.id} className="nav-item header__nav-item">
                    <a className="nav-link header__nav-link" href={item.path}>
                      {item.content}
                    </a>
                  </li>
                );
              })}
            </ul>
            <ul className="nav">
              {APIs.headerAPIs.Navigation[0].UserActions.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="nav-item user-action header__nav-item"
                  >
                    <item.elementType className=" nav-link header__nav-link">
                      {item.content}
                    </item.elementType>
                  </li>
                );
              })}
            </ul>
            <div className="header__user">
              <div className="header__user-link">
                <FaRegUserCircle
                  onClick={() => setModalShow(true)}
                  fontSize={36}
                  color="orange"
                  className="ms-4 header__user-img"
                />
              </div>
            </div> */}
          </>
        )}

      </div>
      <Account show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default Navigation;
