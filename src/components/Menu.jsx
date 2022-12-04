import vanilla from '../assets/img/popular1.png';
import espresso from '../assets/img/espresso.png';
import hazelnut from '../assets/img/hazelnut.png';
import MenuItem from './MenuItem';

const Menu = () => {
    const photos = [vanilla, espresso, hazelnut, vanilla, vanilla, hazelnut];
    return (
        <div className='w-[1161px] mt-[120px]'>
            <h2 className='leading-[48px] font-semibold text-[32px] tracking-[2px]'>Special menu <span className='border-b-4 border-[#FF902A]'>for you</span></h2>
            <div className='flex flex-wrap items-center justify-between mt-8'>
                    {photos.map((photo, index) => <MenuItem img={photo} key={index} />)}
                </div>
        </div>
    )
}

export default Menu