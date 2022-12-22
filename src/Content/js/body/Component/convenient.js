import APIs from "../../../API";
import { TfiReload } from "react-icons/tfi";
import { TbNotes } from "react-icons/tb";
import { BiCheckShield } from "react-icons/bi";
import { BsClipboardCheck, BsFillBookmarkStarFill } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa";
import compareHouse from "../../../image/icon/compare-house.png";
import {
  FaMapMarkedAlt,
  FaImages,
  FaUsersCog,
  FaStickyNote,
} from "react-icons/fa";
import { useState } from "react";

const iconConvenients = [
  {
    id: 1,
    icon: BiCheckShield,
    content: "BẢO MẬT TỐT",
    className: "convenient__item col col-lg-2",
  },
  {
    id: 2,
    icon: FaMapMarkedAlt,
    content: "BẢN ĐỒ XÁC THỰC",
    className: "convenient__item col col-lg-2",
  },
  {
    id: 3,
    icon: FaImages,
    content: "IMAGE 360",
    className: "convenient__item col col-lg-2",
  },
  {
    id: 4,
    icon: FaUsersCog,
    content: "HỖ TRỢ DỊCH VỤ 24h",
    className: "convenient__item col col-lg-2",
  },
  {
    id: 5,
    icon: compareHouse,
    content: "BẢNG SO SÁNH CÁC PHÒNG",
    className: "convenient__item col col-lg-2",
  },
  {
    id: 6,
    icon: FaRegBookmark,
    content: "LƯU PHÒNG PHÙ HỢP",
    className: "convenient__item col col-lg-2",
  },
];

function Convenient() {
  const [iconClass, setIconClass] = useState("convenient__item-icon");
  return (
    <div className="body__convenient">
      <div className="container">
        <div className="body__convenient-title">
          <h2 className="title-section">NHỮNG TIỆN ÍCH CHÚNG TÔI ĐEM LẠI</h2>
        </div>
        <div className="body__convenient-content row">
          {iconConvenients.map((icon, index) => {
            return index === 4 ? (
              <div key={icon.content} className={icon.className}>
                <img className={iconClass} src={icon.icon} alt="compareHouse" />
                <h3 className="convenient__item-title">{icon.content}</h3>
              </div>
            ) : (
              <div key={icon.content} className={icon.className}>
                <icon.icon className={iconClass} />
                <h3 className="convenient__item-title">{icon.content}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Convenient;
