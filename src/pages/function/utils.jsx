import { BsFillStarFill, BsStarHalf } from "react-icons/bs";
import validator from "validator";

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
    if ((id >= 5 && id <= 8) || (id >= 13 && id <= 16) || (id >= 21 && id <= 24) || (id >= 29 && id <= 32)) {
        string = "isPadTop-20"
    }

    return string;
}


export const getUserData = () => {
    let signUpFormData = {
        email: "",
        fullName: "",
        username: "",
        password: "",
    }

    const passValidator = (string = "") => {
        let result = "";
        if (!validator.isLength(string, { min: 8, max: 24 })) {
            result = "Mật khẩu phải có độ dài từ 8 - 24 ký tự.";
            return result;
        }

        if (!/[A-Z]/.test(string)) {
            result = "Mật khẩu phải chứa ít nhất 1 ký tự viết hoa.";
            return result;
        }

        if (/[^\w\s]/.test(string)) {
            result = "Mật khẩu không được chứa ký tự đặc biệt.";
            return result;
        }

        result = string;
        return result;
    }

    const userValidate = (string = "") => {
        let result = "";    
        if(!validator.isAlphanumeric(string)) {
            result = "username chỉ được chứa ký tự và số";
            return result;
        }

        if(!validator.isLength(string, { min: 8, max: 32 })) {
            result = "username phải có độ dài từ 8 - 32 ký tự";
            return result;
        }

        result = string;
        return result;
    }

    const email = document.querySelector('#signUp_userEmail').value;
    const fullName = document.querySelector('#signUp_userFullName').value;
    const username = document.querySelector('#signUp_userName').value;
    const password = document.querySelector('#signUp_userPassword').value;

    signUpFormData = {
        email: validator.isEmail(email) ? email : "Sai định dạng email!",
        fullName: (validator.isAlpha(fullName) 
            && validator.isLength(fullName, { min: 8, max: 32 }) ? fullName : "Đây không phải tên người!"),
        username: userValidate(username),
        password: passValidator(password),
    }

    return signUpFormData;
}