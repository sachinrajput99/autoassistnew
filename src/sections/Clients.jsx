import { clientReviews } from '../constants/index.js';

const Clients = () => {
  return (
    <section className="c-space my-20 px-4 sm:px-8 lg:px-16">
      <h3 className="head-text text-center">Hear from My Clients</h3>

      <div className="client-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {clientReviews.map((item) => (
          <div key={`review-${item.id}`} className="client-review bg-gray-800 rounded-lg p-6 shadow-lg">
            <div>
              <p className="text-white-800 font-light text-sm sm:text-base">{item.review}</p>

              <div className="client-content mt-4 flex flex-col">
                <div className="flex gap-3 items-center">
                  <img src={item.img} alt="reviewer" className="w-12 h-12 rounded-full object-cover" />
                  <div className="flex flex-col">
                    <p className="font-semibold text-white-800">{item.name}</p>
                    <p className="text-white-500 text-sm sm:text-base font-light">{item.position}</p>
                  </div>
                </div>

                <div className="flex self-end items-center gap-2 mt-3">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <img key={index} src="/assets/star.png" alt="star" className="w-5 h-5" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
