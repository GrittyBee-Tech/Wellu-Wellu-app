// import { Link } from 'react-router-dom';
// import Button from "@components/Button/page"; 


const Contact = () => {
  return (
    <div className="mt-[5rem] md:mt-0">
      <div className="container m-auto">
        <div className=" border-b border-[#899FB5]">
          <div className="text-center md:w-7/12 m-auto py-[2rem] md:py-[7rem] px-5">
            <h1 className="text-[#447B02] md:font-bold md:text-[45px] text-[25px] mb-5">
              Reach out to us
            </h1>
            <p className="text-[20px]">
              We would love to hear from you! If you have any questions or
              inquiries about our product, please reach out to us. We are ready to assist you and
              provide the information you need.
            </p>
          </div>
        </div>
        <div className="border-b px-5 md:px-0 border-[#899FB5] mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 py-[4rem] lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
          <div className="flex max-w-xl flex-col items-start gap-5">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 0C15.5658 0 8.53125 6.79406 8.53125 15.4688C8.53125 18.7689 9.52294 21.7118 11.4262 24.4693L22.8162 42.2424C23.3688 43.1064 24.6323 43.1048 25.1838 42.2424L36.6233 24.4088C38.4855 21.7762 39.4688 18.685 39.4688 15.4688C39.4688 6.93928 32.5295 0 24 0ZM24 22.5C20.1232 22.5 16.9688 19.3456 16.9688 15.4688C16.9688 11.5919 20.1232 8.4375 24 8.4375C27.8768 8.4375 31.0312 11.5919 31.0312 15.4688C31.0312 19.3456 27.8768 22.5 24 22.5Z"
                fill="#447B02"
              />
              <path
                d="M34.9935 32.3152L27.9125 43.3858C26.0796 46.2435 21.9102 46.2342 20.0861 43.3886L12.9936 32.3181C6.75319 33.7609 2.90625 36.404 2.90625 39.5625C2.90625 45.0433 13.7745 48 24 48C34.2255 48 45.0938 45.0433 45.0938 39.5625C45.0938 36.4017 41.2415 33.7572 34.9935 32.3152Z"
                fill="#447B02"
              />
            </svg>

            <h3 className="mt-0 text-[23px] font-bold leading-6 text-[#447B02]">
              Find Us
            </h3>
            <ul className="flex max-w-xl flex-col items-start">
              <li className="items-center text-[#000000]">
                Desprata Block Banana Island Lagos State, Nigeria
              </li>
            </ul>
          </div>
          <div className="">
            <div>
              <h3 className="text-[#447B02] text-[45px] text-center">
                Contact form
              </h3>
              <form className="m-auto mt-5">
                <div className="md:flex gap-5 mb-6">
                  <div className="w-full md:w-1/2 mb-6 md:mb-0">
                    <label
                      className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-first-name"
                    >
                      First Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-[#F6F8FB] text-gray-700 border border-[#EEEEEE] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Enter first name"
                    />
                  </div>
                  <div className="w-full md:w-1/2 mb-6 md:mb-0">
                    <label
                      className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-last-name"
                    >
                      Last Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-[#F6F8FB] text-gray-700 border border-[#EEEEEE] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Enter last name"
                    />
                  </div>
                </div>
                <div className="md:flex gap-5 mb-6">
                  <div className="w-full md:w-1/2 mb-6 md:mb-0">
                    <label
                      className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-first-name"
                    >
                      Email address
                    </label>
                    <input
                      className="appearance-none block w-full bg-[#F6F8FB] text-gray-700 border border-[#EEEEEE] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-email"
                      type="email"
                      placeholder="Enter email address"
                    />
                  </div>
                  <div className="w-full md:w-1/2 mb-6 md:mb-0">
                    <label
                      className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-phone"
                    >
                      Phone number
                    </label>
                    <input
                      className="appearance-none block w-full bg-[#F6F8FB] text-gray-700 border border-[#EEEEEE] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-phone"
                      type="number"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap mb-6">
                  <label
                    className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-message"
                  >
                    Message
                  </label>
                  <div className="relative w-full min-w-[200px]">
                    <textarea
                      className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 bg-[#F6F8FB] px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#F9C42F] focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder=" "
                    ></textarea>
                    <label className=" after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#F9C42F] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-[#F9C42F] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-[#F9C42F] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Type your message...
                    </label>
                  </div>
                </div>
                {/* <div className="mt-5">
                <Button size="px-[4rem] text-[20px]" title="Send" />
              </div> */}
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact
