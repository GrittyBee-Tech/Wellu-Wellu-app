
import { Categories } from "../Datapage/Datapage";

const TopCategories = () => {


    return (
        <section>
            <div className="bg-[#447B02] px-11">
                <div className="md:container px-4 h-[64px]">
                    <h3 className="text-tab-text text-[#ffff] px-4 ">Top Categories</h3>
                </div>

            </div>

            <div className="container mt-5 flex gap-3">

                {Categories.map((top) => {

                    const { id, Image, treatment } = top;

                    return (<div className="" key={id}>

                        <div >
                            <img src={Image} alt="" />

                        </div>
                        <div className="w-[236px] bg-[#223560]">

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