import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { IoLocationOutline } from "react-icons/io5";

function FilterPageComp() {
  return (
    <div className="body__filterPage">
      <form action="" className="container body__filterPage-form">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className=" d-lg-flex align-items-center">
              <IoLocationOutline className="filter__search-icon" />
              <input
                className="filter__search-input"
                type="text"
                placeholder="Nhập địa điểm bạn muốn tìm"
              />
            </div>
          </div>
          <div className="col-lg-5"></div>
          <div className="col-lg-2 text-end">
            <Tippy content="TÌM KIẾM">
              <button className="button-hover primary-button">TÌM KIẾM</button>
            </Tippy>
          </div>
        </div>
        <div className="row"></div>
      </form>
    </div>
  );
}

export default FilterPageComp;
