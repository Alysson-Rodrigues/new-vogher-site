'use client'
import Banner from './components/Banner'
import Header from './components/Header'
import RocketLaunchSharpIcon from '@mui/icons-material/RocketLaunchSharp';
import Image from 'next/image';
import SquaredOverlayBanner from './components/SquareOverlayBanner';
import Badge from './components/Badge';


export default function Page() {
  return (

    <div>
      <Header
        title='Vogher'
      />
      <Banner imagePath='/assets/backgrounds/8.png' height='100vh' childrenContainerClassName="p-16 lg:p-0 lg:px-8 lg:flex-col flex justify-end">
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
          <h2 className="text-4xl text-black font-base-neue-bold mt-6 text-center lg:text-right">What we do</h2>
          <p className="text-2xl text-black font-base-neue-regular text-center lg:text-right">We build web applications to all purposes, since corporative management systems to digital portfolios.</p>

        </div>
        <div className="lg:w-1/2 hidden lg:flex">
          <Image alt='' src="/logo.svg" className="w-full h-full" height={300} width={300} />
        </div>
      </div>
      <div className="lg:pl-20 lg:flex-row flex items-center">
      <div className="lg:w-1/2 hidden lg:flex p-32">
          <Image alt='' src="/assets/img/bornToFire.png" className="w-full h-full" height={300} width={300} />
        </div>
        <div className="lg:w-1/2 w-full p-16">
          <h2 className="text-4xl text-black font-base-neue-bold text-center lg:text-left">Born to fire</h2>
          <p className="text-2xl text-black font-base-neue-regular text-center lg:text-left">We know that there is a war under your feets. Your applications need to be secure everywhere, but attackers needs only ONE poit to attack.
          With us, you're ensured to have the latest security practices ever.</p>
        </div>
      </div>
      <div className="p-16 lg:p-0 lg:px-8 lg:flex-col flex justify-start items-center">

      </div>
      <SquaredOverlayBanner imagePath='/assets/backgrounds/7.svg' height='100vh' childrenContainerClassName="p-16 lg:p-0 lg:px-8 lg:flex-col flex justify-start items-center">
      <div className="p-16 z-10">
          <h2 className="text-6xl text-black font-base-neue-bold text-center lg:text-center bg-white">Design matters... we also can handle it.</h2>
          <p className="text-3xl text-black font-base-neue-regular text-center lg:text-center bg-white">We count on the best professionals and toolchains, to make your app atractive and profitable.</p>
        </div>
        {/* <Badge
        badgeBackground='#ffffff'
        title='Figma'
        description='The best design tool ever'
        imageUrl='/assets/backgrounds/6.png'
        preventDefault
        /> */}
      </SquaredOverlayBanner>
    </div>
  )
}