import { Icon } from '@iconify/react'

const Item = ({img}) => {
  return (
    <div className='w-[355px] h-[385px] bg-gradient-to-t from-white/40 to-white/70 rounded-xl flex items-center justify-center'>
        <div className='w-[343px] h-[373px] bg-white rounded-xl py-6 px-[18px]'>
            <div className='w-auto relative'>
                <img src={img} alt="" className='rounded-xl'/>
                <span className='absolute top-1 left-1 bg-white rounded-xl flex items-center justify-center w-[62px] h-[26px]'>4.8<Icon icon="ant-design:star-filled" className='ml-1 text-[#FFD057]'/></span>
            </div>
            <div className='flex justify-between mt-[19px]'>
                <div>
                    <h4 className='text-[24px] font-semibold leading-9 tracking-[1px]'>Vanilla Latte</h4>
                    <button className='w-[64px] h-8 rounded-[8px] border border-[#FF902B] text-[#FF902B] text-[16px] font-semibold mr-3 mt-3'>Hot</button>
                    <button className='w-[64px] h-8 rounded-[8px] border border-[#FFD28F] text-[#FFD28F] text-[16px] font-semibold ml-3 mt-3'>Cold</button>
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

export default Item