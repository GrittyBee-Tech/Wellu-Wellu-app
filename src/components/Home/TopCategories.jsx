
import { Categories } from "../../constant/data";




const TopCategories = () => {


    return (
        <section className="mt-[5rem] mb-5">
            <div className="bg-[#447B02] p-3 flex items-center">
                <div className="md:container px-4">
                    <h3 className="text-tab-text  text-[32px] text-[#ffff] px-4 ">Top Categories</h3>
                </div>

            </div>
            
            <div className="md:px-11 grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 items-center justify-center gap-3 px-5 mt-[5rem] mb-11">
                {Categories.map((top) => {
                    const { id, Image, treatment } = top;
                    return (<div className=" border-2" key={id}>
                        <div className="w-[100%] h-[250px]">
                            <img src={Image} alt={Image} className="w-full h-[100%] object-cover"/>
                        </div>
                        <div className="bg-[#223560] text-center py-4">
                            <p className="text-[#FFFF] m-auto font-Mulish text-[14px] uppercase font-black">{treatment}</p>

                        </div>

                    </div>

                    )

                })}

            </div>

        </section>

    )

}
export default TopCategories;