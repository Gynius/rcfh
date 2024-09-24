import {
  FaArrowRight,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLaptopCode,
  FaMoneyBillWave,
  FaChartLine,
  FaChartBar,
} from "react-icons/fa";
import { MdWork, MdGroup, MdMessage, MdSettings } from "react-icons/md";

function PerksNBenefits() {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-10 ">
        <h1 className="font-roboto text-lg font-extrabold py-5 w-1/3 text-center">
          There are lot of benefits to working here, these are just perks
        </h1>
        <div className="w-4/5 flex justify-center items-center h-screen">
          <div
            className="absolute circle-big w-1/4 aspect-square rounded-full flex justify-center items-center -4 "
            style={{ backgroundImage: "url(/images/bg.png)" }}
          >
            <h2 className="font-playfair text-white text-6xl font-extrabold text-center z-10">
              Perks and Benefits
            </h2>
          </div>
          <div className="w-1/2  h-full">
            <div className="h-1/3  flex justify-center items-center">
              <div className="circle  w-[12vw] aspect-square rounded-full -4 bg-green text-white flex justify-center items-center">
                <h1 className="font-robotoCondensed text-l text-center">
                  Professional Environment
                </h1>
              </div>
            </div>
            <div className="h-1/3  flex items-center relative">
              <div
                className="circle  w-[12vw] aspect-square rounded-full -4 bg-green text-white flex justify-center items-center"
                style={{
                  position: "absolute",
                  left: "15%",
                  transform: "translateX(-50%)",
                }}
              >
                <h1 className="font-robotoCondensed text-l text-center">
                  Competitive pay and job security
                </h1>
              </div>
            </div>
            <div className="h-1/3  flex justify-center items-center">
              <div className="circle  w-[12vw] aspect-square rounded-full flex -4 bg-green text-white justify-center items-center ">
                <h1 className="font-robotoCondensed text-l text-center">
                  Flexible WFH options
                </h1>
              </div>
            </div>
          </div>
          <div className="w-1/2  h-full">
            <div className="h-1/2 flex items-center relative">
              <div
                className="circle  w-[15vw] aspect-square rounded-full -4 bg-green text-white flex justify-center items-center"
                style={{
                  position: "absolute",
                  left: "70%",
                  transform: "translateX(-50%)",
                }}
              >
                <h1 className="font-robotoCondensed text-l text-center">
                  Performance appraisals and incentives
                </h1>
              </div>
            </div>
            <div className="h-1/2  flex items-center relative">
              <div
                className="circle  w-[15vw] aspect-square rounded-full -4 bg-green text-white flex
              justify-center items-center"
                style={{
                  position: "absolute",
                  left: "60%",
                  transform: "translateX(-50%)",
                }}
              >
                <h1 className="font-robotoCondensed text-l text-center">
                  Career Growth opportunities
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/** Alternative**/}
      <section className="py-10 border">
        <h1 className="text-center font-playfair text-6xl font-extrabold text-green py-10">
          Perks and Benefits
        </h1>
        <div className="container  flex justify-evenly gap-6 px flex">
          <div className="card container  flex flex-col items-center gap-4">
            <div className="rounded-full w-2/3 bg-green aspect-square flex items-center justify-center text-sm text-center  hover:bg-red">
              <FaEnvelope className="text-white text-6xl" />
            </div>
            <h1 className="text-center w-4/5">Professional Environment</h1>
          </div>

          <div className="card container  flex flex-col justify-center items-center gap-4">
            <div className="rounded-full w-2/3 bg-green aspect-square flex items-center justify-center text-sm text-center  hover:bg-red">
              <FaMoneyBillWave className="text-white text-6xl" />
            </div>
            <h1 className="text-center px-5">
              Competitive pay and job security
            </h1>
          </div>

          <div className="card container  flex flex-col  items-center gap-4">
            <div className="rounded-full w-2/3 bg-green aspect-square flex items-center justify-center text-sm text-center  hover:bg-red">
              <FaArrowRight className="text-white text-6xl" />
            </div>
            <h1 className="text-center w-4/5">Flexible WFH options</h1>
          </div>
          <div className="card container  flex flex-col  items-center gap-4">
            <div className="rounded-full w-2/3 bg-green aspect-square flex items-center justify-center text-sm text-center   hover:bg-red">
              <FaChartLine className="text-white text-6xl" />{" "}
            </div>
            <h1 className="text-center w-4/5">
              Performance appraisals and incentives
            </h1>
          </div>
          <div className="card container  flex flex-col  items-center gap-4">
            <div className="rounded-full w-2/3 bg-green aspect-square flex items-center justify-center text-sm text-center hover:bg-red">
              <FaChartBar className="text-white text-6xl" />
            </div>
            <h1 className="text-center w-4/5">Career Growth opportunities</h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default PerksNBenefits;
