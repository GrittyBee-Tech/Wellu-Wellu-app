import healthplant from "/src/assets/Images/Health-plant.jpeg";

const Health = () => {
  return (
    <section className="health-tips mb-36 mt-11">
      <div className="bg-[#447B02] p-3 flex items-center">
        <div className="md:container px-4">
          <h3 className="text-tab-text  text-[32px] text-[#ffff] px-4 ">Health Tips</h3>
        </div>

      </div>
      <div className=" md:container  md:mx-auto px-20 flex mt-20">
        <div className="mt-44">
          <img
            className="w-[519px] h-[390px] rounded-[16px] relative -right-20 flex-grow"
            src={healthplant}
          />
        </div>
        <div className="w-[733px] h-[602px] border-4 border-[#447B02] rounded-[24px] mt-10 pl-4">
          <h1 className="font-bold text-[#447B02] text-[24px]  font-Mulish leading-[120px] underline decoration[#447B02] ml-60">
            Importance of Herbs
          </h1>
          <div className="flex gap-3 w-[236] h-[49] ml-20 mr-20">
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
              <p className="w-[540px] h-[57px] text[#2F2F2F] font-Mulish text-[16px] font-light leading-normal">
                Lorem ipsum dolor sit amet consectetur. At amet ultrices morbi
                eleifend nunc dignissim tempus. Quis sit
              </p>
            </div>
          </div>
          <div className="flex gap-3 w-[236] h-[49] ml-20 mr-20">
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
            <div className="mt-6">
              <h4 className="text-[20px] leading-5 font-bold font-Mulish">
                Heading
              </h4>
              <p className="w-[540px] h-[57px] text[#2F2F2F] font-Mulish text-[16px] font-light leading-normal">
                Lorem ipsum dolor sit amet consectetur. At amet ultrices morbi
                eleifend nunc dignissim tempus. Quis sit
              </p>
            </div>
          </div>
          <div className="flex gap-3 w-[236] h-[49] ml-20 mr-20">
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
            <div className="mt-6">
              <h4 className="text-[20px] leading-5 font-bold font-Mulish">
                Heading
              </h4>
              <p className="w-[540px] h-[57px] text[#2F2F2F] font-Mulish text-[16px] font-light leading-normal">
                Lorem ipsum dolor sit amet consectetur. At amet ultrices morbi
                eleifend nunc dignissim tempus. Quis sit
              </p>
            </div>
          </div>
          <div className="flex gap-3 w-[236] h-[49] ml-20 mr-20">
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
            <div className="mt-6">
              <h4 className="text-[20px] leading-5 font-bold font-Mulish">
                Heading
              </h4>
              <p className="w-[540px] h-[57px] text[#2F2F2F] font-Mulish text-[16px] font-light leading-normal">
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