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
const userValidate = (string = "", element = <input />) => {
    let result = "";    
    if(!validator.isAlphanumeric(string)) {
        element.classList.remove("success");
        element.classList.add("warning");
        result = "username chỉ được chứa ký tự và số";
        return result;
    }

    if(!validator.isLength(string, { min: 8, max: 32 })) {
        element.classList.remove("success");
        element.classList.add("warning");
        result = "username phải có độ dài từ 8 - 32 ký tự";
        return result;
    }

    // let storage = JSON.parse(localStorage.getItem("SHome_userAccounts"));
    // let username = storage.find((account) => {
    //     return account.username === string;
    // });
    // if(username) {
    //     element.classList.remove("success");
    //     element.classList.add("warning");
    //     result = "username đã được sử dụng!";
    //     return result;
    // }

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

    if(!validator.isLength(string, { min: 8, max: 32 })) {
        element.classList.remove("success");
        element.classList.add("warning");
        result = "Đây không phải tên người!";
        return result;
    }

    element.classList.add("success");
    userSignUpData['fullName'] = string;
    return result;
}
const emailValidate = (string = "", element = <input />) => {
    let result = "";  

    if(!validator.isEmail(string)) {
        element.classList.remove("success");
        element.classList.add("warning");
        result = "Sai định dạng email!";
        return result;
    }

    // let storage = JSON.parse(localStorage.getItem("SHome_userAccounts"));
    // let email = storage.find((account, index) => {
    //     return account.email === string;
    // });
    // if(email) {
    //     element.classList.remove("success");
    //     element.classList.add("warning");
    //     result = "Email đã được sử dụng!";
    //     return result;
    // }

    element.classList.add("success");
    userSignUpData['email'] = string;
    return result;
}


export const getUserData = () => {
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
        email: emailValidate(email.value, email),
        fullName: fullNameValidate(fullName.value, fullName),
        username: userValidate(username.value, username),
        password: passValidator(password.value, password),
    }
    
    if (Object.keys(userSignUpData).length === 4) {
        let SHomeData = JSON.parse(localStorage.getItem("SHome_Data"));
        let userAccounts = SHomeData.userAccounts;
        console.log(userAccounts);
        // userAccounts.push(userSignUpData);
        // localStorage.setItem("SHomeData", JSON.stringify(userAccounts));
        return true;
    }
    return validateSignUpFormData;
}