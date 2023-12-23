import Pagination from "react-bootstrap/Pagination";
import classnames from "classnames/bind";
import styles from "./pagination.module.scss";

const cb = classnames.bind(styles);

export function PaginationComp({
  currentPage = 0,
  handlePaginationClick = function () {},
  MaxPage = 0,
}) {
  return (
    <>
      <Pagination className={cb("pagination_Container", "m-4", "me-0")}>
        <Pagination.First
          disabled={Number(currentPage) === 1}
          data-page={1}
          onClick={handlePaginationClick}
        />
        <Pagination.Prev
          disabled={Number(currentPage) === 1}
          data-page={Number(currentPage) - 1}
          onClick={handlePaginationClick}
        />
        {Array.from({
          length: MaxPage,
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
          disabled={Number(currentPage) === Number(MaxPage)}
          data-page={Number(currentPage) + 1}
          onClick={handlePaginationClick}
        />
        <Pagination.Last
          data-page={Number(MaxPage)}
          disabled={Number(currentPage) === Number(MaxPage)}
          onClick={handlePaginationClick}
        />
      </Pagination>
    </>
  );
}
