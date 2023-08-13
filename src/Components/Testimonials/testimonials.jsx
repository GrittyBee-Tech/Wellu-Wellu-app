import React, { Component } from "react";
import Ellipse from "/src/assets/Images/Ellipse 9.jpg";
import Ellipse1 from "/src/assets/Images/Ellipse 10.jpg";
import Ellipse2 from "/src/assets/Images/Ellipse 11.jpg";

export class testimonials extends Component {
  render() {
    return (
      <section className="relative">
        <div className="bg-[#447B02] px-11 h-[64px]">
          <div className="md:container px-4">
            <h3 className="text-[32px] text-[#ffff] px-11 ">Testimonials</h3>
          </div>
        </div>
        <div>
          <img
            className="ml-[1000px]  w-[400px] h-[300px]"
            src="src\assets\Images\Frame 127.png"
            alt=""
          />
        </div>
        <div className="h-[440px]">
          <h2 className="text-[36px] text-[#2F2F2F] text-center">
            See what our customers have to say
          </h2>
          <div className="flex space-x-20 mt-[76px] ml-[240px]">
            <div className="mt-[16px]">
              <div className="absolute mb-[40px]">
                <img
                  className="w-[120px] h-[120px] ml-[57px] rounded-[50%] relative  flex-grow"
                  src={Ellipse}
                  alt=""
                />
              </div>
              <div className="h-[239px] w-[233px] bg-[#ACC4AD]  rounded-[16px]">
                <h4 className="text-[32px] text-[#2F2F2F] font-medium text-center mt-[50px] pt-[70px]">
                  John Doe
                </h4>
                <p className="text-[12px] text-[#2F2F2F] font-normal text-center p-4">
                  Lorem ipsum dolor sit amet consectetur. Ut metus aliquet lorem
                  ut eget ipsum dui aliquet amet. Lorem ipsum dolor sit amet
                  consectetur.
                </p>
              </div>
            </div>
            <div className="mt-[16px] items-center">
              <div className="absolute mb-[40px]">
                <img
                  className="w-[120px] h-[120px] ml-[57px] rounded-[50%] relative  flex-grow"
                  src={Ellipse1}
                  alt=""
                />
              </div>
              <div className="h-[239px] w-[233px] bg-[#C4ACAC]  rounded-[16px]">
                <h4 className="text-[32px] text-[#2F2F2F] font-medium text-center mt-[50px] pt-[70px]">
                  Mary Ann
                </h4>
                <p className="text-[12px] text-[#2F2F2F] font-normal text-center p-4">
                  Lorem ipsum dolor sit amet consectetur. Ut metus aliquet lorem
                  ut eget ipsum dui aliquet amet. Lorem ipsum dolor sit amet
                  consectetur.
                </p>
              </div>
            </div>
            <div className="mt-[16px] items-center">
              <div className="absolute mb-[40px]">
                <img
                  className="w-[120px] h-[120px] ml-[57px] rounded-[50%] relative  flex-grow"
                  src={Ellipse2}
                  alt=""
                />
              </div>
              <div className="h-[239px] w-[233px] bg-[#C0C4AC]  rounded-[16px]">
                <h4 className="text-[32px] text-[#2F2F2F] font-medium text-center mt-[50px] pt-[70px]">
                  Sam Rick
                </h4>
                <p className="text-[12px] text-[#2F2F2F] font-normal text-center p-4">
                  Lorem ipsum dolor sit amet consectetur. Ut metus aliquet lorem
                  ut eget ipsum dui aliquet amet. Lorem ipsum dolor sit amet
                  consectetur.
                </p>
              </div>
            </div>
          </div>
          <div className="justify-items-center items-center ml-[580px] mt-[56px]">
            <button className="text-[#FDFDFD] w-[175px] h-[48px] font-Mulish font-semibold text-[20px] bg-[#447B02] text-center p-1">
              See more
            </button>
          </div>
        </div>
        <div>
          <img
            className="mr-[900px] w-[300px] h-[400px]"
            src="src\assets\Images\Frame 128.png"
            alt=""
          />
        </div>
      </section>
    );
  }
}

export default testimonials;
