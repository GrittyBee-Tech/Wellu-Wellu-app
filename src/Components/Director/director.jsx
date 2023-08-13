import React, { Component } from "react";
import Director from "/src/assets/Images/Director.jpg";

export class director extends Component {
  render() {
    return (
      <section>
        <div>
          <h2 className="text-[#447B02] font-Mulish font-semibold text-[36px] text-center ml-[100px]">
            The Director
          </h2>
          <div className="md:container md:mx-auto px-20 mt-[60px] mb-[72px] flex space-x-16">
            <img className="w-[450px] h-[449px]" src={Director} alt="" />
            <div className="items-center pt-[64px]">
              <div className="w-[315px] bg-[#447B02] rounded-[30px] ml-[170px]">
                <h3 className="text-[#FDFDFD] font-Mulish font-semibold text-[32px] text-center p-1">
                  Director’s Comment
                </h3>
              </div>
              <div className="w-[710px] h-[190px] mt-[50px]">
                <p className="text-[24px] font-Mulish font-normal leading-[160%] text-[#2F2F2F]">
                  Lorem ipsum dolor sit amet consectetur. Duis morbi vitae nec
                  volutpat. Laoreet vel mauris leo hac cursus pellentesque.
                  Convallis pulvinar feugiat vitae orci eu cursus eget molestie.
                  Sed augue neque duis sapien sollicitudin elit. Proin quis nisl
                  ipsum euismod. Enim molestie pulvinar.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default director;
