import { ChevronRightIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SearchBar=()=>{
    return(
        <div className="border p-[2px] px-1 items-center flex sm:w-72 w-auto justify-between gap-2 border-borderGrey bg-transparent rounded-md">
            <div className="flex items-center gap-3">
            <MagnifyingGlassIcon className="h-4 w-4 text-mainGrey"/>
            <input type='text' className="sm:block hidden bg-transparent text-xs focus:outline-none text-mainGrey" placeholder="Type [/] to search"/>
            </div>
            <p className="sm:flex hidden border-l border-borderGrey text-mainGrey items-center"><ChevronRightIcon className="h-4 w-4"/>_</p>
        </div>
    )
}

export default SearchBar;