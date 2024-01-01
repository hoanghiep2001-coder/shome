import { useContext } from "react";
import Image from "../../../../../components/Image/Image";
import { caculateItemsPadding, calculateRating } from "../../../../../pages/function/utils";
import { FaRegBookmark } from "react-icons/fa";
import { Shome_Context } from "../../../../../provider/ShomeContext";


export function RoomItem(props) {
  const context = useContext(Shome_Context);
    const rating = calculateRating(props.rating);
    const padding = caculateItemsPadding(props.data_id);
  
    const handleClick = (e) => {
      e.preventDefault();
  
      const anchorElement = e.currentTarget;
      const dataId = anchorElement.getAttribute('data-id');
  
      sessionStorage.setItem(`detailsPage`, dataId);
      window.location.assign("/details");
    }
  
    return (
  
      <div className={`col col-lg-3 col-6 ${context.webResponsiveStyle === "is-phone" && props.index >= 2 && "isPadTop-20"} ${context.webResponsiveStyle !== "is-phone" && padding}`}>
        <a href={props.link} className={"listRoom__item"} onClick={handleClick} data-id={props.data_id}>
          <div className="listRoom__item-wrapper">
            <Image src={props.image} alt={props.image} className={"listRoom__item-img"}/>
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