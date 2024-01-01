import { PaginationComp } from "./Pagination/Pagination";
import { useState } from "react";
import {Constant} from "../../../data/constant";
import APIs from "../../../data/API";
import { RoomItem } from "./RoomItem/RoomItem";


function ListRoom() {
  const paginationData = Constant.Pagination;
  const [currentPage, setCurrentPage] = useState(paginationData.currentPage);

  // Tính toán phần dữ liệu cần hiển thị trên trang hiện tại
  const itemsPerPage = paginationData.itemToShow;
  const MaxPage = Math.ceil(APIs.bodyAPIs.roomList.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = APIs.bodyAPIs.roomList.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

    const scrollToTopList = () => {
      window.scrollTo({
          top: 580,
          behavior: "smooth"
      });
  };

  // Hàm xử lý khi click vào nút phân trang
  const handlePaginationClick = (e) => {

    e.preventDefault();
    let dataPage = e.currentTarget.getAttribute("data-page");
    Number(dataPage);
    if (dataPage) {
      if (dataPage > MaxPage || dataPage < 1) {
        return;
      }
      setCurrentPage(dataPage);
    } else {
      setCurrentPage(Number(e.target.textContent));
    }
    scrollToTopList();
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
          {currentItems.map((item, index) => {
            return (
              <RoomItem
                key={item.id}
                index={index}
                title={item.title}
                rating={item.rating}
                price={item.price}
                address={item.address}
                place={item.place}
                image={item.images[0].path}
                link={item.link}
                data_id={item.data_id}
              />
            );
          })}
        </div>
          <PaginationComp 
            currentPage={currentPage}
            handlePaginationClick={handlePaginationClick}
            MaxPage={MaxPage}
          />
      </div>
    </div>
  );
}

export default ListRoom;
