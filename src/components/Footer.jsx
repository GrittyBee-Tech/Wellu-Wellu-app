import { Link } from 'react-router-dom'
import logo from "../assets/Icons/logo-footer.png";

const Footer = () => {
  return (
    <div className="bg-[#447B02] py-[8rem]">
      <div className="container-auto grid grid-cols-1 md:grid-cols-5">
        <div className='md:text-center'>
          <h1 className="text-[36px] text-[#FDFDFD]">WELLU WELLU </h1>
          <div className='md:text-center'>
            <p className="text-[#FDFDFD] my-2">Wellness Centre</p>
            <img src={logo} alt="logo" className='m-auto' />
          </div>
        </div>
        <div className='ml-[5rem]'>
          <p className='text-[20px] font-bold text-[#FDFDFD]'>
            About Us
          </p>
          <ul className='text-[#FDFDFD] pl-5 list-disc	'>
            <li className='mt-2'>Who we are</li>
            <li className='mt-2'>Our Services</li>
          </ul>
        </div>
        <div>
          <p className='text-[20px] font-bold text-[#FDFDFD]'>Contact Us</p>
          <ul className='text-[#FDFDFD] pl-5 list-disc	'>
            <li className='mt-2'><Link to="/"> Phone number</Link> </li>
            <li className='mt-2'><Link to="/">Email address</Link> </li>
            <li className='mt-2'><Link to="/">Location</Link> </li>
          </ul>
        </div>
        <div>
          <p className='text-[20px] font-bold text-[#FDFDFD]'>Get Help</p>
          <ul className='text-[#FDFDFD] pl-5 list-disc	'>
            <li className='mt-2'><Link to="/">FAQs</Link> </li>
            <li className='mt-2'><Link to="/">Help Centre</Link> </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer