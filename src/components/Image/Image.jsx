import { useState } from "react";
import errorImg from "../../Content/image/thumb/Error/error.webp"


function Image({src, alt, className, ...passProps}) {
    const [imageSrc, setImageSrc] = useState(src);

    const handleImageError = () => {
        // Nếu hình ảnh không tải được, thay thế src bằng errorImg
        setImageSrc(errorImg);
    };


    let Component  = "img";
    const props = {
        src: imageSrc,
        alt,
        className,
        onError: handleImageError,
        ...passProps
    }

    return ( 
        <Component {...props}/>
    );
}

export default Image;