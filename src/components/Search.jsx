import ArrowRightIcon from "./Icons/ArrowRightIcon"
import SearchIcon from "./Icons/SearchIcon"

const Search = () => {
  return (
    <div className="relative w-full flex items-center border-2 rounded-md">
        <div className="absolute top-3 left-2">
        <SearchIcon />
        </div>
        <input type="text" className='py-2 px-[3rem] rounded-l-md w-full' placeholder="Search" />
       <div className="bg-[#447B02] py-[16px] rounded-r-md px-5">
       <ArrowRightIcon />
       </div>
    </div>
  )
}

export default Search