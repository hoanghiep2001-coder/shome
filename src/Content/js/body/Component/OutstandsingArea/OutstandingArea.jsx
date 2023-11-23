
import APIs from "../../../../API";
import styles from "./OutstandingArea.module.scss";
import classnames from "classnames/bind"
const cb = classnames.bind(styles);

function OutstandingArea() {
    return (<div className={cb("body__convenient")}>
        <div className={cb("container")}>
            <div className={cb("body__subAboutUs-title")}>
            <div className="title-section">
          <h2>
          KHU VỰC NỔI BẬT
              </h2>
              <div className="title-section-line"></div>
          </div>
            </div>
            <div className={cb("row")}>
                {APIs.bodyAPIs.outstandingArea.map((area, index) => {
                    return <div className={cb("col", "col-lg-3")} key={index}>
                        <div className={cb("item")}>
                            <div className={cb("image")} style={{
                                backgroundImage: `url(${area.path})`
                            }}>

                            </div>
                            <div className={cb("overlay")}>
                                <h2 className={cb("overlay_title")}>
                                    {area.title}
                                </h2>
                                <p className={cb("overlay_desc")}>
                                    {area.description}
                                </p>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </div>);
}

export default OutstandingArea;