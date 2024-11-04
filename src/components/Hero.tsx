import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import ShimmerButton from './ui/ShimmerButton'
import MagicButton from './ui/MagicButton'
import {FaLocationArrow} from "react-icons/fa6"

type Props = {}

const Hero = (props: Props) => {
    return (
        <div className=''>
            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-40 h-screen' fill='white' />
                <Spotlight className='top-10 left-full h-[80vh] w-[50vh]' fill='purple' />
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vh]' fill='blue' />
            </div>
            <div>
                <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.07] bg-grid-black/[0.2] relative flex items-center justify-center">
                    {/* Radial gradient for the container to give a faded look */}
                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                    <div className='flex justify-center relative my-20 z-10'>
                        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                            <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
                                Dynamic Web Magic with Next.js
                            </h2>
                            <h1 className='text-center'>
                                <TextGenerateEffect
                                    className='text-[40px] md:text-5xl lg:text-6xl'
                                    words='Transforming Concepts into Seamless User Experience' 
                                />
                            </h1>
                            <p className='text-center md:tracking-widest mb-4 text-sm md:text-lg lg:text-2xl'>
                                Hi, I&apos;m Johnson, a Full Stack Web Developer
                            </p>
                            <div>
                                <MagicButton ico={<FaLocationArrow/>} position='right'>Show my Projects</MagicButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default Hero