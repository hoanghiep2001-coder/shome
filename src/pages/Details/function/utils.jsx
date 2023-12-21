import { BsFillStarFill } from "react-icons/bs";

export const calculateRating = (rating) => {
    const roundUpToHalf = Math.ceil(rating * 2) / 2;
    const icons = [];

    for (let i = 0; i < 5; i++) {
        if (i < roundUpToHalf) {
            if (i === 0) {
                icons.push(<BsFillStarFill className="m-1 start_left" color="orange"  key={i} />);
            } else {
                icons.push(<BsFillStarFill className="m-1" color="orange"  key={i} />);
            }
        } else {
            icons.push(<BsFillStarFill className="m-1" key={i} />);
        }
    }

    return icons;
};