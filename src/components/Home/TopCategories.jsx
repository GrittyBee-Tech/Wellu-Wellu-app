
import { Categories } from "../../../constant/data";




const TopCategories = () => {


    return (
        <section className="mt-[5rem] mb-5">
            <div className="bg-[#447B02] p-3 flex items-center">
                <div className="md:container px-4">
                    <h3 className="text-tab-text  text-[32px] text-[#ffff] px-4 ">Top Categories</h3>
                </div>

            </div>
            
            <div className="px-11 mt-[5rem] grid grid-cols-1 md:grid-cols-5 items-center gap-5">
                {Categories.map((top) => {
                    const { id, Image, treatment } = top;
                    return (<div className="" key={id}>
                        <div >
                            <img src={Image} alt={Image} className="w-full"/>
                        </div>
                        <div className=" bg-[#223560] text-center py-4">
                            <p className="text-[#FFFF] m-auto font-Mulish font-medium text-[14px]">{treatment}</p>

                        </div>

                    </div>

                    )

                })}

            </div>

        </section>

    )

}
export default TopCategories;