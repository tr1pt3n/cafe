import logo from '../assets/img/logo_coffe.svg';
import { Icon } from '@iconify/react';

const Navbar = () => {
  return (
    <div className='w-[1161px] h-10 flex items-center justify-between mt-9 z-10'>
      <span><img src={logo} alt="" className='h-[30px]'/></span>
      <ul className='flex'>
        <li className='text-[18px] text-normal leading-[27px] text-[#FF902B] mx-4'>About us</li>
        <li className='text-[18px] text-normal leading-[27px] mx-4'>Our Product</li>
        <li className='text-[18px] text-normal leading-[27px] mx-4'>Delivery</li>
      </ul>
      <div className='flex items-center'>
        <div className='flex items-center px-3 py-2 bg-white h-10 w-[222px] rounded-[35px]'>
          <Icon icon="akar-icons:search" className='h-8 w-8'/>
          <input type="text" className='h-10 text-[12px] text-[#929292] leading-[18px] ml-4 outline-none' placeholder='Cappuchino'/>
        </div>
        <Icon icon="akar-icons:cart" className='h-8 w-8 mx-3'/>
      </div>
    </div>
  )
}

export default Navbar