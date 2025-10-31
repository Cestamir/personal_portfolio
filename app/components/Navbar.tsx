import Link from 'next/link'
import React from 'react'

const Navbar = () => {

    const navPaths = ["about","experience/projects","experience/skills"]

  return (
    <nav id='navbar' className='mt-5 mb-5'>
        <div id='navitem'><Link href={`/about`}>About me</Link></div>
        <div id='navitem'><Link href={`/`}>Home</Link></div>
    </nav>
  )
}

export default Navbar