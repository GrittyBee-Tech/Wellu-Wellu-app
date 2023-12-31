
import stars from "../../assets/Icons/stars.png";
// import { EnergyBooster, PainRelief } from "../../constant/data"; 
import drip from '../../assets/img/drip.png'
import orak from '../../assets/img/oral.png'
import energy from '../../assets/img/respiratory.png'
// import energy_2 from '../../assets/img/pain.png'
// import energy_3 from '../../assets/img/pain.png'
// import energy_4 from '../../assets/img/pain.png'
// // import injury from '../assets/img/injury.png'
// import energy_1 from '../assets/img/energy1.png'
// import respiratory from '../../assets/img/respiratory.png'
// import sti from '../assets/img/sti.png'
// import diabetics from '../../assets/img/diabetes.png'
// import emphatic from '../../assets/img/emphatic.png'
// import pain from '../assets/img/pain.png'

const PainRelief = [
    { id: "1", Image: drip, drug: "Diabetes Regulator Powder", price: "3000", },
    { id: "2", Image: orak, drug: "Diabetes Regulator Powder", price: "3000", },
    { id: "3", Image: drip, drug: "Diabetes Regulator Powder", price: "3000", },
    { id: "4", Image: orak, drug: "Diabetes Regulator Powder", price: "3000", },

];

const EnergyBooster = [
    { id: "1", Image: energy, drug: "Diabetes Regulator Powder", price: "3000", },
    { id: "2", Image: energy, drug: "Diabetes Regulator Powder", price: "3000", },
    { id: "3", Image: energy, drug: "Diabetes Regulator Powder", price: "3000", },
    { id: "4", Image: energy, drug: "Diabetes Regulator Powder", price: "3000", },

];

const Products = () => {

    return (
        <section className="product-tab">
            <div className="bg-[#447B02] p-3 flex md:items-center">
                <div className="md:container px-4">
                    <h3 className="text-tab-text  text-[24px] md:text-[32px] text-[#ffff] px-4 ">Top selling products</h3>
                </div>

            </div>

            <div className="md:px-11 mt-[5rem] px-5">
                <h2 className="text-[24px] mb-5">Pain Reliefs</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 items-center justify-center gap-3">
                    {PainRelief.map((data) => {
                        const { id, Image, drug, price } = data;
                        return (
                            <div className="border bg-[#FAFAFA] md:w-[302px] h-[25rem] flex flex-col justify-center px-5 " key={id}>

                                <div className="w-6/12 mb-5"><img src={Image} className="w-full" /></div>
                                <div className="flex gap-4 items-center justify-between">
                                    <p className="text-[14px]">{drug}</p>
                                    <p className="text-[#447B02] flex gap-1 items-center"><svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.166992 4H1.50033V0H2.83366L5.11366 4H8.16699V0H9.50033V4H10.8337V5.33333H9.50033V6.66667H10.8337V8H9.50033V12H8.16699L5.88033 8H2.83366V12H1.50033V8H0.166992V6.66667H1.50033V5.33333H0.166992V4ZM2.83366 4H3.58699L2.83366 2.68667V4ZM2.83366 5.33333V6.66667H5.11366L4.35366 5.33333H2.83366ZM8.16699 9.33333V8H7.40033L8.16699 9.33333ZM5.87366 5.33333L6.64033 6.66667H8.16699V5.33333H5.87366Z" fill="#447B02" />
                                    </svg>
                                        {price}</p>
                                </div>
                                <div className="flex gap-11 justify-between items-center mt-5">
                                    <img className="w-[50px] h-[20px]" src={stars} />
                                    <p>10 Reviews</p>
                                </div>

                                <div className="mt-[3rem] m">
                                    <button className="bg-[#447B02] text-[#FFFF] text-[11px] rounded-md md:w-4/12 p-3">Add to Cart</button>
                                </div>
                            </div>
                        );
                    })}
                </div>


            </div> 
            <div className="md:px-11 mt-[5rem] px-5">
                <h2 className="text-[24px] mb-5">Energy Booster</h2>
                <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 items-center justify-center gap-3">
                    {EnergyBooster.map((data) => {
                        const { id, Image, drug, price } = data;
                        return (
                            <div className="border bg-[#FAFAFA] md:w-[302px] h-[29rem] flex flex-col justify-center py-[5rem] px-5 " key={id}>

                                <div className="w-full mt-5 mb-5"><img src={Image} className="w-full" /></div>
                                <div className="flex gap-4 items-center justify-between">
                                    <p className="text-[14px]">{drug}</p>
                                    <p className="text-[#447B02] flex gap-1 items-center"><svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.166992 4H1.50033V0H2.83366L5.11366 4H8.16699V0H9.50033V4H10.8337V5.33333H9.50033V6.66667H10.8337V8H9.50033V12H8.16699L5.88033 8H2.83366V12H1.50033V8H0.166992V6.66667H1.50033V5.33333H0.166992V4ZM2.83366 4H3.58699L2.83366 2.68667V4ZM2.83366 5.33333V6.66667H5.11366L4.35366 5.33333H2.83366ZM8.16699 9.33333V8H7.40033L8.16699 9.33333ZM5.87366 5.33333L6.64033 6.66667H8.16699V5.33333H5.87366Z" fill="#447B02" />
                                    </svg>
                                        {price}</p>
                                </div>
                                <div className="flex gap-11 justify-between items-center mt-5">
                                    <img className="w-[50px] h-[20px]" src={stars} />
                                    <p>10 Reviews</p>
                                </div>

                                <div className="mt-[3rem]">
                                    <button className="bg-[#447B02] text-[#FFFF] text-[11px] rounded-md md:w-4/12 p-3">Add to Cart</button>
                                </div>
                            </div>

                        );
                    })}
                </div> 

            </div>


        </section>

    )
}
export default Products;