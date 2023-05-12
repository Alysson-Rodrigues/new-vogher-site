'use client'
import Badge from './components/Badge';
import Banner from './components/Banner'
import IconGallery from './components/IconGallery';
import Header from './components/Header'
import RocketLaunchSharpIcon from '@mui/icons-material/RocketLaunchSharp';

export default function Page() {
  return (

    <div>
      <Header
        title='Vogher'
      />
      <Banner imagePath='/assets/backgrounds/4.png' height='100vh' childrenContainerClassName="p-16 lg:pl-20 lg:p-0 lg:px-8 lg:flex-col flex justify-end">
        <div className="hidden lg:flex justify-between items-center lg:items-start mb-12 backdrop-blur-lg p-4 rounded-md border-slate-100 border-solid border-[0.2px]">
          <div>
            <h1 className="text-2xl font-base-neue-bold text-center lg:mb-0 hidden lg:flex lg:text-4xl lg:text-left">Your apps faster than ever.</h1>
            <h2 className="text-1xl font-base-neue-regular text-center  hidden lg:flex lg:text-3xl lg:text-left">With Vogher, the future of IA is next to you</h2>
          </div>
          <RocketLaunchSharpIcon className="text-white cursor-pointer text-4xl self-center mr-6" onClick={
            () => {
              window.location.href = '/about'
            }
          } />
        </div>
        {/* Mobile menu */}
        <div className="flex flex-col lg:hidden justify-center items-center mb-12 backdrop-blur-lg p-4 rounded-md border-slate-100 border-solid border-[0.2px]">
          <div>
            <h1 className="text-3xl font-base-neue-bold text-center lg:mb-0 lg:hidden lg:text-4xl lg:text-left">Your apps faster than ever.</h1>
            <h2 className="text-1xl font-base-neue-regular text-center  lg:hidden lg:text-3xl lg:text-left">With Vogher, the future of IA is next to you</h2>
          </div>
          <RocketLaunchSharpIcon className="text-white text-4xl self-center" />
        </div>
      </Banner>
      <div className="lg:pl-20 lg:flex-row flex items-center">
        <div className="lg:w-1/2 p-16 w-full">
          <h2 className="text-4xl text-black font-base-neue-bold text-center lg:text-right">What is Vogher</h2>
          <p className="text-2xl text-black font-base-neue-regular text-center lg:text-right">The software/creative team you need to go deeper. We put our hands on the cutting edge tech stuff for you, in order to keep you safe and flying</p>
          <h2 className="text-4xl text-black font-base-neue-bold mt-2 text-center lg:text-right">What we do</h2>
          <p className="text-2xl text-black font-base-neue-regular text-center lg:text-right">Everything related to a digital app or brand. From Visual ID's to Schedule management systems, we count on the bests professionals of the market</p>
        
          </div>
          <div className="lg:w-1/2 w-full">
          <img src="/logo.svg" className="w-full h-full" height={"300px"} />
          </div>
        </div>

            {/*         <Banner imagePath='/assets/backgrounds/3.png' height='50vh' childrenContainerClassName="p-4">
          <div className="hidden lg:flex justify-between items-center lg:items-start mb-12 backdrop-blur-lg p-4 rounded-md border-slate-100 border-solid border-[0.2px]">
            <div>
              <h1 className="text-2xl font-base-neue-bold text-center lg:mb-0 hidden lg:flex lg:text-4xl lg:text-left">Your apps faster than ever.</h1>
              <IconGallery companies={
                [
                  {
                    name: 'Tecnobit',
                    iconUrl: '/next.svg'

                  },
                  {
                    name: 'Tecnobit',
                    iconUrl: '/next.svg'
                  }
                ]
              } />
              </div>
            </div>
            </Banner> */}

    </div>
        )
}