import { items } from "../assets/constants/howitworks";

function HowItWorks() {
  return (
    <div className="bg-green py-10">
      <h1 className=" text-4xl font-roboto py-10 mb-5 text-center text-white ">
        How It Works
      </h1>
      <div className="flex">
        {items.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div className="px-10 border-b-2 border-green flex flex-col justify-center items-center">
              {item.svg("80px", "80px")}
              <h2 className="ext-2xl font-roboto text-white">{item.title}</h2>
              <p className="text-sm font-roboto text-center my-5 text-white">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HowItWorks;
