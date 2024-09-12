import { services } from "../assets/constants/services";
function Services() {
  return (
    <div className=" flex flex-wrap box-border justify-center gap-5 py-10">
      {services.map((service, index) => {
        return (
          <div
            className="p-4 rounded shadow-md min-w-500"
            style={{
              background: "#ffffff",
              width: "calc(50% - 10px)",
              opacity: "0.95",
            }}
            key={index}
          >
            {service.svg("80px", "80px")}
            <h3 className="text-lg font-semibold my-5">{service.title}</h3>
            <p className="font-normal text-gray-500 text-sm">
              {service.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Services;
