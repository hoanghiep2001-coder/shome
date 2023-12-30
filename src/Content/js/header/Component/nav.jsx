import ListGroup from 'react-bootstrap/ListGroup';
import Offcanvas from 'react-bootstrap/Offcanvas';
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
  const [showCanvas, setShowCanvas] = useState(false);
  const [activeItem, setActiveItem] = useState(null); 

  const handleClose = () => setShowCanvas(false);
  const handleShow = () => setShowCanvas(true);
  const handleItemClick = (itemId) => {
    setActiveItem(itemId); 
  };
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
            <FaBars fontSize={30} onClick={handleShow}/>
            <Offcanvas show={showCanvas} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Danh Mục</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <ListGroup as="ul">
                    {APIs.headerAPIs.Navigation[0].Menu.map((item) => {
                      return (
                        <ListGroup.Item 
                          as="li" 
                          key={item.id} 
                          className="nav-item header__nav-item"
                          onClick={() => handleItemClick(item.id)}
                        >
                          <a className="nav-link header__nav-link" href={item.path}>
                            {item.content}
                          </a>
                        </ListGroup.Item>
                      );
                    })}
                      {APIs.headerAPIs.Navigation[0].UserActions.map((item) => {
                      return (
                        <ListGroup.Item
                        as="li"
                          key={item.id}
                          className="nav-item user-action header__nav-item"
                        >
                          <item.elementType className=" nav-link header__nav-link">
                            {item.content}
                          </item.elementType>
                        </ListGroup.Item>
                      );
                    })}
               
                    <ListGroup.Item as="li">
                      <div className="header__user">
                          <div className="header__user-link">
                            <FaRegUserCircle
                              onClick={() => setModalShow(true)}
                              fontSize={36}
                              color="orange"
                              className="header__user-img"
                            />
                          </div>
                        </div>
                    </ListGroup.Item>
                </ListGroup>
              </Offcanvas.Body>
            </Offcanvas>
          </>
        )}

      </div>
      <Account show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default Navigation;
