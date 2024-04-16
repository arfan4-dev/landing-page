/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef, useState, useEffect } from 'react'
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import styles 👇
import 'react-modern-drawer/dist/index.css'
import { FiAlignJustify } from "react-icons/fi";
// import component 👇
import Drawer from 'react-modern-drawer'
import Link from 'next/link';
function LandingPage() {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    const swiperRef = useRef(null);
    const [width, setWidth] = useState();
    const [slideView, setSlideView] = useState(4)
    const [spaceBetween, setSpaceBetween] = useState(20)
    const handleBackClick = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleForwardClick = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    useEffect(() => {
        if (width < 640) {
            setSlideView(2);
            setSpaceBetween(5)

        } else {
            setSlideView(4);
            setSpaceBetween(20)
        }
    }, [width]);
    return (
        <div className=' min-h-screen overflow-x-hidden bg-[#FCFCFF] text-[#3E4581]'>
            <header className="hidden sm:flex items-center justify-around pt-5">
                <img src="/assets/logo.svg" alt="" className="w-[120px] 2xl:w-[180px]" />
                <div className="text-[#3E4581] text-[18px] space-x-20">
                    <span>About Us </span>
                    <span>Services</span>
                    <span>Contact Us</span>
                </div>
                <button className="bg-[#AE68FA] text-white px-5 py-2 2xl:px-10 2xl:py-4">
                    Login
                </button>
            </header>
            <nav className=' flex items-center justify-between py-5 mx-5 sm:hidden'>
                <img src="/assets/logo.svg" alt="" className="w-[80px] " />

                <div className='border-1 border-[white] rounded-md p-3'>
                    <FiAlignJustify className='w-[16px]' onClick={toggleDrawer} />
                </div>
            </nav>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='bg-[#fffff]'
                lockBackgroundScroll={true}
                style={{ height: '100%', backgroundColor: '#ffff' }}

            >
                {isOpen && <div className='bg-[#fffff] min-h-screen p-5'>
                    <img src="/assets/logo.svg" alt="" className="w-[80px] " />
                    <div className='flex flex-col text-[24px] font-semibold space-y-10 mt-10 mb-10'>
                        <p >
                            <Link href='/'>About Us</Link>
                        </p>
                        <p>
                            <Link href='/'>
                                Service
                            </Link>

                        </p>

                        <Link href='/'>
                            Contact Us
                        </Link>
                    </div>

                    <button className='border-1 border-[#3E4581] rounded-sm  px-6 py-1.5'>
                        <Link href='/'>
                            Login
                        </Link>

                    </button>
                </div>
                }
            </Drawer>

            {/* Hero section */}
            <div className="flex flex-col sm:flex-row  items-center justify-around space-x-[30rem] 3xl:space-x-[37rem] pt-20 2xl:pt-48 relative">
                <div className="text-[#3E4581] w-[90%] sm:w-[443px] space-y-5 sm:space-y-10 3xl:space-y-20">
                    <p className="text-[28px] sm:text-[60px] 2xl:text-[85px]   leading-[80px]">
                        Tell a better brand story
                    </p>
                    <p className="text-[16px] 2xl:text-[20px]">
                        Warrant present garrets limited cordial in inquiry to. Supported me sweetness behaviour shameless excellent so arranging.

                    </p>
                    <div className="space-x-5  ">
                        <button className="w-[100px] sm:w-[180px] h-[48px] bg-[#AE68FA] text-white">Get Started</button>
                        <button className="w-[100px] sm:w-[180px] h-[48px] border-1 border-[#AE68FA] text-[#AE68FA]">Get Started</button>
                    </div>

                </div>

                <div className="absolute top-[40rem] right-2 sm:-right-0 sm:top-0 z-50">

                    <img src='/assets/spot.png' alt="" className=" sm:w-[700px] opacity-40 " />
                </div>

                <div className=" z-50">
                    <img src="/assets/Card 02.png" className=" absolute -bottom-60 right-6 xl:right-[81px] xl:top-20 2xl:right-[81px] 2xl:top-32 w-[170px] sm:w-[260px] 2xl:w-[309px]" alt="" />
                    <img src="/assets/CompositeLayer.png" className="absolute  -bottom-52 right-48 xl:right-[340px] xl:top-[2rem] 2xl:right-[390px] 2xl:top-[4rem] w-[150px] 2xl:w-[188px]" alt="" />
                    <img src="/assets/Group 1000001519.png" className="absolute top-[580px] right-6 xl:right-[3.5rem] xl:top-[20.5rem] 2xl:right-[3rem] 2xl:bottom-[7rem] w-[200px] sm:w-[300px] 2xl:w-[380px]" alt="" />
                    <img src="/assets/Card 10.png" alt="" className="absolute rounded-lg right-[15rem] top-[34rem] sm:right-[24rem] sm:top-[14rem] 2xl:right-[28rem] 2xl:top-[19rem] w-[120px] sm:w-[256px] 2xl:w-[306px]" />
                    <img src="/assets/Group 690.png" alt="" className="absolute right-[6rem] top-[40.5rem]  sm:right-[10rem] sm:top-[27rem] 2xl:right-[11rem] 2xl:top-[34.5rem] w-[100px] sm:w-[150px] 2xl:w-[200px]" />
                </div>

                <div className="absolute top-0 -left-[32rem] 2xl:top-10 3xl:top-[3rem] 3xl:-left-[40rem]">

                    <img src="/assets/Abstract.png" alt="" className="w-[120px] 2xl:w-[198px]" /></div>

            </div>


            <div className="relative mt-[18rem] sm:mt-0">
                <div className="grid grid-cols-2 grid-rows-2 gap-5 md:flex justify-around items-center pt-40  relative z-50 ml-5 sm:ml-0">
                    <img src="/assets/planday.png" alt="" />
                    <img src="/assets/umbaraco.png" alt="" />
                    <img src="/assets/pearlfisher.png" alt="" />
                    <img src="/assets/brightpearl.png" alt="" />
                    <img src="/assets/planday.png" alt="" />
                </div>

                <img src="/assets/Rectangle.png" className="absolute left-0 -top-10  2xl:left-0 2xl:-top-56 2xl:h-[1100px] 2xl:w-[100%] " alt="" />
            </div>  {/*  */}



            <div className="text-[#3E4581] text-[14px] md:text-[20px] md:text-center ml-5 py-16 md:py-32 relative z-50">
                <p className="text-[40px] md:text-[60px]">What we Offer?</p>
                <p > in virtual space through communication platforms. Durable relations </p>
                <p>that extend beyond immediate genealogical ties.</p>
            </div>


            <div className="flex flex-col md:flex-row items-center space-y-5 md:space-y-0 justify-center mb-10 sm:space-x-5 pt- text-[#3E4581] relative z-50 ">
                <div className="h-[270px] w-[282px] bg-[#ffff] rounded-xl p-5">
                    <img src="/assets/CompositeLayer (1).png" className="mb-5" alt="" />
                    <p className="text-[20px] font-semibold mb-3">Community Support</p>
                    <p className="text-[16px]">Apps keep work and information right at your fingertips—and Slack keeps it all securely.
                    </p>
                </div>

                <div className="h-[270px] w-[282px] bg-[#ffff] rounded-xl p-5">
                    <img src="/assets/CompositeLayer (2).png" className="mb-5" alt="" />
                    <p className="text-[20px] font-semibold mb-3">Security First</p>
                    <p className="text-[16px]">Connect the tools you already use to get more from them every time you work.</p>
                </div>
                <div className="h-[270px] w-[282px] bg-[#ffff] rounded-xl p-5">
                    <img src="/assets/CompositeLayer (3).png" className="mb-5" alt="" />
                    <p className="text-[20px] font-semibold mb-3">24/7 Admin Support</p>
                    <p className="text-[16px]">You can work with apps in channels, where they’re a seamless part of the conver.                    </p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center space-y-5 md:space-y-0  sm:space-x-5 pt- text-[#3E4581] relative z-50">
                <div className="h-[270px] w-[282px] bg-[#ffff] rounded-xl p-5">
                    <img src="/assets/CompositeLayer (4).png" className="mb-5" alt="" />
                    <p className="text-[20px] font-semibold mb-3">100+ Themes</p>
                    <p className="text-[16px]">Spend less time tracking down the people needed to get work done.
                    </p>
                </div>

                <div className="h-[270px] w-[282px] bg-[#ffff] rounded-xl p-5">
                    <img src="/assets/CompositeLayer (5).png" className="mb-5" alt="" />
                    <p className="text-[20px] font-semibold mb-3">Fully Integrated</p>
                    <p className="text-[16px]">Skip the follow-ups and back-and -forth. Easily standardize how you collect</p>
                </div>
                <div className="h-[270px] w-[282px] bg-[#ffff] rounded-xl p-5">
                    <img src="/assets/CompositeLayer (6).png" className="mb-5" alt="" />
                    <p className="text-[20px] font-semibold mb-3">Monthly Update</p>
                    <p className="text-[16px]">Take control of your work day. In a just a few minutes, create a customized workflow.</p>
                </div>
            </div>


            <div className="relative flex flex-col md:flex-row items-center md:items-start justify-center pt-32 md:space-x-24   2xl:space-x-32">
                <div className="text-[#060608] md:w-[443px] z-50 w-[90%] sm:w-auto  space-y-8">
                    <p className="text-[40px] 2xl:text-[60px]">How it Works?</p>
                    <p className='text-[12px] 2xl:text-[16px]'>Resolving neglected sir tolerably but existence conveying for. Day his put off unaffected literature partiality inhabiting.
                    </p>

                    <img src="/assets/Card01.png" className="w-[350px] 2xl:w-[475px]" alt="" />
                </div>

                <div className="absolute -left-24 top-28 2xl:-left-32 2xl:top-48 3xl:-left-32 3xl:top-40 2xl:rotate-180 "><img src="/assets/left.png" className="w-[500px] h-[400px] 2xl:w-[500px] 2xl:h-[750px] 3xl:w-[850px] 3xl:h-[750px]" alt="" /></div>
                <div className="absolute -right-24 bottom-20 2xl:-right-32 2xl:bottom-32 3xl:top-80 " ><img src="/assets/right.png" className="w-[500px] h-[600px] 2xl:w-[880px] 2xl:h-[700px] 3xl:w-[900px] 3xl:h-[900px]" alt="" /></div>

                <div class='mt-5 2xl:mt-10 z-50 w-[90%] sm:w-auto '>
                    <div class="image-container">
                        <img src="/assets/Card02.png" className="w-[350px] 2xl:w-[475px] mb-8 sm:mb-20" alt="" />
                    </div>
                    <div class="image-container">
                        <img src="/assets/Card03.png" className="image w-[550px] sm:-ml-[100px] 2xl:-ml-[110px] 2xl:w-[701px]" alt="" />
                    </div>
                </div>

            </div>


            <div className="relative text-[24px] md:text-[40px] 2xl:text-[60px] md:text-center ml-5 py-32 text-[#3E4581]">
                <div>
                    <img src="/assets/abstract-middle.png" className="w-[120px] md:w-[180px]  2xl:w-[318px] absolute top-5 sm:-top-20 2xl:-top-40 left-0" alt="" />
                </div>
                <p className="leading-[30px]">Our plans scale with your</p>
                <p className="">product</p>
                <p className='text-[14px] md:text-[20px]'>in virtual space through communication platforms.</p>
            </div>


            <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-5">
                <div className="bg-slate-200 w-[300px] h-[400px] md:w-[362px] md:h-[508px] rounded-lg p-12 md:p-10 space-y-7 md:space-y-8 ">
                    <p className="text-[20px] md:text-[30px] text-center">For Starter</p>
                    <p className="text-[38px] md:text-[52px] text-center">$59</p>
                    <ul class="list-disc list-inside text-[13px] md:text-[18px]">
                        <li>Feedback Categorization</li>
                        <li>Features prioritization</li>
                        <li>Real-time collaboration</li>
                        <li>Feedback loop notifications</li>
                        <li>Essential dev tools integrations</li>
                    </ul>

                    <button className="w-[200px] md:w-[278px] h-[48px] border-1 border-[#AE68FA] ">Purchase Package</button>

                </div>
                <div className="bg-[#481177] text-white w-[300px] h-[400px] md:w-[362px] md:h-[508px] rounded-lg p-12 md:p-10 space-y-7 md:space-y-8 ">
                    <p className="text-[20px] md:text-[30px]  text-center">For Terms</p>
                    <p className="text-[38px] md:text-[52px] text-center">$99</p>
                    <ul class="list-disc list-inside text-[13px] md:text-[18px]">
                        <li>Feedback Categorization</li>
                        <li>Features prioritization</li>
                        <li>Real-time collaboration</li>
                        <li>Feedback loop notifications</li>
                        <li>Essential dev tools integrations</li>
                    </ul>

                    <button className="w-[200px] md:w-[278px] h-[48px] bg-[#AE68FA] border-1 border-[#AE68FA] ">Purchase Package</button>

                </div>
                <div className="bg-slate-200  w-[300px] h-[400px] md:w-[362px] md:h-[508px] rounded-lg p-12 md:p-10 space-y-7  md:space-y-8 ">
                    <p className="text-[20px] md:text-[30px]  text-center">For Company</p>
                    <p className="text-[38px] md:text-[52px] text-center ">Custom</p>
                    <ul class="list-disc list-inside text-[13px] md:text-[18px] py-[27px]">
                        <li>Feedback Categorization</li>
                        <li>Features prioritization</li>
                        <li>Real-time collaboration</li>

                    </ul>

                    <button className="w-[200px] md:w-[278px] h-[48px] border-1 border-[#AE68FA]   ">Purchase Package</button>

                </div>
            </div>


            <div>
                <div className="text-[20px] md:text-[40px] 2xl:text-[60px] text-center py-10">
                    <p>What Our Clients Say
                    </p>
                    <p >About Us</p>
                    <p className="text-[14px] md:text-[20px]">Community development is often linked with community work or
                    </p>
                    <p className="text-[14px] md:text-[20px]">community planning, and may involve stakeholders, foundations,</p>
                </div>
            </div>

            <div className='flex  justify-center items-center md:space-x-5 mb-20'>

                <Swiper
                    slidesPerView={slideView}
                    spaceBetween={spaceBetween}
                    ref={swiperRef}
                    modules={[Pagination]}
                    className=''
                >

                    <SwiperSlide >
                        <img src="/assets/Card 02 (1).png" className='' alt="" />

                    </SwiperSlide>
                    <SwiperSlide >
                        <img src="/assets/Card 02 (1).png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/assets/Card 02 (1).png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/assets/Card 02 (1).png" alt="" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="/assets/Card 02 (1).png" alt="" />
                    </SwiperSlide>

                </Swiper>


            </div>
            <div className='flex justify-center items-center  space-x-5 pb-10'>
                <button className="cursor-pointer" onClick={handleBackClick}><img src="/assets/icon.png" alt="" /></button>
                <button className="cursor-pointer" onClick={handleForwardClick}><img src="/assets/CompositeLayer (7).png" alt="" /></button>
            </div>

            <div className="bg-[#F8F3FF] pt-20">
                <div className="flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-60 items-center">
                    <div className="flex flex-col items-center">
                        <p className="text-[60px]">25,356</p>
                        <p className="text-[20px]">Projects Done</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-[60px]">1M$</p>
                        <p className="text-[20px]">Projects Done</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-[60px]">95%</p>
                        <p className="text-[20px]">Happy Customers</p>
                    </div>
                </div>

                <div className="text-center space-y-5 md:space-y-10 py-20 ">
                    <p className="text-[28px] md:text-[40px] 2xl:text-[60px]"> Want to start a Project With us?</p>
                    <div>
                        <p className="text-[12px] md:text-[16px] 2xl:text-[20px]">Warrant present garrets limited cordial in inquiry to. Supported me </p>
                        <p className="text-[12px] md:text-[16px] 2xl:text-[20px]">sweetness behaviour shameless excellent so arranging.</p>
                    </div>

                    <button className="w-[180px] h-[48px] bg-[#AE68FA] text-white border-1 border-[#AE68FA]">Get Started</button>

                </div>
            </div>


            <div className="pt-20 flex justify-center items-center ">
                <p className='text-[28px] md:text-[52px] w-[511px] ml-5 md:text-center md:leading-[50px]'>Social Media Its Ways Of Our Excellence.</p>
            </div>

            <form className="flex justify-center items-center pt-10">
                <div class="relative w-[90%] md:w-[445px] ">

                    <input type="search" id="search" class="block w-full p-4 ps-10 text-sm text-white border border-gray-300 rounded-lg bg-black dark:placeholder-gray-400 dark:text-white " placeholder="Enter your text..." required />
                    <div className="">
                        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-[#AE68FA] font-medium rounded-sm text-sm px-4 py-2">Get Started
                        </button>
                    </div>
                </div>
            </form>

            <div className='flex justify-center items-center space-x-5 pt-16'>
                <img src="/assets/profile.png" alt="" />
                <p className='text-[16px] w-[78px] underline'>watch our video</p>
            </div>


            <div className="relative pt-16">
                <footer className="hidden md:flex items-center justify-evenly pt-5">
                    <img src="/assets/logo.svg" alt="" className="w-[120px] 2xl:w-[180px]" />
                    <div className="text-[#3E4581] text-[18px] space-x-20">
                        <span>About Us </span>
                        <span>Services</span>
                        <span>Contact Us</span>
                    </div>
                    <div>
                        <img src="/assets/social-icon.png" alt="" />
                    </div>
                </footer>
                <div>
                    <img src="/assets/decorator.png" className="absolute w-[100px] -bottom-16 right-0 md:bottom-0 md:right-0" alt="" />
                </div>
            </div>

            <p className="text-center text-[16px] pt-16 pb-8">Copyright © Brands.io creative</p>
        </div>
    )
}

export default LandingPage