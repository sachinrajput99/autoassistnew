
const PricingCard = () => {
  return (
    <div className="bg-black text-white p-6 rounded-lg border border-gray-700 max-w-sm mx-auto flex flex-col justify-between ">
      <div className="text-center">
        <div className="text-sm bg-gray-800 text-gray-400 px-2 py-1 rounded-full inline-block">MOST POPULAR</div>
        <h2 className="text-3xl font-bold mt-4">Startup</h2>
        {/* <p className="text-5xl font-bold mt-2">£39</p> */}
        <p className="text-gray-400 mt-2">All the basics for starting a new business</p>
      </div>
      <ul className="mt-6 space-y-2 text-sm">
        <li className="flex items-center">
          <span className="text-green-500 mr-2">✔</span>User App
        </li>
        <li className="flex items-center">
          <span className="text-green-500 mr-2">✔</span>Driver App
        </li>
        <li className="flex items-center">
          <span className="text-green-500 mr-2">✔</span>Employee App
        </li>
        <li className="flex items-center">``
          <span className="text-green-500 mr-2">✔</span>Super Admin Panel
        </li>
        <li className="flex items-center">
          <span className="text-green-500 mr-2">✔</span>Website
        </li>
        <li className="flex items-center">
          <span className="text-green-500 mr-2">✔</span>Dispatcher Panel
        </li>
        <li className="flex items-center">
          <span className="text-green-500 mr-2">✔</span>Customization
        </li>
        <li className="flex items-center">
          <span className="text-green-500 mr-2">✔</span>Email
        </li>  <li className="flex items-center">
          <span className="text-green-500 mr-2">✔</span>Advance Pay
        </li>
      </ul>
      <div className="text-center mt-6">
        <button className="bg-white text-black font-semibold py-2 px-6 rounded-full hover:bg-gray-200">Sign up</button>
      </div>
    </div>
  );
};

export default PricingCard;
