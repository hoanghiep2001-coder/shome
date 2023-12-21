import { BsFillStarFill, BsStarHalf } from "react-icons/bs";

export const calculateRating = (rating) => {
    const numberOfFullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const icons = [];

    // Tạo các full star
    for (let i = 0; i < numberOfFullStars; i++) {
        if(i === 0) {
            icons.push(<BsFillStarFill className="m-1 start_left" color="orange" key={i} />);
        } else {
            icons.push(<BsFillStarFill className="m-1" color="orange" key={i} />);
        }
    }

    // Kiểm tra nếu có half star thì thêm icon half star
    if (hasHalfStar) {
        icons.push(<BsStarHalf className="m-1" color="orange" key={numberOfFullStars} />);
    }

    // Bổ sung số sao còn lại để đủ 5 sao
    const remainingStars = 5 - icons.length;
    for (let i = 0; i < remainingStars; i++) {
        icons.push(<BsFillStarFill className="m-1" key={`empty-${i}`} />);
    }

    return icons;
};