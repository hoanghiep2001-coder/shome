import { useEffect, useState } from "react";
import classnames from "classnames/bind";
import styles from "./Account.module.scss";
import ModalComp from "../../../../../components/Modal/ModalComp";
import { getUserData } from "../../../../../pages/function/utils";
const cb = classnames.bind(styles);

function Account(props) {
  const [logInContainer, setLogInContainer] = useState(false);
  const [activeContainer, setActiveContainer] = useState(false);
  const [signUpData, setSignUpData] = useState({ email: "", fullName: "", username: "", password: "" });

  const handleInfoItemClick = () => {
    setLogInContainer(!logInContainer);
  };


  const handleToggleActiveContainer = () => {
    console.log("check");
    setActiveContainer(false);
  };


  useEffect(() => {
    if (typeof signUpData === 'boolean') {
      setActiveContainer(true);

      setTimeout(() => {
        setActiveContainer(false);
      }, 1500);
    }
  }, [signUpData]);

  const handleSignUpClick = () => {
    setSignUpData(getUserData());
  };

  return (
    <ModalComp
      showModal={props.show}
      onClose={props.onHide}
    >
      <div
        className={cb(
          "container",
          `${logInContainer ? "log-in" : ""}`,
          `${activeContainer ? "active" : ""}`
        )}
      >
        <div className={cb("box")}></div>
        <div className={cb("container-forms")}>
          <div className={cb("container-info")}>
            <div className={cb("info-item")}>
              <div className={cb("table")}>
                <div className={cb("table-cell")}>
                  <p>Have an account?</p>
                  <div className={cb("btn")} onClick={handleInfoItemClick}>
                    Log in
                  </div>
                </div>
              </div>
            </div>
            <div className={cb("info-item")}>
              <div className={cb("table")}>
                <div className={cb("table-cell")}>
                  <p>Don't have an account?</p>
                  <div className={cb("btn")} onClick={handleInfoItemClick}>
                    Sign up
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
                  <div className={cb("btn")}>Log in</div>
                </div>
              </div>
            </div>
            <div className={cb("form-item", "sign-up")}>
              <div className={cb("table")}>
                <div className={cb("table-cell")}>
                  <div className="mb-3">
                    <input name="email" placeholder="Email" type="text" id="signUp_userEmail" />
                    <span className={cb("signUp_inputFail")}>{signUpData.email}</span>
                  </div>
                  <div className="mb-3">
                    <input name="fullName" placeholder="Full Name" type="text" id="signUp_userFullName" />
                    <span className={cb("signUp_inputFail")}>{signUpData.fullName}</span>
                  </div>
                  <div className="mb-3">
                    <input name="Username" placeholder="Username" type="text" id="signUp_userName" />
                    <span className={cb("signUp_inputFail")}>{signUpData.username}</span>
                  </div>
                  <div className="mb-3">
                    <input
                      name="Password"
                      placeholder="Password"
                      type="password"
                      id="signUp_userPassword"
                    />
                    <span className={cb("signUp_inputFail")}>{signUpData.password}</span>
                  </div>
                  <div className={cb("btn")} onClick={handleSignUpClick}>Sign up</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalComp>
  );
}

export default Account;
