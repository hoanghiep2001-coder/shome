import { useEffect, useState, useContext } from "react";
import classnames from "classnames/bind";
import styles from "./Account.module.scss";
import ModalComp from "../../../../../components/Modal/ModalComp";
import { userDataValidator } from "../../../../../pages/function/utils";
import axios from "axios";
import { Shome_Context } from "../../../../../provider/ShomeContext";
const cb = classnames.bind(styles);

function Account(props) {
  const context = useContext(Shome_Context);
  const [logInContainer, setLogInContainer] = useState(false);
  const [activeContainer, setActiveContainer] = useState(false);
  const [email, setEmail] = useState();
  const [fullName, setFullName] = useState();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [signUpData, setSignUpData] = useState({ email: "", fullName: "", username: "", password: "" });
  axios.defaults.withCredentials = true;

  const handleInfoItemClick = () => {
    setLogInContainer(!logInContainer);
  };

  useEffect(() => {
    if (typeof signUpData === 'boolean') {
      setActiveContainer(true);


      setTimeout(() => {
        setActiveContainer(false);
      }, 1500);
    }
  }, [signUpData]);

  const handleSignUpClick = (e) => {
    // const data = {
    //   email,
    //   fullName,
    //   username,
    //   password
    // }
    // e.preventDefault();
    // setSignUpData(userDataValidator(data));
  };

  return (
    <ModalComp
      showModal={props.show}
      onClose={props.onHide}
      
    >
      <div
        className={cb(
          "container",
          context.webResponsiveStyle === "is-phone" && "is-phone",
          `${logInContainer && "log-in"}`,
          `${activeContainer && "active"}`
        )}
      >
        <div className={cb("box")}></div>
        <form className={cb("container-forms")}>
          <div className={cb("container-info")}>
            <div className={cb("info-item")}>
              <div className={cb("table")}>
                <div className={cb("table-cell")}>
                  <p>Bạn đã có tài khoản?</p>
                  <div className={cb("btn")} onClick={handleInfoItemClick}>
                    Đăng nhập
                  </div>
                </div>
              </div>
            </div>
            <div className={cb("info-item")}>
              <div className={cb("table")}>
                <div className={cb("table-cell")}>
                  <p>Chưa có tài khoản ư?</p>
                  <div className={cb("btn")} onClick={handleInfoItemClick}>
                    Đăng ký
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cb("container-form")}>
            <div className={cb("form-item", "log-in")}>
              <div className={cb("table")}>
                <div className={cb("table-cell")}>
                  <div className="mb-3">
                    <input name="Username" placeholder="Username" type="text" />
                    {/* <span className={cb("signUp_inputFail")}></span> */}
                  </div>
                  <div className="mb-3">

                    <input
                      name="Password"
                      placeholder="Password"
                      type="password"
                    />
                    {/* <span className={cb("signUp_inputFail")}></span> */}
                  </div>
                  <div className={cb("btn")}>Đăng nhập</div>
                </div>
              </div>
            </div>
            <div className={cb("form-item", "sign-up")}>
              <div className={cb("table")}>
                <div className={cb("table-cell")}>
                  <div className="mb-3">
                    <input 
                      name="email" 
                      placeholder="Email" 
                      type="text" 
                      id="signUp_userEmail" 
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className={cb("signUp_inputFail")}>{signUpData.email}</span>
                  </div>
                  <div className="mb-3">
                    <input name="fullName" placeholder="Full Name" type="text" id="signUp_userFullName" onChange={(e) => setFullName(e.target.value)} />
                    <span className={cb("signUp_inputFail")}>{signUpData.fullName}</span>
                  </div>
                  <div className="mb-3">
                    <input name="Username" placeholder="Username" type="text" id="signUp_userName" onChange={(e) => setUserName(e.target.value)} />
                    <span className={cb("signUp_inputFail")}>{signUpData.username}</span>
                  </div>
                  <div className="mb-3">
                    <input
                      name="Password"
                      placeholder="Password"
                      type="password"
                      id="signUp_userPassword"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className={cb("signUp_inputFail")}>{signUpData.password}</span>
                  </div>
                  <button type="submit" className={cb("btn", "d-block")} onClick={handleSignUpClick}>Đăng ký</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </ModalComp>
  );
}

export default Account;
