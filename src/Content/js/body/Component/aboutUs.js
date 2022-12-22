import APIs from "../../../API";

function AboutUs() {
    return (
        <div className="body__aboutUs container">
            <h2 className="aboutUs__title">
                CÓ GÌ Ở BẢN ĐÔN?
            </h2>
            <div className="row">
            {
                APIs.bodyAPIs.aboutUs.map(element => {
                    return <div key={element.id} className="aboutUs__item col col-lg-4 ">
                        <img className="aboutUs__item-image" src={element.image} />
                        <h3 className="aboutUs__item-title">
                            {element.title}
                        </h3>
                        <p className="aboutUs__item-desc">
                            {element.content}
                        </p>
                    </div>
                })
            }
            </div>
        </div>
    )
}

export default AboutUs;