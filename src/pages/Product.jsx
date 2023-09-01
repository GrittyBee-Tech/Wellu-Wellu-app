import CategoriesProduct from "../components/Home/CategoriesProduct"

const Product = () => {
    return (
        <div>
            <div className="mt-[5rem] md:mt-0">
                <div className="container m-auto">
                    <div className=" border-b border-[#899FB5]">
                        <div className="text-center md:w-7/12 m-auto py-[2rem] md:pb-[7rem] px-5">
                            <h1 className="text-[#447B02] md:font-bold md:text-[45px] text-[25px] mb-5">
                                Products
                            </h1>
                            <p
                                className="text-[20px]">
                                Experience Wellu Wellu's selection of herbal products. Ranging from Staphylococos, malaria drugs, Wellu wellu's products are world class!
                            </p>
                        </div>
                    </div>
                </div>
                <CategoriesProduct />
            </div>
        </div>
    )
}

export default Product
