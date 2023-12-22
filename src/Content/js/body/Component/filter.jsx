
import { IoLocationOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import searchIcon from "../../../image/icon/search-icon.svg";
import Button from "../../../../components/Button";
import DropdownComponent from "../../../../components/Dropdown";
import { React, useEffect } from "react";
import APIs from "../../../data/API";

function Filter(props) {
  useEffect(() => {
    const filterComp = document.querySelector("#filterComponent");
    const handleStickyFilterComp = () => {
      if (window.scrollY > 500) {
        filterComp.classList.add("is-scrollDown");
      } else {
        filterComp.classList.remove("is-scrollDown");
      }
    };

    window.addEventListener("scroll", handleStickyFilterComp);

    return () => {
      window.removeEventListener("scroll", handleStickyFilterComp);
    };
  }, []);
  return (
    <div id="filterComponent" className="container body__filter d-lg-flex justify-content-center no-scroll">
      <form
        action=""
        method="POST"
        className="body__filter-form d-lg-flex justify-content-center align-items-center"
      >
        <div className="filter__search d-lg-flex align-items-center">
          <IoLocationOutline className="filter__search-icon" />
          <input
            className="filter__search-input"
            type="text"
            placeholder="Tìm kiếm nhanh"
          />
        </div>
        <ul className="nav filter__nav d-lg-flex align-items-center">
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
                  index !== 4 ? <FaAngleDown className="arrowDown-icon" /> : ""
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
      </form>
    </div>
  );
}

export default Filter;
