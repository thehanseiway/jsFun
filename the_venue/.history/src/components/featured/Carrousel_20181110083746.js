import React from 'react';
import Slider from 'react-slick';
import slide_one from '../../resources/images/slide_one.jpg';
import slide_two from '../../resources/images/slide_two.jpg';
import slide_three from '../../resources/images/slide_three.jpg';

const Carrousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div
            className="carrousel_wrapper"
            style={{height: `${window.innerHeight}px`}}
        >
            <Slider {...settings}>
                <div>
                    <img src={slide_one} />
                </div>
                <div>
                    <h3>{slide_two}</h3>
                </div>
                <div>
                    <h3>{slide_three}</h3>
                </div>
            </Slider>
        </div>
    );
};

export default Carrousel;