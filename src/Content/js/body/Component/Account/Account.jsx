import { useState } from "react";
import classnames from "classnames/bind";
import styles from "./Account.module.scss";
import ModalComp from "../../../../../components/Modal/ModalComp";
import validator from "validator";
const cb = classnames.bind(styles);

function Account(props) {
  const [logInContainer, setLogInContainer] = useState(false);
  const [activeContainer, setActiveContainer] = useState(false);
  const [signUpFormData, setSignUpFormData] = useState({
    email: "",
    fullName: "",
    username: "",
    password: "",
  });

  const handleInfoItemClick = () => {
    setLogInContainer(!logInContainer);
  };

  // const handleContainerFormClick = () => {
  //   setActiveContainer(true);
  // };

 const handleSignUpClick = () => {
    // Lấy giá trị từ các trường input khi người dùng nhấn nút Sign Up
    const email = document.querySelector('input[name="email"]').value;
    const fullName = document.querySelector('input[name="fullName"]').value;
    const username = document.querySelector('input[name="Username"]').value; // Lưu ý tên trường input là "Username" thay vì "Username"
    const password = document.querySelector('input[name="Password"]').value;

    // Cập nhật state với các giá trị vừa lấy được
    setSignUpFormData({
      email,
      fullName,
      username,
      password,
    });

    // Đoạn này bạn có thể thực hiện các xử lý khác sau khi lấy dữ liệu, ví dụ: validate dữ liệu, gửi request đăng ký tài khoản, vv.
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
                  <input name="Username" placeholder="Username" type="text" />
                  <input
                    name="Password"
                    placeholder="Password"
                    type="password"
                  />
                  <div className={cb("btn")}>Log in</div>
                </div>
              </div>
            </div>
            <div className={cb("form-item", "sign-up")}>
              <div className={cb("table")}>
                <div className={cb("table-cell")}>
                  {/* {validator.isEmail()} */}
                  <input name="email" placeholder="Email" type="text" />
                  <input name="fullName" placeholder="Full Name" type="text" />
                  <input name="Username" placeholder="Username" type="text" />
                  <input
                    name="Password"
                    placeholder="Password"
                    type="password"
                  />
                  <div className={cb("btn")}>Sign up</div>
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
