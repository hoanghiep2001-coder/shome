import APIs from "../../../API";

function CompanyInfo() {
    return (
        <div className="footer__companyInfo">
            <div className="row">
                {
                    APIs.footerAPIs.companyInfo.map(item => {
                        return <div key={item.id} className="footer__companyInfo-item col col-lg-3">
                            <h2 className="footer__companyInfo-title">{item.title}</h2>
                            <p className="footer__companyInfo-desc">{item.content}</p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default CompanyInfo;