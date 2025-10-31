'use client'
import React from 'react'
import ContactLink from './ContactLink'
import CTAButton from './CTAButton'
import Button from './Button'


const Contact = () => {

    function handleContact(){
        console.log("contacted.")
    }

    function handleNewsLetterSubmit(){
        console.log("email sent")
    }

  return (
    <div className='flex flex-col w-full items-center justify-center'>
        <h2 className='text-3xl headlinetext'>Links</h2>
        <div className='flex flex-col gap-3 mt-5 mb-5'>
            <ContactLink icon='./github.png' url='https://github.com/Cestamir' text='GitHub'/>
            <ContactLink icon='./linkedin.png' url='https://www.linkedin.com/in/cestmir-pavlasek-4bb741382/' text='LinkedIn'/>
            <ContactLink icon='./twitter.png' url='https://x.com/Cestmirdev' text='X'/>
            <ContactLink icon='./globe.svg' url='https://github.com/Cestamir' text='Link'/>
            <ContactLink icon='./globe.svg' url='https://github.com/Cestamir' text='Link2'/>
        </div>
        <div id='contactcta' className='flex flex-col items-center justify-center mt-10 mb-20'>
            Start working ?
            <CTAButton ctaText='Send' onClickCta={handleContact}/>
        </div>
        <footer className='w-full grid grid-cols-2 max-w-100 md:max-w-200 lg:max-w-300 md:flex md:flex-row md:items-center md:justify-around gap-10 m-10'>
            <div className='footeritemcolor rounded-full p-10 min-h-50 flex bg-[] flex-col w-full items-center'>
                <span>{"🫆"}</span>
                <p>{'"Everyday is a day"'}</p>
            </div>
            <div className='footeritemcolor rounded-full p-10 min-h-50 flex flex-col w-full items-center w-full'>
                <h3 className='headlinetext'>Menu</h3>
                <a href='/experience'>Projects</a>
                <a href='/hero'>Start</a>
            </div>
            <div className='footeritemcolor rounded-full p-10 min-h-50 flex flex-col w-full items-center text-center'>
                <h3 className='headlinetext'>Legal</h3>
                <p>
                    Privacy policies, copyright claim made by Cestmir Pavlasek 2025
                </p>
            </div>
            <div className='footeritemcolor p-10 rounded-full min-h-50 flex flex-col w-full items-center gap-2'>
                <h3>Newsletter</h3>
                <input className='w-full' id='newsletter' placeholder='youremail@domain.com'/>
                <Button btnText='Subscribe' btnColor='light' btnAction={handleNewsLetterSubmit} />
            </div>
        </footer>
    </div>
  )
}

export default Contact