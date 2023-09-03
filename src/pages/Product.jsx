import CategoriesProduct from "../components/Home/CategoriesProduct"

const Product = () => {
    return (
        <div className="mt-[5rem] md:mt-0">
            <div className="container m-auto">
                <div className=" border-b border-[#899FB5]">
                    <div className="text-center md:w-7/12 m-auto py-[2rem] md:py-[7rem] px-5">
                        <h1 className="text-[#447B02] md:font-bold md:text-[45px] text-[25px] mb-5">
                            Products
                        </h1>
                        <p className="text-[20px]">
                            Experience Wellu Wellu&lsquo;s selection of herbal products. Ranging from Staphylococos, malaria drugs, Wellu wellu&lsquo;s products are world class!
                        </p>
                    </div>
                </div>
            </div>
            <CategoriesProduct />
            {/* pagination */}
            <div className="container-auto mb-[5rem]">
                <div className="flex items-center gap-5 justify-end">
                    <p>Page</p>
                    <div className="bg-[#ffffff] border-2 border-[#447B02] px-9 py-2 rounded">1</div>
                    <div className="flex items-center gap-2">
                        <span>of</span>
                        <span>3</span>
                    </div>
                    <div className="flex items-center">
                        <span className="bg-[#7d9264] px-4 py-2 rounded-l"> 
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.71014 13.7233C7.89459 13.5389 7.98682 13.3206 7.98682 13.0685C7.98682 12.8164 7.89459 12.5982 7.71014 12.4137L2.30566 7.00922L7.72858 1.5863C7.90074 1.41414 7.98682 1.19895 7.98682 0.940711C7.98682 0.682477 7.89459 0.461133 7.71014 0.27668C7.52568 0.0922266 7.30741 0 7.05533 0C6.80324 0 6.58497 0.0922266 6.40052 0.27668L0.20289 6.49275C0.129109 6.56653 0.0768476 6.64646 0.0461054 6.73254C0.0153632 6.81862 -7.62939e-06 6.91085 -7.62939e-06 7.00922C-7.62939e-06 7.1076 0.0153632 7.19982 0.0461054 7.2859C0.0768476 7.37198 0.129109 7.45191 0.20289 7.52569L6.41896 13.7418C6.59112 13.9139 6.80324 14 7.05533 14C7.30741 14 7.52568 13.9078 7.71014 13.7233Z" fill="white" />
                        </svg>
                        </span>
                        <span className="bg-[#447B02] px-4 py-2 rounded-r">
                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.27668 13.7233C0.0922266 13.5389 0 13.3206 0 13.0685C0 12.8164 0.0922266 12.5982 0.27668 12.4137L5.68116 7.00922L0.258235 1.5863C0.0860782 1.41414 0 1.19895 0 0.940711C0 0.682477 0.0922266 0.461133 0.27668 0.27668C0.461133 0.0922266 0.679403 0 0.931489 0C1.18357 0 1.40184 0.0922266 1.5863 0.27668L7.78393 6.49275C7.85771 6.56653 7.90997 6.64646 7.94071 6.73254C7.97145 6.81862 7.98682 6.91085 7.98682 7.00922C7.98682 7.1076 7.97145 7.19982 7.94071 7.2859C7.90997 7.37198 7.85771 7.45191 7.78393 7.52569L1.56785 13.7418C1.3957 13.9139 1.18357 14 0.931489 14C0.679403 14 0.461133 13.9078 0.27668 13.7233Z" fill="white" />
                        </svg>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
