import { items } from "../assets/constants/howitworks";
function HowItWorks() {
  return (
    <div>
      <h1 className="text-4xl font-roboto text-center my-20 text-red">
        How It Works
      </h1>
      <div>
        {items.map((item, index) => {
          return (
            <div>
              <h2 className="text-2xl font-roboto text-center my-10 text-red">
                {item.title}
              </h2>
              <p className="text-lg font-roboto text-center my-10 text-black">
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
