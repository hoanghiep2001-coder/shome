import { BsFillStarFill, BsStarHalf } from "react-icons/bs";

export const calculateRating = (rating) => {
    const numberOfFullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const icons = [];

    for (let i = 0; i < numberOfFullStars; i++) {
        if (i === 0) {
            icons.push(<BsFillStarFill className="m-1 start_left" color="orange" key={i} />);
        } else {
            icons.push(<BsFillStarFill className="m-1" color="orange" key={i} />);
        }
    }

    if (hasHalfStar) {
        icons.push(<BsStarHalf className="m-1" color="orange" key={numberOfFullStars} />);
    }

    const remainingStars = 5 - icons.length;
    for (let i = 0; i < remainingStars; i++) {
        icons.push(<BsFillStarFill className="m-1" key={`empty-${i}`} />);
    }

    return icons;
};


export const ScrollToMap = () => {

}

export const caculateItemsPadding = (id) => {
    let string = "";
    if ((id >= 5 && id <= 8) || (id >= 13 && id <= 16)) {
        string = "isPadTop-20"
    }

    return string;
}