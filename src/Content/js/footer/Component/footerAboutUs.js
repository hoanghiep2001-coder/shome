import APIs from "../../../API";

function FooterAboutUs() {
  return (
    <div className="footer__aboutUs">
      <div className="row">
        <div className="col col-lg-8">
          {APIs.footerAPIs.aboutUs.map((item) => {
            return (
              <div key={item.id} className="footer__aboutUs-item">
                <h2 className="footer__aboutUs-title">{item.title}</h2>
                <p className="footer__aboutUs-desc">{item.content}</p>
              </div>
            );
          })}
        </div>
        <div className="col col-lg-1"></div>
        <div className="col col-lg-3">
            <h3 className="footer__aboutUs-title">LIÊN KẾT</h3>
            <ul className="list-group list-group-flush footer__aboutUs-list">
                {APIs.footerAPIs.link.map((item) => {
                return <li key={item.id} className="list-group-item">
                            <a href={item.url} className="footer__aboutUs-link">
                                {item.content}
                            </a>
                        </li>;
                })}
            </ul>
        </div>
      </div>
    </div>
  );
}

export default FooterAboutUs;
