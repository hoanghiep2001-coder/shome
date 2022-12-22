import APIs from "../../../API";

function SubAboutUs() {
  return (
    <div className="body__subAboutUs ">
      <div className="body__subAboutUs-desc container">
        <div className="body__subAboutUs-title">
          <h2 className="title-section">CHÚNG TÔI LÀ AI</h2>
        </div>
        {APIs.bodyAPIs.subAboutUs.descriptions.map((content) => {
          return (
            <p key={content.id} className="body__subAboutUs-content">
              {content.content}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default SubAboutUs;
