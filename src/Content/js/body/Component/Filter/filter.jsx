
import { IoLocationOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import searchIcon from "../../../../image/icon/search-icon.svg";
import Button from "../../../../../components/Button";
import DropdownComponent from "../../../../../components/Dropdown";
import { React, useContext, useLayoutEffect, useRef, useState } from "react";
import APIs from "../../../../data/API";
import classnames from "classnames/bind";
import styles from "./filter.module.scss";
import { Shome_Context } from "../../../../../provider/ShomeContext";
import FilterMobile from "./Responsive/FilterMobile";
const cb = classnames.bind(styles);

function Filter(props) {
  const [scrollDown, setScrollDown] = useState("");
  const filterCompRef = useRef(null);
  const context = useContext(Shome_Context);

  useLayoutEffect(() => {
    const handleStickyFilterComp = () => {
      if (context.webResponsiveStyle === "is-phone") {
        if (window.scrollY > 580) {
          setScrollDown("is-scrollDown");
        } else {
          setScrollDown("");
        }
      } else {
        if (window.scrollY > 400) {
          setScrollDown("is-scrollDown");
        } else {
          setScrollDown("");
        }
      }
    };

    window.addEventListener("scroll", handleStickyFilterComp);
    return () => {
      window.removeEventListener("scroll", handleStickyFilterComp);
    };
  }, [context.webResponsiveStyle]);
  return (

    <div id="filterComponent" ref={filterCompRef} className={cb("container", "body__filter", "d-lg-flex", "justify-content-center", "no-scroll",
      context.webResponsiveStyle === "is-phone" && "mobile-filter",
      scrollDown
    )}>

      {/* ---- mobile Filter */}
      {context.webResponsiveStyle === "is-phone" && (
        <FilterMobile />
      )}


      {/* ---- PC Filter */}
      {context.webResponsiveStyle !== "is-phone" && (
        <div
          action=""
          method="POST"
          className={cb("body__filter-form", "d-lg-flex", "justify-content-center", "align-items-center")}
        >
          <div className={cb("filter__search", "d-lg-flex", "align-items-center")}>
            <IoLocationOutline className={cb("filter__search-icon")} />
            <input
              className={cb("filter__search-input")}
              type="text"
              placeholder="Tìm kiếm nhanh"
            />
          </div>
          <ul className={cb("nav", "filter__nav", "d-lg-flex", "align-items-center")}>
            {APIs.bodyAPIs.filter.map((item, index) => {
              return (
                <DropdownComponent
                  title={item.title}
                  contents={item.dropDown}
                  key={item.id}
                  ulClass={cb("filter__nav-list", "dropdown-menu")}
                  buttonClass={`${index === 4 && "Search-button button-hover d-lg-flex align-items-center"} filter__nav-button btn dropdown-toggle`}
                  searchICon={index === 4 && (
                    <img src={searchIcon} alt="search-For-Result"
                      style={{
                        marginRight: "8px",
                        width: "20px",
                      }}
                    />
                  )
                  }
                  arrownDownIcon={
                    index !== 4 && <FaAngleDown className={cb("arrowDown-icon")} />
                  }
                  dropDownClass={cb("filter__nav-dropdownMenu", "dropdown-menu")}
                  chilrenDropdownClass={cb("filter__nav-dropdownItem")}
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
      )}

    </div>
  );
}

export default Filter;
