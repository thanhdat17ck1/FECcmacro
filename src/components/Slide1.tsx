import React from "react";
import img from "@/assets/images/slide.png";
import Image from "next/image";
import Slider from "react-slick";

const Slide1 = () => {
    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
              breakpoint: 992, // Khi màn hình nhỏ hơn hoặc bằng 991px
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };

    return (
        <>
            <div className="programme">
                <Slider {...settings}>
                    <div className="programme__item">
                        <a href="#">
                        <Image src={img} alt="" />
                        </a>
                    </div>
                    <div className="programme__item">
                        <a href="#">
                        <Image src={img} alt="" />
                        </a>
                    </div>
                    <div className="programme__item">
                        <a href="#">
                        <Image src={img} alt="" />
                        </a>
                    </div>
                    <div className="programme__item">
                        <a href="#">
                        <Image src={img} alt="" />
                        </a>
                    </div>
                    <div className="programme__item">
                        <a href="#">
                        <Image src={img} alt="" />
                        </a>
                    </div>
                </Slider>
            </div>
        </>
    );
};

export default Slide1;
