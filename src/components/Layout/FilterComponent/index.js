import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { IoLocationOutline } from "react-icons/io5";
import DropdownComponent from "../../Dropdown";
import APIs from "../../../Content/data/API";

function FilterPageComp() {
  return (
    <div className="body__filterPage">
      <form action="" className="container body__filterPage-form">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className=" d-lg-flex align-items-center filter__search-wrapper">
              <IoLocationOutline className="filter__search-icon" />
              <input
                className="filter__search-input"
                type="text"
                placeholder="Nhập địa điểm bạn muốn tìm"
              />
            </div>
          </div>
          <div className="col-lg-5 body__filterPage-col">
            <ul className="d-lg-flex align-items-center justify-content-between body__filterPage-list">
              {APIs.bodyAPIs.Pages.filter.map((item, index) => {
                return (
                  <DropdownComponent
                    title={item.title}
                    contents={item.dropDown}
                    key={item.id}
                    ulClass="filter__nav-list dropdown-menu"
                    buttonClass={"filter__nav-button btn dropdown-toggle"}
                    dropDownClass="filter__nav-dropdownMenu dropdown-menu"
                    chilrenDropdownClass="filter__nav-dropdownItem"
                  />
                );
              })}
            </ul>
          </div>
          <div className="col-lg-2 text-end">
            <Tippy content="TÌM KIẾM">
              <button className="button-hover primary-button filterPage-search">
                TÌM KIẾM
              </button>
            </Tippy>
          </div>
        </div>
        <div className="row"></div>
      </form>
    </div>
  );
}

export default FilterPageComp;
