import React from 'react'

interface CtaButtonProps{
    ctaText: string;
    onClickCta: () => void;
}

const CTAButton = ({ctaText,onClickCta} : CtaButtonProps) => {
  return (
    <button className='btn' onClick={() => onClickCta()}>{ctaText}</button>
  )
}

export default CTAButton