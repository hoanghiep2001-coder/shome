

import { useContext } from "react";
import APIs from "../../../../data/API";
import styles from "./OutstandingArea.module.scss";
import classnames from "classnames/bind"
import { Shome_Context } from "../../../../../provider/ShomeContext";
const cb = classnames.bind(styles);

function OutstandingArea() {
    const context = useContext(Shome_Context); 

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
            <div className={cb("row", context.webResponsiveStyle === "is-phone" && "mobile-row")}>
                {APIs.bodyAPIs.outstandingArea.map((area, index) => {
                    return <div className={cb(
                            "col", 
                            "col-lg-3", 
                            "col-6", 
                            index >= 2 && context.webResponsiveStyle === "is-phone" && "mt-4"
                        )} 
                        key={index}>
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