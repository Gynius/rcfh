import { items } from "../assets/constants/whoweare";

function WhoWeAre() {
  console.log(items);
  return (
    <div className="bg-gradient-to-b from-green to-white w-full h-auto items-center justify-center flex flex-col md:flex-col py-10">
      <h1 className="text-center font-roboto text-4xl font-semibold py-4 text-white">
        Who We Are
      </h1>
      <h2 className="font-robotoCondensed text-2xl mb-10 text-white">
        Your Partner in Growth and Success
      </h2>
      <div className="w-4/5 grid gap-4 lg:grid-cols-4 md:grid-cols-2 align-center ">
        {items.map((item, index) => {
          return (
            <div
              className="p-4 rounded shadow-md w-full"
              style={{ background: "#f1f1f1" }}
              key={index}
            >
              {item.svg("80px", "80px")}
              <h3 className="text-lg font-semibold my-5">{item.title}</h3>
              <p className="font-normal text-gray-500 text-small">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
      <p className="font-normal text-small w-4/5 my-10 text-center font-robotoCondensed">
        Your business is on the cusp of growth, and our team is here to keep you
        organized and on track to success. Take a look at some of our team
        members and learn a bit more about what they do here at RCFH.
      </p>
      <button className="bg-red inline-flex justify-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 hover:bg-green :text-white :border-gray-700 :hover:bg-gray-700 :focus:ring-gray-800 text-white">
        See Our Teams
      </button>
    </div>
  );
}

export default WhoWeAre;
