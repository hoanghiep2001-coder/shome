
import { FaRegUserCircle  } from "react-icons/fa";
import APIs from "../../../data/API";
function Navigation() {
  return (
    <div className="d-lg-flex align-items-lg-center">
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
            <li key={item.id} className="nav-item user-action header__nav-item">
              <item.elementType className=" nav-link header__nav-link">
                {item.content}
              </item.elementType>
            </li>
          );
        })}
      </ul>
      <div className="header__user">
        <a className="header__user-link" href="#">
          <FaRegUserCircle  fontSize={36} color="orange" className="ms-4"/>
        </a>
      </div>
    </div>
  );
}

export default Navigation;