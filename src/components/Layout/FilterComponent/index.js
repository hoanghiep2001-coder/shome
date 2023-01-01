import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import APIs from "../../../Content/API";
import { IoLocationOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import searchIcon from "../../../Content/image/icon/search-icon.svg";
import DropdownComponent from "../../Dropdown";
import Button from "../../Button";

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
          <div className="col-lg-5">
            <ul className="d-lg-flex align-items-center">
              {APIs.bodyAPIs.filter.map((item, index) => {
                return (
                  <DropdownComponent
                    title={item.title}
                    contents={item.dropDown}
                    key={item.id}
                    ulClass="filter__nav-list dropdown-menu"
                    buttonClass={
                      index === 4
                        ? "Search-button filter__nav-button btn dropdown-toggle button-hover d-lg-flex align-items-center"
                        : "filter__nav-button btn dropdown-toggle"
                    }
                    searchICon={
                      // index === 4 ? <BiSearch className="Search-button-icon" /> : ""
                      index === 4 ? (
                        <img
                          src={searchIcon}
                          alt="search-For-Result"
                          style={{
                            marginRight: "8px",
                            width: "20px",
                          }}
                        />
                      ) : (
                        ""
                      )
                    }
                    arrownDownIcon={
                      index != 4 ? (
                        <FaAngleDown className="arrowDown-icon" />
                      ) : (
                        ""
                      )
                    }
                    dropDownClass="filter__nav-dropdownMenu dropdown-menu"
                    chilrenDropdownClass="filter__nav-dropdownItem"
                  />
                );
              })}
              <Button
                className={
                  "Search-button filter__nav-button btn dropdown-toggle button-hover d-lg-flex align-items-center"
                }
              >
                <img
                  src={searchIcon}
                  alt="search-For-Result"
                  style={{
                    marginRight: "8px",
                    width: "20px",
                  }}
                />
                Tìm kiếm
              </Button>
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
