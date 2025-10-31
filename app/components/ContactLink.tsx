import React from 'react'

interface ContactLinkProps{
    url: string;
    text: string;
    icon: string;
}

const ContactLink = ({url,text,icon} : ContactLinkProps) => {
  return (
    <div id='contactlink' className='flex gap-2'>
        <span><img width={32} height={32} src={icon}/></span>
        <a href={url}>{text}</a>
    </div>
  )
}

export default ContactLink