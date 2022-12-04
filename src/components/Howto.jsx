import choosecf from '../assets/img/choosecf.png';
import delivery from '../assets/img/delivery.png';
import enjoy from '../assets/img/enjoy.png';

const Howto = () => {
  return (
    <div className="w-[1170px] mt-[365px]">
        <h2 className='leading-[48px] font-semibold text-[32px] tracking-[2px]'>How to use delivery <span className='border-b-4 border-[#FF902A]'>service</span></h2>
        <div className="flex items-center justify-between mt-8">
            <div className="w-[370px] h-[290px] flex flex-col items-center justify-around">
                <img src={choosecf} alt="" />
                <div>
                    <h3 className='text-center text-[24px] leading-[32px] font-semibold'>choose your coffee</h3>
                    <p className="text-center leading-[27px] tracking-[0.04em] ">there are 20+ coffees for you</p>
                </div>
            </div>
            <div className="w-[370px] h-[290px] flex flex-col items-center justify-around">
                <img src={delivery} alt="" />
                <div>
                    <h3 className='text-center text-[24px] leading-[32px] font-semibold'>we delivery it to you</h3>
                    <p className="text-center leading-[27px] tracking-[0.04em] ">choose delivery service</p>
                </div>
            </div>
            <div className="w-[370px] h-[290px] flex flex-col items-center justify-around">
                <img src={enjoy} alt="" />
                <div>
                    <h3 className='text-center text-[24px] leading-[32px] font-semibold'>enjoy your coffee</h3>
                    <p className="text-center leading-[27px] tracking-[0.04em] ">have a nice day!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Howto