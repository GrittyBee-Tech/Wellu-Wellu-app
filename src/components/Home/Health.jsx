// import healthPlant from "../../assets/img/health-plant.jpg";
import healthPlant from "../../assets/images/plant-leave.png";

const Health = () => {
  return (
    <section className="health-tips mb-36 mt-11">
      <div className="bg-[#447B02] p-3 md:flex items-center">
        <div className="md:container px-4">
          <h3 className="text-tab-text  text-[32px] text-[#ffff] px-4 ">Health Tips</h3>
        </div>

      </div>
      <div className="md:mx-auto md:px-20 md:flex mt-20 px-5">
        <div className="mt-44 hidden">
          <img
            className="md:w-[519px] md:h-[390px] rounded-[16px] relative -right-20 flex-grow"
            src={healthPlant}
          />
        </div>
        <div className="md:w-[733px] md:h-[602px] border-4 border-[#447B02] rounded-[24px] mt-10 pl-4">
          <h1 className="font-bold text-[#447B02] text-[24px]  font-Mulish md:leading-[120px] underline decoration[#447B02] md:ml-60">
            Importance of Herbs
          </h1>
          <div className="flex gap-3 md:md:w-[236] md:h-[49] md:ml-20 md:mr-20">
            <div className="mt-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <circle cx="8.5" cy="8" r="8" fill="#777777" />
              </svg>
            </div>
            <div className="mt-6 ">
              <h4 className="text-[20px] leading-5 font-bold font-Mulish">
                Heading
              </h4>
              <p className="md:w-[540px] md:h-[57px] text[#2F2F2F] font-Mulish text-[16px] font-light leading-normal">
                Lorem ipsum dolor sit amet consectetur. At amet ultrices morbi
                eleifend nunc dignissim tempus. Quis sit
              </p>
            </div>
          </div>
          <div className="flex gap-3 md:md:w-[236] md:h-[49] md:ml-20 md:mr-20">
            <div className="mt-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <circle cx="8.5" cy="8" r="8" fill="#777777" />
              </svg>
            </div>
            <div className="mt-6 ">
              <h4 className="text-[20px] leading-5 font-bold font-Mulish">
                Heading
              </h4>
              <p className="md:w-[540px] md:h-[57px] text[#2F2F2F] font-Mulish text-[16px] font-light leading-normal">
                Lorem ipsum dolor sit amet consectetur. At amet ultrices morbi
                eleifend nunc dignissim tempus. Quis sit
              </p>
            </div>
          </div>
          <div className="flex gap-3 md:md:w-[236] md:h-[49] md:ml-20 md:mr-20">
            <div className="mt-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <circle cx="8.5" cy="8" r="8" fill="#777777" />
              </svg>
            </div>
            <div className="mt-6 ">
              <h4 className="text-[20px] leading-5 font-bold font-Mulish">
                Heading
              </h4>
              <p className="md:w-[540px] md:h-[57px] text[#2F2F2F] font-Mulish text-[16px] font-light leading-normal">
                Lorem ipsum dolor sit amet consectetur. At amet ultrices morbi
                eleifend nunc dignissim tempus. Quis sit
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Health;



