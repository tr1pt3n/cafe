import vanilla from '../assets/img/popular1.png';
import espresso from '../assets/img/espresso.png';
import hazelnut from '../assets/img/hazelnut.png';
import Item from './Item';

const Popular = () => {
    const photos = [vanilla, espresso, hazelnut];
    return (
        <div className='w-[1161px] z-10 absolute top-[-50%] left-[50%] translate-y-[35%] translate-x-[-50%]'>
            <h2 className='leading-[48px] font-semibold text-[32px] tracking-[2px]'>Popular <span className='border-b-4 border-[#FF902A]'>Now</span></h2>
            <div className='flex items-center justify-between mt-8'>
                {photos.map((photo, index) => <Item img={photo} key={index} />)}
            </div>
        </div>
  )
}

export default Popular