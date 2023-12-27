import { BsFillStarFill, BsStarHalf } from "react-icons/bs";
import validator from "validator";
import { createUserAccounts, getUserAccount } from "./crud";

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


export const caculateItemsPadding = (id) => {
    let string = "";
    if ((id >= 5 && id <= 8) || (id >= 13 && id <= 16) || (id >= 21 && id <= 24) || (id >= 29 && id <= 32)) {
        string = "isPadTop-20"
    }

    return string;
}

let userSignUpData = {};
const passValidator = (string = "", element = <input />) => {
    let result = "";
    if (!validator.isLength(string, { min: 8, max: 24 })) {
        element.classList.remove("success");
        element.classList.add("warning");
        result = "Mật khẩu phải có độ dài từ 8 - 24 ký tự.";
        return result;
    }

    if (!/[A-Z]/.test(string)) {
        element.classList.remove("success");
        element.classList.add("warning");
        result = "Mật khẩu phải chứa ít nhất 1 ký tự viết hoa.";
        return result;
    }

    if (/[^\w\s]/.test(string)) {
        element.classList.remove("success");
        element.classList.add("warning");
        result = "Mật khẩu không được chứa ký tự đặc biệt.";
        return result;
    }

    element.classList.add("success");
    userSignUpData['password'] = string;
    return result;
}
const userValidate = async (string = "", element = <input />) => {
    let result = "";
    if (!validator.isAlphanumeric(string)) {
        element.classList.remove("success");
        element.classList.add("warning");
        result = "username chỉ được chứa ký tự và số";
        return result;
    }

    if (!validator.isLength(string, { min: 8, max: 32 })) {
        element.classList.remove("success");
        element.classList.add("warning");
        result = "username phải có độ dài từ 8 - 32 ký tự";
        return result;
    }

    let isUsernameExist = await getUserAccount(string);
    if (isUsernameExist) {
        console.log(1);
        element.classList.remove("success");
        element.classList.add("warning");
        result = "Username đã được sử dụng!";
        return result;
    }

    element.classList.add("success");
    userSignUpData['username'] = string;
    return result;
}
const fullNameValidate = (string = "", element = <input />) => {
    let result = "";
    if (!validator.matches(string, /^[a-zA-Z\s]+$/)) {
        element.classList.remove("success");
        element.classList.add("warning");
        result = "FullName chỉ được chứa ký tự và dấu cách. VD: Duong Hoang Hiep";
        return result;
    }

    if (!validator.isLength(string, { min: 8, max: 32 })) {
        element.classList.remove("success");
        element.classList.add("warning");
        result = "Đây không phải tên người!";
        return result;
    }

    element.classList.add("success");
    userSignUpData['fullName'] = string;
    return result;
}
const emailValidate = async (string = "", element = <input />) => {
    let result = "";
    if (!validator.isEmail(string)) {
        element.classList.remove("success");
        element.classList.add("warning");
        result = "Sai định dạng email!";
        return result;
    }

    let isEmailExist = await getUserAccount(string);
    if (isEmailExist) {
        console.log(2);
        element.classList.remove("success");
        element.classList.add("warning");
        result = "Email đã được sử dụng!";
        return result;
    }

    element.classList.add("success");
    userSignUpData['email'] = string;
    return result;
}


export const userDataValidator = async () => {
    let validateSignUpFormData = {
        email: "",
        fullName: "",
        username: "",
        password: "",
    };
    const email = document.querySelector('#signUp_userEmail');
    const fullName = document.querySelector('#signUp_userFullName');
    const username = document.querySelector('#signUp_userName');
    const password = document.querySelector('#signUp_userPassword');

    validateSignUpFormData = {
        email: await emailValidate(email.value, email),
        fullName: fullNameValidate(fullName.value, fullName),
        username: await userValidate(username.value, username),
        password: passValidator(password.value, password),
    }

    if (Object.keys(userSignUpData).length === 4) {
        createUserAccounts(userSignUpData);
        return true;
    }
    return validateSignUpFormData;
}