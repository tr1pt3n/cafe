import { Icon } from '@iconify/react';

const MenuItem = ({ img }) => {
  return (
    <div className='w-[355px] h-[385px] bg-gradient-to-t from-white/40 to-white/70 rounded-xl flex items-center justify-center shadow-[0_6px_16px_rgba(0,0,0,0.16)] mt-[40px]'>
        <div className='w-[343px] h-[373px] bg-white rounded-xl py-6 px-[18px]'>
            <div className='w-auto relative'>
                <img src={img} alt="" className='rounded-xl'/>
                <span className='absolute top-1 left-1 bg-white rounded-xl flex items-center justify-center w-[62px] h-[26px]'>4.8<Icon icon="ant-design:star-filled" className='ml-1 text-[#FFD057]'/></span>
            </div>
            <div className='flex justify-between mt-[19px]'>
                <div>
                    <h4 className='text-[24px] font-semibold leading-9 tracking-[1px]'>Vanilla Latte</h4>
                    <p className='text-[14px] leading-[21px] tracking-[0.04em] font-semibold text-[#7E7D7A] mt-4'>hot asdasfas</p>
                </div>
                <div>
                    <p className='text-[24px] font-bold leading-9 tracking-[1px] text-[#2F2105]' >21 K</p>
                    <span className='flex items-center justify-center w-[43px] h-[43px] rounded-full bg-[#FF902B] mt-[6px]'><Icon icon="akar-icons:cart" className='text-white text-[18px]'/></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MenuItem