import Pagination from "react-bootstrap/Pagination";
import classnames from "classnames/bind";
import styles from "./pagination.module.scss";

const cb = classnames.bind(styles);


export function PaginationComp({currentPage = 0, handlePaginationClick = function(){}, itemsPerPage = 0, roomLengthAPI = 0}) {


  return (
    <>
      <Pagination className={cb("pagination_Container", "m-4", "me-0")}>
        <Pagination.First data-page={1} onClick={handlePaginationClick} />
        <Pagination.Prev
          data-page={Number(currentPage) - 1}
          onClick={handlePaginationClick}
        />
        {Array.from({
          length: Math.ceil(roomLengthAPI / itemsPerPage),
        }).map((_, index) => (
          <Pagination.Item
            className="pagination_Item"
            active={Number(currentPage) === index + 1}
            key={index + 1}
            onClick={handlePaginationClick}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          data-page={Number(currentPage) + 1}
          onClick={handlePaginationClick}
        />
        <Pagination.Last data-page={3} onClick={handlePaginationClick} />
      </Pagination>
    </>
  );
};
