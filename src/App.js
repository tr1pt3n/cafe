import Hero from "./components/Hero";
import Howto from "./components/Howto";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Popular from "./components/Popular";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <div className="bg-[#f6ebda] h-[1004px] w-full flex flex-col items-center relative overflow-x-hidden">
        <div className="w-[599px] h-[394px] bg-hero-cf bg-no-repeat bg-contain bg-center absolute top-[-34px] left-[952px]"></div>
        <Navbar />
        <Hero />
        <div className="w-[569px] h-[394px] bg-hero-cf-2 bg-no-repeat bg-contain bg-center absolute top-[554px] left-[7px]"></div>
      </div>
      <div className="bg-white h-[990px] w-full flex flex-col items-center relative">
        <Popular />
        <div className='w-[1268px] h-[367px] bg-rec bg-no-repeat absolute top-[-15%]'></div>
        <Howto />
      </div>
      <div className="h-[484px] w-full bg-[#f6ebda] relative flex items-center justify-end">
        <div className="w-[359px] h-[497px] bg-about bg-no-repeat absolute top-[-15%] left-[267px]"></div>  
        <div className="w-[478px] h-[316px] mr-[209px]">
          <h2 className='leading-[48px] font-semibold text-[32px] tracking-[2px]'>About <span className='border-b-4 border-[#FF902A]'>us</span></h2>
          <h3 className='font-semibold text-[24px] tracking-[0.04em] leading-9 w-[348px] mt-6'>We provide quality coffee, and ready to deliver.</h3>
          <p className='text-[18px] leading-[27px] tracking-[0.04em] text-[#7E7D7A] mt-4'>We are a company that makes and distributes delicious drinks. our main product is made with a secret recipe and available in stores worldwide.</p>
          <button className='rounded-[33px] bg-black h-[38px] px-6 py-[10px] text-[#F4AE26] text-[12px] mt-[42px]'>Get your coffee</button>
        </div>
      </div>
      <div className='h-[1114px] w-full flex flex-col items-center'>
        <Menu />
      </div>
      <div className='h-[484px] w-full flex flex-col items-center mt-[64px]'>
        <Testimonial />
      </div>
      <div className='h-[636px] w-full flex flex-col items-center'> 
        <Contact />
      </div>
    </div>
  );
}

export default App;
