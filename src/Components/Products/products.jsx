import { PainRelief } from "../Datapage/Datapage";
import { EnergyBooster } from "../Datapage/Datapage";
import stars from "/src/assets/Icons/stars.png";
const Products = () => {

    return (
        <section className="product-tab mt-11">
            <div className="bg-[#447B02] px-11">
                <div className="md:container px-4 h-[64px]">
                    <h3 className="text-tab-text text-[#ffff] px-4 ">Top selling products</h3>
                </div>

            </div>

            <div className="md:container px-11">
                <h2>Pain Reliefs</h2>
                <div className="flex gap-3">
                    {PainRelief.map((data) => {

                        const { id, Image, drug, price } = data;
                        return (
                            <div className="border bg-[#FAFAFA] w-[302px] h-[332px] " key={id}>

                                <img src={Image} />
                                <div className="flex gap-4">
                                    <p>{drug}</p>
                                    <p>{price}</p>
                                </div>
                                <div className="flex gap-11">
                                    <img className="w-[50px] h-[20px]" src={stars} />
                                    <p>10 Reviews</p>
                                </div>

                                <button className="w-[82px] bg-[#447B02] text-[#FFFF] text-[11px] p-3">Add to Cart</button>
                            </div>




                        );
                    })}


                </div>


            </div><br />
            <hr />
            <div className="md:container px-11">
                <h2>Energy Booster</h2>
                <div className="flex gap-3">
                    {EnergyBooster.map((data) => {

                        const { id, Image, drug, price } = data;
                        return (
                            <div className="border bg-[#FAFAFA] w-[302px] h-[332px] " key={id}>

                                <img src={Image} />
                                <div className="flex gap-4">
                                    <p>{drug}</p>
                                    <p>{price}</p>
                                </div>
                                <div className="flex gap-11">
                                    <img className="w-[50px] h-[20px]" src={stars} />
                                    <p>10 Reviews</p>
                                </div>

                                <button className="w-[82px] bg-[#447B02] text-[#FFFF] text-[11px] p-3">Add to Cart</button>
                            </div>




                        );
                    })}


                </div>
                <hr />

            </div>


        </section>

    )
}
export default Products;