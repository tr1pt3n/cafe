const Hero = () => {
  return (
    <div className='w-[1161px] mt-[82px] z-10'>
        <div className='flex items-center justify-between' >
            <div className="w-[498px]">
                <h1 className='text-[48px] leading-[72px] font-semibold'>Enjoy your <span className="text-[#FF902B]">coffee</span> before your activity</h1>
                <p className='w-[393px] text-[18px] text-[#7E7D7A] leading-[27px] mt-6'>Boost your productivity and build your mood with a glass of coffee in the morning</p>
                <button className="w-[170px] h-[46px] mt-8 rounded-[33px] bg-[#2F2105] text-white text-[14px] leading-[21px]">Order now </button>
            </div>
            <div className='bg-hero bg-contain bg-center bg-no-repeat w-[526.71px] h-[416px]'></div>
        </div>
    </div>
  )
}

export default Hero