import React from 'react'
import img1 from '../../public/assets/images/mainvisual/img1.jpg'
import img2 from '../../public/assets/images/mainvisual/img2.webp'
import img3 from '../../public/assets/images/mainvisual/img3.webp'
import Image from 'next/image'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Mainvisual = () => {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
      };
  return (
    <div className='c-mainvisual'>
        <Slider {...settings}>
            <div>
                <Image src={img1} alt='' quality={80} unoptimized />
            </div>
            <div>
                <Image src={img3} alt=''  quality={80} unoptimized />
                {/* <img src="https://via.placeholder.com/1920x1080" alt="Slide 1" /> */}
            </div>
            <div>
                <Image src={img2} alt='' quality={80} unoptimized />
            </div>
        </Slider>
    </div>
  )
}

export default Mainvisual