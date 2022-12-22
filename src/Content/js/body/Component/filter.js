import APIs from "../../../API";
import { IoLocationOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import searchIcon from "../../../image/icon/search-icon.svg";
import Button from "../../../../components/Button";

function Filter(props) {
  return (
    <div className="container body__filter d-lg-flex justify-content-center">
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
                  index != 4 ? <FaAngleDown className="arrowDown-icon" /> : ""
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

function DropdownComponent(props) {
  return (
    <div className="btn-group">
      <button
        type="button"
        className={props.buttonClass}
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {props.searchICon}
        {props.title}
        {props.arrownDownIcon}
      </button>
      <ul className={props.dropDownClass}>
        {props.contents.map((content) => {
          return (
            <li key={content.fakeId} className={props.chilrenDropdownClass}>
              <a className="dropdown-item" href="#">
                {content.content}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Filter;
