import APIs from "../../../API";
import { FaRegBookmark } from "react-icons/fa";
function ListRoom() {
  return (
    <div className="body__listRoom">
      <div className="container">
        <div className="body__listRoom-title">
          <h2 className="title-section">DANH SÁCH PHÒNG TRỌ NỔI BẬT</h2>
        </div>
        <div
          className="row"
          style={{
            marginTop: "88px",
          }}
        >
          {APIs.bodyAPIs.roomList.map((item) => {
            return (
              <RoomItem
                key={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                address={item.address}
                place={item.place}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function RoomItem(props) {
  return (
    <div className="col col-lg-3">
      <div className="listRoom__item">
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
          <p className="listRoom__content-address">{props.address}</p>
          <div className="d-lg-flex justify-content-between">
            <h3 className="listRoom__item-price">{props.price}</h3>
            <FaRegBookmark className="listRoom__item-mark" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListRoom;
