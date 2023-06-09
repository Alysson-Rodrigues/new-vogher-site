'use client'
import Banner from './components/Banner'
import Header from './components/Header'
import RocketLaunchSharpIcon from '@mui/icons-material/RocketLaunchSharp';
import Image from 'next/image';
import Badge from './components/Badge';


export default function Page() {
  return (
    <>
    <div>
      <Header
        title='Vogher'
      />
      <Banner imagePath='/assets/backgrounds/8.png' height='100vh' childrenContainerClassName="p-16 lg:p-0 lg:px-8 lg:flex-col flex justify-end">
        <div className="hidden lg:flex justify-between items-center lg:items-start mb-12 backdrop-blur-lg p-4 rounded-md border-black border-solid border-[0.2px]">
          <div>
            <h1 className="text-2xl text-black font-base-neue-bold text-center lg:mb-0 hidden lg:flex lg:text-4xl lg:text-left">Your apps faster than ever.</h1>
            <h2 className="text-1xl text-black font-base-neue-regular text-center  hidden lg:flex lg:text-3xl lg:text-left">With Vogher, the future of IA is next to you</h2>
          </div>
          <RocketLaunchSharpIcon className="text-black cursor-pointer text-4xl self-center mr-6" onClick={
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
      <div className="lg:flex-row flex items-center justify-center bg-no-repeat bg-cover bg-center" style={{ backgroundImage: 'url("/assets/backgrounds/4.png")' }}>
      <div className="hidden m-8 lg:flex justify-between items-center lg:items-start mb-12 backdrop-blur-lg p-4 rounded-md border-white border-solid border-[0.2px]">
          <div>
            <h1 className="text-2xl text-white font-base-neue-bold text-center lg:mb-0 hidden lg:flex lg:text-4xl lg:text-left">Who we are</h1>
            <h2 className="text-1xl text-white font-base-neue-regular text-center  hidden lg:flex lg:text-3xl lg:text-left">The software/creative team you need to go deeper. We put our hands on the cutting edge tech stuff for you, in order to keep you safe and flying</h2>
          </div>
        </div>
        <div className="hidden m-8 lg:flex justify-between items-center lg:items-start mb-12 backdrop-blur-lg p-4 rounded-md border-white border-solid border-[0.2px]">
          <div>
            <h1 className="text-2xl text-white font-base-neue-bold text-center lg:mb-0 hidden lg:flex lg:text-4xl lg:text-left">What we do.</h1>
            <h2 className="text-1xl text-white font-base-neue-regular text-center  hidden lg:flex lg:text-3xl lg:text-left">We build web applications to all purposes, since corporative management systems to digital portfolios.</h2>
          </div>
        </div>
      </div>
      <div className="lg:pl-20 lg:flex-row flex items-center ">
        <div className="lg:w-1/2 hidden lg:flex p-32">
          <Image alt='' src="/assets/img/bornToFire.png" width={500} height={500} className="w-full h-full" />
        </div>
        <div className="lg:w-1/2 w-full p-16">
          <h2 className="text-4xl text-black font-base-neue-bold text-center lg:text-left">Born to fire</h2>
          <p className="text-2xl text-black font-base-neue-regular text-center lg:text-left">We know that there is a war under your feets. Your applications need to be secure everywhere, but attackers needs only ONE point to attack.
            With us, you're ensured to have the latest security practices ever.</p>
        </div>
      </div>
      <div style={
        {
          backgroundImage: 'url("/assets/backgrounds/7.svg")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }
      } className="p-16 lg:p-0 lg:px-8 lg:flex-col flex justify-start items-center">
        <div className="p-8 z-10 bg-white -mt-[75px] mb-4 border-4 border-black rounded-md">
          <h2 className="text-4xl text-black  font-base-neue-bold text-center lg:text-center border-spacing-2">We make it seems like we are working on easy mode!</h2>
          <p className="text-2xl text-black font-base-neue-regular text-center lg:text-center">We count on the best professionals and toolchains, to make your app atractive and profitable.</p>
        </div>
        <div className="w-full flex p-8 justify-center">
          <Badge
            className='w-[30%] bg-[#151515]'
            textClassName='text-white'
            title='Requisits gathering'
            description="We look at your business deeply, to understand what you need and what you don't."
            imageUrl='/assets/img/requisitesGathering.png'
            preventDefault
          />
          <Badge
            className='w-[40%] bg-[#151515] mx-8'
            textClassName='text-white'
            title='We care about design'
            description='Design is the first thing your customers see... and we know that a lot of software houses seems to not know it. Not here, We make your apps beautiful and functional.'
            imageUrl='/assets/img/design.png'
            preventDefault
          />
          <Badge
            className='w-[30%] bg-[#151515]  '
            textClassName='text-white'
            title='Task management'
            description='We split the work into tasks, to make it easier to manage. You can follow the progress of each task in real time.'
            imageUrl='/assets/img/tasks.png'
            preventDefault
          />

        </div>
        <div className="w-full flex p-8 pt-4 justify-center">
          <Badge
            className='w-[30%] bg-[#151515] '
            textClassName='text-white'
            title='Anonnymous Approach'
            description='From contact to delivery, we protect your data at any situation, and that can include your identity.'
            imageUrl='/assets/img/anonnymous.png'
            preventDefault
          />
          <Badge
            className='w-[30%] bg-[#151515] h-full mx-8'
            textClassName='text-white'
            title='Modern ecossystem'
            description='Since design to code, we use new generation AI tools to make this process faster, more efficient and cheaper.'
            imageUrl='/assets/img/toolchain.png'
            preventDefault
          />
        </div>
      </div>
      </div>
            <div className="flex flex-col lg:flex-row justify-center items-center bg-black text-white p-8">
            <div className="flex flex-col justify-center items-center lg:items-start">
              <h2 className="text-2xl font-base-neue-bold text-center lg:text-left">Vogher</h2>
              <p className="text-xl font-base-neue-regular text-center lg:text-left">The future of IA is next to you</p>
            </div>
            <div className="flex flex-col justify-center items-center lg:items-end">
              <p className="text-xl font-base-neue-regular text-center lg:text-right">CNPJ: 49.260.491/0001-07</p>
              <p className="text-xl font-base-neue-regular text-center lg:text-right">All rights reserved</p>
            </div>
          </div>
        </>
      )
}