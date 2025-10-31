import React, { useState } from 'react'
import CTAButton from './CTAButton';


interface ExpCardProps{
    difficulty: number;
    cta: string;
    features: string[];
    name: string;
}

const ExpCard = ({difficulty,cta,features,name} : ExpCardProps) => {


    function handleCtaAction(){
        console.log("display item");
    }


  return (
    <div id='expcard' className='m-2 md:m-1' style={difficulty >= 3 ? {transform: "scale(1.1)",border: "1px solid #20FC8F"} : {opacity: "85%"}}>
        <div className='w-full flex justify-between'>
            <h4>In progress..</h4>
            {difficulty > 2 ? <span>Most complex</span> : null}
        </div>
        <h2 className='text-[#fff]'>{name}</h2>
        <CTAButton onClickCta={handleCtaAction} ctaText={cta ? cta : "display now" }/>
        <ul className='flex flex-col'>
            {features.map((feature,i) => (
                <li key={i}>
                    {`▪️ ${feature}`}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ExpCard