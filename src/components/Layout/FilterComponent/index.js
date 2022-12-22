import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { IoLocateOutline, IoLocationOutline } from "react-icons/io5";

function FilterPageComp() {
  return (
    <div className="body__filterPage">
      <form action="" className="container body__filterPage-wrapper">
        <div className="row">
          <div className="col-lg-5">
            <div className=" d-lg-flex align-items-center">
              <IoLocationOutline className="filter__search-icon" />
              <input
                className="filter__search-input"
                type="text"
                placeholder="Tìm kiếm nhanh"
              />
            </div>
          </div>
          <div className="col-lg-5"></div>
          <div className="col-lg-2">
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
