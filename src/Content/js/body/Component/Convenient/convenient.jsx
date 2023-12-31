
import { BiCheckShield } from "react-icons/bi";
import { FaRegBookmark } from "react-icons/fa";
import compareHouse from "../../../../image/icon/compare-house.png";
import classnames from "classnames/bind";
import styles from "./convenient.module.scss";
import {
  FaMapMarkedAlt,
  FaImages,
  FaUsersCog,
} from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { Shome_Context } from "../../../../../provider/ShomeContext";

const cb = classnames.bind(styles);
const iconConvenients = [
  {
    id: 1,
    icon: BiCheckShield,
    content: "BẢO MẬT TỐT",
    className: "convenient__item col col-lg-2 col-6",
  },
  {
    id: 2,
    icon: FaMapMarkedAlt,
    content: "BẢN ĐỒ XÁC THỰC",
    className: "convenient__item col col-lg-2 col-6",
  },
  {
    id: 3,
    icon: FaImages,
    content: "IMAGE 360",
    className: "convenient__item col col-lg-2 col-6",
  },
  {
    id: 4,
    icon: FaUsersCog,
    content: "HỖ TRỢ DỊCH VỤ 24h",
    className: "convenient__item col col-lg-2 col-6",
  },
  {
    id: 5,
    icon: compareHouse,
    content: "BẢNG SO SÁNH CÁC PHÒNG",
    className: "convenient__item col col-lg-2 col-6",
  },
  {
    id: 6,
    icon: FaRegBookmark,
    content: "LƯU PHÒNG PHÙ HỢP",
    className: "convenient__item col col-lg-2 col-6",
  },
];

function Convenient() {
  const context = useContext(Shome_Context);
  const [resStyle, setResStyle] = useState(context.webResponsiveStyle);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(resStyle === "is-phone");
  }, [resStyle])

  return (
    <div className="body__convenient bg-main">
      <div className="container">
        <div className="body__convenient-title">
          <div className="title-section">
            <h2>
              NHỮNG TIỆN ÍCH CHÚNG TÔI ĐEM LẠI
            </h2>
            <div className="title-section-line"></div>
          </div>
        </div>
        <div className={cb("body__convenient-content", "row", isMobile && "mobile-row")}>
          {iconConvenients.map((icon, index) => {
            return (
              <div key={icon.content} className={cb("convenient__item", "col", "col-lg-2", "col-6", isMobile && "mobile-col")}>
                    {index === 4 
                      ? <img className={"convenient__item-icon"} src={icon.icon} alt="compareHouse" /> 
                      : <icon.icon className={cb("convenient__item-icon", isMobile && "mobile-icon")} /> 
                    }
                   <h3 className={cb("convenient__item-title", isMobile && "mobile-title")}>{icon.content}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Convenient;
