import { Link } from 'react-router-dom'
import logo from "../assets/Icons/logo-footer.png";

const Footer = () => {
  return (
    <div className="bg-[#447B02] py-[8rem] relative">
      <div className='bg-[#fff] md:absolute gap-5 justify-center items-center top-[-1rem] rounded md:flex py-5 right-[4rem] w-full md:w-[50%]' style={{boxShadow:'rgb(231, 223, 223) 0px 0px 4px 0px'}}>
        <div className='flex items-center gap-1'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.00011 9.86001C6.91997 14.0408 10.3313 17.3544 14.5661 19.152L15.2461 19.455C15.9991 19.7903 16.8464 19.8491 17.6385 19.621C18.4306 19.3929 19.1168 18.8925 19.5761 18.208L20.4651 16.884C20.6042 16.6764 20.6605 16.4242 20.623 16.1771C20.5854 15.93 20.4567 15.7059 20.2621 15.549L17.2501 13.119C17.1452 13.0344 17.0243 12.9719 16.8947 12.9353C16.765 12.8986 16.6293 12.8885 16.4956 12.9056C16.362 12.9227 16.2331 12.9666 16.1169 13.0347C16.0006 13.1028 15.8994 13.1938 15.8191 13.302L14.8871 14.559C12.4947 13.3774 10.5582 11.4406 9.37711 9.04801L10.6331 8.11601C10.7414 8.03577 10.8323 7.93448 10.9004 7.81823C10.9685 7.70198 11.0124 7.57316 11.0295 7.4395C11.0466 7.30585 11.0365 7.17012 10.9999 7.04046C10.9632 6.91081 10.9007 6.7899 10.8161 6.68501L8.38611 3.67301C8.22921 3.47846 8.00514 3.34972 7.75805 3.31215C7.51096 3.27458 7.25875 3.33089 7.05111 3.47001L5.71811 4.36401C5.02951 4.82579 4.5272 5.51702 4.30066 6.31457C4.07413 7.11213 4.13807 7.9642 4.48111 8.71901L5.00011 9.86001Z" fill="#447B02" />
          </svg>
          <p>+234 81 1234 5678</p>
        </div>
        <div className='flex gap-1 items-center'>
          <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 0.5H2C0.9 0.5 0.00999999 1.4 0.00999999 2.5L0 14.5C0 15.6 0.9 16.5 2 16.5H18C19.1 16.5 20 15.6 20 14.5V2.5C20 1.4 19.1 0.5 18 0.5ZM18 4.5L10 9.5L2 4.5V2.5L10 7.5L18 2.5V4.5Z" fill="#447B02" />
          </svg>
          <p>wellu_wellu@gmail.com</p>
        </div>
        <div className='flex items-center gap-1'>
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.9247 6.85997C17.7897 1.99997 11.3697 0.559966 6.40468 3.57497C1.55968 6.58997 -0.000315666 13.16 3.13468 18.005L3.38968 18.395L2.33968 22.325L6.26968 21.275L6.65968 21.53C8.35468 22.445 10.1997 22.97 12.0297 22.97C13.9947 22.97 15.9597 22.445 17.6547 21.395C22.4997 18.245 23.9397 11.81 20.9247 6.82997V6.85997ZM18.1797 16.97C17.6547 17.75 16.9947 18.275 16.0797 18.41C15.5547 18.41 14.8947 18.665 12.2847 17.63C10.0647 16.58 8.21968 14.87 6.91468 12.905C6.13468 11.99 5.72968 10.805 5.60968 9.61997C5.60968 8.56997 5.99968 7.65497 6.65968 6.99497C6.91468 6.73997 7.18468 6.60497 7.43968 6.60497H8.09968C8.35468 6.60497 8.62468 6.60497 8.75968 7.12997C9.01468 7.78997 9.67468 9.36497 9.67468 9.49997C9.80968 9.63497 9.74968 10.64 9.14968 11.21C8.81968 11.585 8.75968 11.6 8.89468 11.87C9.41968 12.65 10.0797 13.445 10.7247 14.105C11.5047 14.765 12.2997 15.29 13.2147 15.68C13.4697 15.815 13.7397 15.815 13.8747 15.545C14.0097 15.29 14.6547 14.63 14.9247 14.36C15.1797 14.105 15.3147 14.105 15.5847 14.225L17.6847 15.275C17.9397 15.41 18.2097 15.53 18.3447 15.665C18.4797 16.055 18.4797 16.58 18.2097 16.97H18.1797Z" fill="#447B02" />
          </svg>

          <p>+234 90 1234 5678</p>
        </div>
      </div>
      <div className="container-auto grid grid-cols-1 md:grid-cols-5">
        <div className='md:text-center'>
          <h1 className="text-[36px] text-[#FDFDFD]">WELLU WELLU </h1>
          <div className='md:text-center'>
            <p className="text-[#FDFDFD] my-2">Wellness Centre</p>
            <img src={logo} alt="logo" className='m-auto' />
          </div>
        </div>
        <div className='md:ml-[5rem]'>
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