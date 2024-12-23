import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { User0, User1, User2 } from '../assets';

const images = [
  {
    src: User0,  // Use the imported User0 directly
    alt: 'Image 1',
    caption: 'Our first project!',
  },
  {
    src: User1,  // Use the imported User1 directly
    alt: 'Image 2',
    caption: 'A beautiful sunset.',
  },
  {
    src: User2,  // Use the imported User2 directly
    alt: 'Image 3',
    caption: 'A stunning view.',
  },
];

function SliderComponentUser() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    centerMode: false, // Disable centerMode for a cleaner view
  };

  return (
    <div className="pt-10">
      <div className="w-full m-auto">
        <Slider {...settings}>
          {images.map((item, index) => (
            <div key={index} >
           <div className="bg-black  rounded-lg overflow-hidden">
         
  <img 
    src={item.src} 
    alt={item.alt} 
    className="w-full h-[500px] object-contain block m-auto "  // Use object-contain and ensure image fits fully
  />
 
</div>

            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SliderComponentUser;
