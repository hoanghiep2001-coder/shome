import { useContext } from "react";
import APIs from "../../../../data/API";
import { Shome_Context } from "../../../../../provider/ShomeContext";
import classnames from "classnames/bind";
import styles from "./subAboutUs.module.scss";
const cb = classnames.bind(styles);

function SubAboutUs() {
  const context = useContext(Shome_Context);
  return (
    <div className="body__subAboutUs ">
      <div className="body__subAboutUs-desc container">
        <div className={cb("body__subAboutUs-title", "config-isPhone-title")}>
          <div className="title-section">
          <h2>
            CHÚNG TÔI LÀ AI
          </h2>
          <div className="title-section-line"></div>
          </div>
        </div>
        {APIs.bodyAPIs.subAboutUs.descriptions.map((content) => {
          return (
            <p key={content.id} className={cb("body__subAboutUs-content", `${context.webResponsiveStyle === "is-phone" && "config-isPhone-text"}`)}>
              {content.content}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default SubAboutUs;
