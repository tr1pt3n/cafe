import React from 'react'

const Contact = () => {
  return (
    <div className='h-[636px] w-full relative'>
        <div className="w-[1170px] h-[392px] bg-contact bg-no-repeat absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center w-full">
                <h2 className="text-white leading-[48px] font-semibold text-[32px] tracking-[0.04em]">Subscribe to get 50% discount price</h2>
                <div className="mt-[26px] flex items-center justify-between bg-white h-[54px] rounded-[33px] w-[486px]">
                    <input type="text" className='h-[54px] rounded-[33px] flex-auto p-[16px] outline-none' placeholder='Email address'/>
                    <button className='bg-black h-[44px] px-5 mr-[5px] rounded-[33px] text-white text-[14px]'>Subscribe now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact