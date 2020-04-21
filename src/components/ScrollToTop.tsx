import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const ScrollToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    }, [isVisible]);

    const handleScroll = () => {
        if (window.pageYOffset > 250) {
            setIsVisible(true)
        } else setIsVisible(false);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    };

    return (
        <>
            {isVisible &&
                <div className="scroll-top">
                    <FontAwesomeIcon
                        icon='arrow-up'
                        className='post-reviews__icon'
                        size="2x"
                        onClick={scrollToTop}
                    />
                </div>
            }
        </>
    )
}
