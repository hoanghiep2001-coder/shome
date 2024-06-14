
import React from "react";
import Header from "../../Content/js/header/header";
import Footer from "../../Content/js/footer/footer";

import APIs from "../../Content/data/API";

import { ServicerItem } from "./components/ServicerItem";


import classnames from "classnames/bind";
import styles from "./fixService.module.scss";
const cb = classnames.bind(styles);

const currentItems = APIs.bodyAPIs.fixServiceList;

function FixService() {
  return (
    <>
      <Header />

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
              <ServicerItem
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
          {/* <PaginationComp 
            currentPage={currentPage}
            handlePaginationClick={handlePaginationClick}
            MaxPage={MaxPage}
          /> */}
      </div>
    </div>

      <Footer />
    </>
  );
}

export default FixService;
