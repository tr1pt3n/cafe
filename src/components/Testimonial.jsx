import avt1 from '../assets/img/avt1.png';

const Testimonial = () => {
  return (
    <div className="h-[484px] w-full relative">
        <div className="h-[484px] w-[945px] bg-testi bg-no-repeat absolute top-0 left-0">
            <div className="absolute top-[50%] translate-y-[-50%] left-[180px]">
                <h2 className='leading-[48px] font-semibold text-[32px] tracking-[0.04em]'>What they say about us</h2>
                <p className='text-[18px] leading-[27px] text-[#7E7D7A] w-[352px] mt-4'>We always provide the best service and always maintain the quality of coffee</p>
            </div>
            <div className="h-[312px] flex gap-10 justify-between items-center absolute top-[102px] left-[70%]">
                <div className="h-[280px] w-[257px] relative">
                    <div className="h-full w-[80%]">
                        <img src={avt1} alt="" />
                    </div>
                    <div className="absolute top-[171px] left-[31px] bg-[#FFCB7C] rounded-[8px] p-3">
                        <h3 className='text-[18px] leading-[27px] font-medium'>Naura</h3>
                        <p className="text-[14px] leading-[21px]">I really love the cappucino, the coffee was very smooth</p>
                    </div>
                </div>
                <div className="h-[280px] w-[257px] relative">
                    <div className="h-full w-[80%]">
                        <img src={avt1} alt="" />
                    </div>
                    <div className="absolute top-[171px] left-[31px] bg-[#FFCB7C] rounded-[8px] p-3">
                        <h3 className='text-[18px] leading-[27px] font-medium'>Naura</h3>
                        <p className="text-[14px] leading-[21px]">I really love the cappucino, the coffee was very smooth</p>
                    </div>
                </div>
                <div className="h-[280px] w-[257px] relative">
                    <div className="h-full w-[80%]">
                        <img src={avt1} alt="" />
                    </div>
                    <div className="absolute top-[171px] left-[31px] bg-[#FFCB7C] rounded-[8px] p-3">
                        <h3 className='text-[18px] leading-[27px] font-medium'>Naura</h3>
                        <p className="text-[14px] leading-[21px]">I really love the cappucino, the coffee was very smooth</p>
                    </div>
                </div>

            </div>
        </div>
        <div>
        </div>
    </div>
  )
}

export default Testimonial