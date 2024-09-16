import { items } from "../assets/constants/howitworks";

function HowItWorks() {
  return (
<<<<<<< Updated upstream
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
=======
    <section
      id="why-us"
      className="why-us section display flex items-center justify-center py-8"
    >
      <div className="container">
        <h1 className="text-center font-roboto text-4xl font-semibold py-4 mb-10 text-red">
          How it Works
        </h1>
        <div className="row no-gutters why-us-section  flex item-center justify-center gap-1">
          <div
            className="col-lg-4 col-md-6 card"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span>01</span>
            <h4>Discover</h4>
            <p>
              We identify expectations and critical issues facing our clients,
              both large and small. Our unique approach is not only what
              differentiates us, but also what makes us successful.
            </p>
          </div>

          <div
            className="col-lg-4 col-md-6 card"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span>02</span>
            <h4>Delegate</h4>
            <p>
              We Assign the right people to the right task ensures that it is
              expertly handled and completely accomplished.
            </p>
          </div>

          <div
            className="col-lg-4 col-md-6 card"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <span>03</span>
            <h4>Deploy</h4>
            <p>
              We Execute tasks. Each and everyone is knowledgeable and up to the
              task. Coordination at its finest in providing the best output.
            </p>
          </div>

          <div
            className="col-lg-4 col-md-6 card"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <span>04</span>
            <h4>Deliver</h4>
            <p>
              We are Results Driven to provide services and solutions to help
              organizations facilitate change, achieve their vision and optimize
              performance and productivity.
            </p>
          </div>
        </div>
>>>>>>> Stashed changes
      </div>
    </div>
  );
}

export default HowItWorks;
