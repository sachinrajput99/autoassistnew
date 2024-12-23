import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const images = [
  {
    src: 'https://img.freepik.com/premium-photo/hand-holds-framed-photo-showcasing-breathtaking-landscape_856795-103243.jpg?w=1060',
    alt: 'Image 1',
    caption: 'Our first project!',
  },
  {
    src: 'https://img.freepik.com/free-photo/person-holding-frame-with-open-nature-landscape-concept_23-2150063226.jpg?t=st=1734801435~exp=1734805035~hmac=66dde5b79251c7871c81b340bbc0d3d3616b5f5c3e51d0bb36711e7f6ec5b1fd&w=1060',
    alt: 'Image 2',
    caption: 'A beautiful sunset.',
  },
  {
    src: 'https://img.freepik.com/free-photo/beautiful-landscape-contained-photo-frame_23-2149443192.jpg?t=st=1734801483~exp=1734805083~hmac=53673061068f34fa0cd9c2dca006aeab839fcda82241cc83fbfabe563a2ed5b7&w=1800',
    alt: 'Image 3',
    caption: 'A stunning view.',
  },
];

function SliderComponentAdmin() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    centerMode: false, // disable centerMode for a cleaner view
  };

  return (
    <div className="pt-10">
      <div className="w-full m-auto">
        <Slider {...settings}>
          {images.map((item, index) => {
            return (
              <div key={index} className="bg-white">
                <div>
                  <img src={item.src} alt={item.alt} clazzssName="w-full h-[500px] object-cover block m-auto" />
                </div>
                {/* no needof description */}
                {/* <div className="p-6 bg-blue-600">
                  <p className="font-semibold text-white text-center">{item.caption}</p>
                </div> */}
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default SliderComponentAdmin
