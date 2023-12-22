
import Pagination from 'react-bootstrap/Pagination';
import { FaRegBookmark } from "react-icons/fa";
import { caculateItemsPadding, calculateRating } from "../../../../pages/function/utils";
import classnames from "classnames/bind";
import styles from "../scss/roomList.module.scss";
import APIs from '../../../data/API';
import { Constant } from '../../../data/constant';
import { useState } from 'react';

const cb = classnames.bind(styles);

function ListRoom() {
  const paginationData = Constant.Pagination;
  const [currentPage, setCurrentPage] = useState(paginationData.currentPage);

  // Tính toán phần dữ liệu cần hiển thị trên trang hiện tại
  const itemsPerPage = paginationData.itemToShow;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = APIs.bodyAPIs.roomList.slice(indexOfFirstItem, indexOfLastItem);

  // Hàm xử lý khi click vào nút phân trang
  const handlePaginationClick = (e) => {
    setCurrentPage(Number(e.target.textContent)); 
    // let pageItems = document.querySelectorAll(".pagination_Item");
    // pageItems.forEach(page => {
    //   console.log(page);
    //   page.classList.remove("active");
    // });
    // e.target.classList.add("active");
  };


  return (
    <div className="body__listRoom">
      <div className="container">
        <div className="body__listRoom-title">
          <div className="title-section">
            <h2>
              DANH SÁCH PHÒNG TRỌ NỔI BẬT
            </h2>
            <div className="title-section-line"></div>
          </div>
        </div>
        <div className="row" style={{ marginTop: "88px" }}>
          {currentItems.map((item) => {
            return (
              <RoomItem
                key={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                address={item.address}
                place={item.place}
                image={item.image}
                link={item.link}
                data_id={item.data_id}
              />
            );
          })}
        </div>
        <Pagination className={cb("pagination_Container", "m-4", "me-0")}>
          {/* Các nút phân trang */}
          <Pagination.First />
          <Pagination.Prev />
          {Array.from({ length: Math.ceil(APIs.bodyAPIs.roomList.length / itemsPerPage) }).map((_, index) => (
            <Pagination.Item 
            className="pagination_Item"
              key={index + 1} 
              // onClick={() => handlePaginationClick(index + 1)}
              onClick={handlePaginationClick}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div>
    </div>
  );
}

function RoomItem(props) {
  const rating = calculateRating(props.rating);
  const padding = caculateItemsPadding(props.data_id)

  const handleClick = (e) => {
    e.preventDefault();

    const anchorElement = e.currentTarget;
    const dataId = anchorElement.getAttribute('data-id');

    sessionStorage.setItem(`detailsPage`, dataId);
    window.location.assign("/details");
  }

  return (

    <div className={`col col-lg-3 ${padding}`}>
      <a href={props.link} className={"listRoom__item"} onClick={handleClick} data-id={props.data_id}>
        <div className="listRoom__item-wrapper">
          <img
            className="listRoom__item-img"
            src={props.image}
            alt={props.image}
          />
        </div>
        <div className="listRoom__item-content">
          <h3 className="listRoom__content-place">{props.place}</h3>
          <h3 className="listRoom__content-title">{props.title}</h3>
          <div className="listRoom__content-rating">{rating}</div>
          <p className="listRoom__content-address">{props.address}</p>
          <div className="d-lg-flex justify-content-between">
            <h3 className="listRoom__item-price">{props.price}</h3>
            <FaRegBookmark className="listRoom__item-mark" />
          </div>
        </div>
      </a>
    </div>
  );
}

export default ListRoom;
