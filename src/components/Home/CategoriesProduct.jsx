import { useState, useEffect } from 'react';

// import stars from "../../assets/Icons/stars.png";
// import { EnergyBooster, PainRelief } from "../../constant/data"; 
import drip from '../../assets/img/drip.png'
import orak from '../../assets/img/oral.png'



const CategoriesProduct = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  // const [selectedProduct, setSelectedProduct] = useState(null);
  const PainRelief = [
    { id: "1", Image: drip, drug: "Apple Cider (200g)", price: "3000", },
    { id: "2", Image: orak, drug: "Apple Cider (200g)", price: "3000", },
    { id: "3", Image: drip, drug: "Apple Cider (200g)", price: "3000", },
    { id: "2", Image: orak, drug: "Apple Cider (200g)", price: "3000", },
    { id: "3", Image: drip, drug: "Apple Cider (200g)", price: "3000", },
    { id: "2", Image: orak, drug: "Apple Cider (200g)", price: "3000", },
    { id: "3", Image: drip, drug: "Apple Cider (200g)", price: "3000", },
    { id: "4", Image: orak, drug: "Apple Cider (200g)", price: "3000", },

  ];

  useEffect(() => {
    setSelectedCategory('Energy Boosters');
  }, []);
  const currentPathname = window.location.pathname;

  return (
    <section className={`${currentPathname === '/' ?' mb-[5rem] mt-11':"" }health-tips`}>
      <div className="bg-[#447B02] p-3 md:flex items-center">
        <div className="md:container px-4">
          <h3 className="text-tab-text  text-[32px] text-[#ffff] px-4 ">Products</h3>
        </div>
      </div>
      <div className="md:container px-4">
        <h3 className={`text-[#2F2F2F] text-[30px] my-5 py-9 px-7`}>Categories</h3>
        <div className="px-7">
          <ul className="flex gap-5 md:flex-wrap  overflow-auto">
            <li className={`text-[#2F2F2F] text-[16px] cursor-pointer rounded-full py-3 px-5 ${selectedCategory === 'Energy Boosters' ? 'bg-[#447B02] text-[#fff]' : 'bg-[#F7F7F7] hover:bg-[#447B02] hover:text-[#fff]'
              }`}
              onClick={() => setSelectedCategory('Energy Boosters')}>Energy Boosters</li>
            <li className={`text-[#2F2F2F] text-[16px] cursor-pointer rounded-full py-3 px-5 ${selectedCategory === 'Pain Reliefs' ? 'bg-[#447B02] text-[#fff]' : 'bg-[#F7F7F7] hover:bg-[#447B02] hover:text-[#fff]'
              }`}
              onClick={() => setSelectedCategory('Pain Reliefs')}>Pain Reliefs</li>
            <li className={`text-[#2F2F2F] text-[16px] cursor-pointer rounded-full py-3 px-5 ${selectedCategory === 'Antibiotics' ? 'bg-[#447B02] text-[#fff]' : 'bg-[#F7F7F7] hover:bg-[#447B02] hover:text-[#fff]'
              }`}
              onClick={() => setSelectedCategory('Antibiotics')}>Antibiotics</li>
            <li className={`text-[#2F2F2F] text-[16px] cursor-pointer rounded-full py-3 px-5 ${selectedCategory === 'Blood and Sugar Regulator' ? 'bg-[#447B02] text-[#fff]' : 'bg-[#F7F7F7] hover:bg-[#447B02] hover:text-[#fff]'
              }`}
              onClick={() => setSelectedCategory('Blood and Sugar Regulator')}>Blood and Sugar Regulator</li>
            <li className={`text-[#2F2F2F] text-[16px] cursor-pointer rounded-full py-3 px-5 ${selectedCategory === 'Bodily Infection/ Injury' ? 'bg-[#447B02] text-[#fff]' : 'bg-[#F7F7F7] hover:bg-[#447B02] hover:text-[#fff]'
              }`}
              onClick={() => setSelectedCategory('Bodily Infection/ Injury')}>Bodily Infection/ Injury</li>
            <li className={`text-[#2F2F2F] text-[16px] cursor-pointer rounded-full py-3 px-5 ${selectedCategory === 'Sexually Related Infections' ? 'bg-[#447B02] text-[#fff]' : 'bg-[#F7F7F7] hover:bg-[#447B02] hover:text-[#fff]'
              }`}
              onClick={() => setSelectedCategory('Sexually Related Infections')}>Sexually Related Infections</li>
            <li className={`text-[#2F2F2F] text-[16px] cursor-pointer rounded-full py-3 px-5 ${selectedCategory === 'Preventive Treatment' ? 'bg-[#447B02] text-[#fff]' : 'bg-[#F7F7F7] hover:bg-[#447B02] hover:text-[#fff]'
              }`}
              onClick={() => setSelectedCategory('Preventive Treatment')}>Preventive Treatment</li>
            <li className={`text-[#2F2F2F] text-[16px] cursor-pointer rounded-full py-3 px-5 ${selectedCategory === 'Special Usage' ? 'bg-[#447B02] text-[#fff]' : 'bg-[#F7F7F7] hover:bg-[#447B02] hover:text-[#fff]'
              }`}
              onClick={() => setSelectedCategory('Special Usage')}>Special Usage</li>
          </ul>
        </div>
        <div className="md:px-8 my-9">
          {selectedCategory === 'Energy Boosters' && <div className="grid grid-cols-1 md:grid-cols-6 items-center justify-center gap-6">
            {PainRelief.map((data) => {
              const { id, Image, drug, price } = data;
              return (
                <div className="border bg-[#FAFAFA]  md:h-[15rem] flex flex-col justify-center px-5 " key={id}>
                  <div className="w-6/12 mb-5"><img src={Image} className="w-full" /></div>
                  <div className="mt-4">
                    <p className="text-[14px]">{drug}</p>
                    <p className="text-[#447B02] flex gap-1 items-center"><svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.166992 4H1.50033V0H2.83366L5.11366 4H8.16699V0H9.50033V4H10.8337V5.33333H9.50033V6.66667H10.8337V8H9.50033V12H8.16699L5.88033 8H2.83366V12H1.50033V8H0.166992V6.66667H1.50033V5.33333H0.166992V4ZM2.83366 4H3.58699L2.83366 2.68667V4ZM2.83366 5.33333V6.66667H5.11366L4.35366 5.33333H2.83366ZM8.16699 9.33333V8H7.40033L8.16699 9.33333ZM5.87366 5.33333L6.64033 6.66667H8.16699V5.33333H5.87366Z" fill="#447B02" />
                    </svg>
                      {price}</p>
                  </div>
                </div>
              );
            })}
          </div>
          }

      
          {selectedCategory === "Pain Reliefs" && <div className="grid grid-cols-1 md:grid-cols-6 items-center justify-center gap-6">
            {PainRelief.map((data) => {
              const { id, Image, drug, price } = data;
              return (
                <div className="border bg-[#FAFAFA]  h-[15rem] flex flex-col justify-center px-5 " key={id}>
                  <div className="w-6/12 mb-5"><img src={Image} className="w-full" /></div>
                  <div className="mt-4">
                    <p className="text-[14px]">{drug}</p>
                    <p className="text-[#447B02] flex gap-1 items-center"><svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.166992 4H1.50033V0H2.83366L5.11366 4H8.16699V0H9.50033V4H10.8337V5.33333H9.50033V6.66667H10.8337V8H9.50033V12H8.16699L5.88033 8H2.83366V12H1.50033V8H0.166992V6.66667H1.50033V5.33333H0.166992V4ZM2.83366 4H3.58699L2.83366 2.68667V4ZM2.83366 5.33333V6.66667H5.11366L4.35366 5.33333H2.83366ZM8.16699 9.33333V8H7.40033L8.16699 9.33333ZM5.87366 5.33333L6.64033 6.66667H8.16699V5.33333H5.87366Z" fill="#447B02" />
                    </svg>
                      {price}</p>
                  </div>
                </div>
              );
            })}
          </div>
          }
          {selectedCategory === "Antibiotics" && <div className="grid grid-cols-1 md:grid-cols-6 items-center justify-center gap-6">
            {PainRelief.map((data) => {
              const { id, Image, drug, price } = data;
              return (
                <div className="border bg-[#FAFAFA]  h-[15rem] flex flex-col justify-center px-5 " key={id}>
                  <div className="w-6/12 mb-5"><img src={Image} className="w-full" /></div>
                  <div className="mt-4">
                    <p className="text-[14px]">{drug}</p>
                    <p className="text-[#447B02] flex gap-1 items-center"><svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.166992 4H1.50033V0H2.83366L5.11366 4H8.16699V0H9.50033V4H10.8337V5.33333H9.50033V6.66667H10.8337V8H9.50033V12H8.16699L5.88033 8H2.83366V12H1.50033V8H0.166992V6.66667H1.50033V5.33333H0.166992V4ZM2.83366 4H3.58699L2.83366 2.68667V4ZM2.83366 5.33333V6.66667H5.11366L4.35366 5.33333H2.83366ZM8.16699 9.33333V8H7.40033L8.16699 9.33333ZM5.87366 5.33333L6.64033 6.66667H8.16699V5.33333H5.87366Z" fill="#447B02" />
                    </svg>
                      {price}</p>
                  </div>
                </div>
              );
            })}
          </div>
          }
          {selectedCategory === "Blood and Sugar Regulator" && <div className="grid grid-cols-1 md:grid-cols-6 items-center justify-center gap-6">
            {PainRelief.map((data) => {
              const { id, Image, drug, price } = data;
              return (
                <div className="border bg-[#FAFAFA]  h-[15rem] flex flex-col justify-center px-5 " key={id}>
                  <div className="w-6/12 mb-5"><img src={Image} className="w-full" /></div>
                  <div className="mt-4">
                    <p className="text-[14px]">{drug}</p>
                    <p className="text-[#447B02] flex gap-1 items-center"><svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.166992 4H1.50033V0H2.83366L5.11366 4H8.16699V0H9.50033V4H10.8337V5.33333H9.50033V6.66667H10.8337V8H9.50033V12H8.16699L5.88033 8H2.83366V12H1.50033V8H0.166992V6.66667H1.50033V5.33333H0.166992V4ZM2.83366 4H3.58699L2.83366 2.68667V4ZM2.83366 5.33333V6.66667H5.11366L4.35366 5.33333H2.83366ZM8.16699 9.33333V8H7.40033L8.16699 9.33333ZM5.87366 5.33333L6.64033 6.66667H8.16699V5.33333H5.87366Z" fill="#447B02" />
                    </svg>
                      {price}</p>
                  </div>
                </div>
              );
            })}
          </div>
          }
          {selectedCategory === "Sexually Related Infections" && <div className="grid grid-cols-1 md:grid-cols-6 items-center justify-center gap-6">
            {PainRelief.map((data) => {
              const { id, Image, drug, price } = data;
              return (
                <div className="border bg-[#FAFAFA]  h-[15rem] flex flex-col justify-center px-5 " key={id}>
                  <div className="w-6/12 mb-5"><img src={Image} className="w-full" /></div>
                  <div className="mt-4">
                    <p className="text-[14px]">{drug}</p>
                    <p className="text-[#447B02] flex gap-1 items-center"><svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.166992 4H1.50033V0H2.83366L5.11366 4H8.16699V0H9.50033V4H10.8337V5.33333H9.50033V6.66667H10.8337V8H9.50033V12H8.16699L5.88033 8H2.83366V12H1.50033V8H0.166992V6.66667H1.50033V5.33333H0.166992V4ZM2.83366 4H3.58699L2.83366 2.68667V4ZM2.83366 5.33333V6.66667H5.11366L4.35366 5.33333H2.83366ZM8.16699 9.33333V8H7.40033L8.16699 9.33333ZM5.87366 5.33333L6.64033 6.66667H8.16699V5.33333H5.87366Z" fill="#447B02" />
                    </svg>
                      {price}</p>
                  </div>
                </div>
              );
            })}
          </div>
          }
          {selectedCategory === "Bodily Infection/ Injury" && <div className="grid grid-cols-1 md:grid-cols-6 items-center justify-center gap-6">
            {PainRelief.map((data) => {
              const { id, Image, drug, price } = data;
              return (
                <div className="border bg-[#FAFAFA]  h-[15rem] flex flex-col justify-center px-5 " key={id}>
                  <div className="w-6/12 mb-5"><img src={Image} className="w-full" /></div>
                  <div className="mt-4">
                    <p className="text-[14px]">{drug}</p>
                    <p className="text-[#447B02] flex gap-1 items-center"><svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.166992 4H1.50033V0H2.83366L5.11366 4H8.16699V0H9.50033V4H10.8337V5.33333H9.50033V6.66667H10.8337V8H9.50033V12H8.16699L5.88033 8H2.83366V12H1.50033V8H0.166992V6.66667H1.50033V5.33333H0.166992V4ZM2.83366 4H3.58699L2.83366 2.68667V4ZM2.83366 5.33333V6.66667H5.11366L4.35366 5.33333H2.83366ZM8.16699 9.33333V8H7.40033L8.16699 9.33333ZM5.87366 5.33333L6.64033 6.66667H8.16699V5.33333H5.87366Z" fill="#447B02" />
                    </svg>
                      {price}</p>
                  </div>
                </div>
              );
            })}
          </div>
          }
        </div>
      </div>
    </section>
  )
}

export default CategoriesProduct
