// import DirectorImg from "../../assets/images/director.jpg";
// import directorImg from '../../assets/images/director.jpg'

import director from "../../assets/images/comment.png";

const Director = () => {
    return ( 
            <section className="px-5">
                <div>
                    <h2 className="text-[#447B02] font-Mulish font-semibold text-[20px] md:text-[36px] text-center md:ml-[100px]">
                        The Director
                    </h2>
                    <div className="md:container md:mx-auto md:px-20 mt-[60px] mb-[72px] md:flex md:space-x-16">
                        <img className="md:w-[450px] md:h-[449px]" src={director} alt="director" />
                        <div className="md:items-center m-0 pt-[64px]">
                            <div className="md:flex justify-center text-center">
                                <h3 className="text-[#FDFDFD] md:px-5 px-2 rounded-full bg-[#447B02] font-semibold  text-[20px] md:text-[32px] text-center py-1">
                                    Director’s Comment
                                </h3>
                            </div>
                            <div className="mt-[50px]">
                                <p className="md:text-[24px] text-[14px] font-Mulish font-normal leading-[160%] text-[#2F2F2F]">
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
    )
}
export default Director