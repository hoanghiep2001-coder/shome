import Button from "../../../../../components/Button";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import classnames from "classnames/bind";
import styles from "./service.module.scss";
const cb = classnames.bind(styles);


function Service() {

  return (
    <div className="body__service">
      <div className={cb("container", "body__service-wrapper", "config-wrapper")}>
        <div className={cb("row", "body__service-row", "config-row")}>
          <div className={cb("col", "col-lg-6", "config-col")}>
            <h2 className="service__title">HỖ TRỢ KHÁCH HÀNG</h2>
            <div className="service__warpper">
              <h3>E-Mail</h3>
              <p>httkphongtro@gmail.com</p>
            </div>
            <div className="service__warpper">
              <h3>HOTILINE 24/7</h3>
              <p>0396448870</p>
            </div>
          </div>
          <div className={cb("col", "col-lg-6", "config-col")}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control service__form-control"
                id="formGroupExampleInput"
                placeholder="Họ Tên "
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control service__form-control"
                id="formGroupExampleInput2"
                placeholder="E-Mail"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control service__form-control"
                id="formGroupExampleInput3"
                placeholder="Số Điện Thoại"
              />
            </div>
            <div className="body__service-actions">
              <div>
                <Button
                  href="https://www.facebook.com/profile.php?id=100075271575687"
                  target="_blank"
                  className="button-hover primary-button service_actions-contact "
                >
                  Liên Hệ
                </Button>
              </div>
              <div>
                <Button
                  href="https://www.facebook.com/duonghhiep"
                  target="_blank"
                >
                  <FaFacebookSquare className="service_actions-icon"></FaFacebookSquare>
                </Button>
                <Button href="#">
                  <FaYoutube className="service_actions-icon"></FaYoutube>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
