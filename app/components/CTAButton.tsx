import React from 'react'

interface CtaButtonProps{
    ctaText: string;
    onClickCta: () => void;
}

const CTAButton = ({ctaText,onClickCta} : CtaButtonProps) => {
  return (
    <button className='btn' style={{backgroundColor:"#3F5E5A",color:"#20FC8F"}} onClick={() => onClickCta()}>{ctaText}</button>
  )
}

export default CTAButton