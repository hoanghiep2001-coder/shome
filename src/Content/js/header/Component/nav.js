import APIs from "../../../API";
import userImage from "../../../image/icon/icon_login.png";

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
          <img className="header__user-img" alt="user" src={userImage} />
        </a>
      </div>
    </div>
  );
}

export default Navigation;
