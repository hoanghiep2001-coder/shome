import { BsFillGearFill, BsSearch } from "react-icons/bs";
import Accordion from 'react-bootstrap/Accordion';
import Dropdown from 'react-bootstrap/Dropdown';
import classnames from "classnames/bind";
import styles from "./filterMobile.module.scss";
import { IoLocationOutline } from "react-icons/io5";
import Button from 'react-bootstrap/Button';
import APIs from "../../../../../data/API";
const cb = classnames.bind(styles);

function FilterMobile() {
    return (
        <form
            action=""
            method="POST"
            className={cb("body__filter-form", "form")}
        >
            <div className={cb("search", "d-flex", "align-items-center")}>
                <IoLocationOutline className={cb("search-icon")} />
                <input
                    className={cb("search-input")}
                    type="text"
                    placeholder="Tìm kiếm nhanh"
                />
            </div>
            <div className={cb("mobile-actions")}>
                <Dropdown className={cb("dropdown")}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" className={cb("dropdown-toggle")}>
                        <BsFillGearFill />
                        Tùy chỉnh
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {APIs.bodyAPIs.filter.map((item, index) => {
                            return (
                                <Accordion key={item.id} defaultActiveKey={toString(index)}>
                                    <Accordion.Item eventKey={toString(index)}>
                                        <Accordion.Header>{item.title}</Accordion.Header>
                                        <Accordion.Body>
                                            hehe
                                            {/* {item.dropDown[index].content} */}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            );
                        })}
                    </Dropdown.Menu>
                </Dropdown>
                <Button className={cb("d-flex", "align-items-center", "search-btn")}>
                    <BsSearch fontSize={20} />
                    <p className="ms-2">Tìm kiếm</p>
                </Button>
            </div>
        </form>
    );
}

export default FilterMobile;