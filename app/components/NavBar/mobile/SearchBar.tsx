import Image from 'next/image'

import SearchIcon from '@/public/icons/search-icon.svg'


const SearchBar = () => {
    return <div className='pl-[11px] pr-[8px] pb-[33px] pt-[18px] flex'>
        <input type="text" className='w-[100%] rounded-mobile-search ' />

        <button className="bg-secondary rounded-mobile-search-button ml-[-46.477px] pl-[11.6px] pr-[10.46px] py-[3px]">
            <Image
                src={SearchIcon}
                alt='Search Icon'
                width={24.401}
                height={21}
            />
        </button>

    </div>
}

export default SearchBar