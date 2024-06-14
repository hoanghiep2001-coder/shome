import { useContext } from "react";

import { FaRegBookmark } from "react-icons/fa";

import Image from "../../../components/Image/Image";
import { calculateRating, caculateItemsPadding } from "../../function/utils";
import { Shome_Context } from "../../../provider/ShomeContext";

import classnames from "classnames/bind";
import styles from "./ServiceItem.module.scss";
const cb = classnames.bind(styles);


export function ServicerItem(props) {
  const context = useContext(Shome_Context);
    const rating = calculateRating(props.rating);
    const padding = caculateItemsPadding(props.data_id);
  
    // const handleClick = (e) => {
    //   e.preventDefault();
  
    //   const anchorElement = e.currentTarget;
    //   const dataId = anchorElement.getAttribute('data-id');
  
    //   sessionStorage.setItem(`detailsPage`, dataId);
    //   window.location.assign("/details");
    // }
  
    return (
  
      <div className={`col col-lg-3 col-6 ${context.webResponsiveStyle === "is-phone" && props.index >= 2 && "isPadTop-20"} ${context.webResponsiveStyle !== "is-phone" && padding}`}>
        <a href={props.link} className={cb("listRoom__item")} data-id={props.data_id}>
          <div className="listRoom__item-wrapper">
            <Image src={props.image} alt={props.image} className={cb("listRoom__item-img")}/>
          </div>
          <div className="listRoom__item-content">
            <h3 className={cb("listRoom__content-place")}>{props.place}</h3>
            <h3 className={cb("listRoom__content-title")}>{props.title}</h3>
            <div className={cb("listRoom__content-rating")}>{rating}</div>
            <p className={cb("listRoom__content-address")}>{props.address}</p>
            <div className="d-lg-flex justify-content-between">
              <h3 className={cb("listRoom__item-price")}>{props.price}</h3>
              <FaRegBookmark className="listRoom__item-mark" />
            </div>
          </div>
        </a>
      </div>
    );
  }