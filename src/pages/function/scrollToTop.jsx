import { BsArrowBarUp } from "react-icons/bs";
import { useEffect } from "react";
import classnames from "classnames/bind";
import styles from "./scrollToTop.module.scss";
const cb = classnames.bind(styles)
function ScrollToTop() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollButton = document.getElementById("scrollToTopButton");
            if (scrollButton) {
                if (window.scrollY > 200) {
                    scrollButton.classList.add(cb("show"));
                } else {
                    scrollButton.classList.remove(cb("show"));
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return ( <>
        <div 
            className={cb("button", "hide")}
            id="scrollToTopButton"
            onClick={scrollToTop}
            >
            <div className={cb("button-body")}>
                <BsArrowBarUp />
            </div>
        </div>
    </> );
}

export default ScrollToTop;