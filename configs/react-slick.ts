import { Settings } from 'react-slick';

const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    centerPadding: '120px',
    responsive: [
        {
            breakpoint: 1920,
            settings: {
                dots: true,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 3000,
                speed: 500,
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: true,
                arrows: false,
                centerPadding: '52px',
            },
        },
        {
            breakpoint: 834,
            settings: {
                dots: true,
                infinite: true,
                speed: 500,
                autoplay: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                arrows: false,
                centerPadding: '20px',
            },
        },
    ],
};

export default settings;
