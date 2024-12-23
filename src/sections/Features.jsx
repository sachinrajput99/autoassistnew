import {  useState } from 'react';
import { features } from '../constants/index.js';

const Features = () => {
  const [animationName, setAnimationName] = useState('idle');

  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <p className="head-text">Features</p>

        <div className="work-container">
          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {features.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOut={() => setAnimationName('idle')}
                  className="work-content_container group transform transition-all duration-500 ease-in-out hover:scale-105 hover:translate-y-3 hover:shadow-2xl hover:scale-105 hover:perspective-1000">
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:translate-z-10">
                      <img className="w-full h-full" src={item.icon} alt="" />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800 transition-all duration-300 group-hover:text-teal-400">
                      {item.name}
                    </p>
                    <p className="text-sm mb-5">
                      {item.pos} -- <span>{item.duration}</span>
                    </p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500 group-hover:scale-105">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* canvas */}
          <div className="work-canvas"></div>
        </div>
      </div>
    </section>
  );
};

export default Features;
