'use client'
import React from 'react'
import Button from './Button'
import HeroCard from './HeroCard'
import Card from './Card'

const Hero = () => {

    const skills = [
      {size: "large", name: "Coding", desc:"Frontend design + structure, Backend server, APIs, SSE, Controllers & middleware", icon: "👨🏼‍💻"},
      {size: "small", name: "Mind", desc:"Conquer your mind and gain knowledge with your overall physical health is the n.1 priority if possible.", icon: "🧠"},
      {size: "small", name: "Database", desc:"MongoDB, MySQL, Schema design, Queries", icon: "💾"},
      {size: "medium", name: "DevOps", desc:"Git, Docker, CI/CD basics", icon: "⚙️"},
      {size: "small", name: "Health", desc:"Physical fitness and mental wellness", icon: "💪"},
      {size: "small", name: "Learning", desc:"Continuous improvement mindset", icon: "📚"}
    ];

    function onBtnClickAction(){
        console.log(`from btn`);
    }

  return (
    <div id='hero' className='flex flex-col w-full'>
      <div className='flex flex-col md:flex-row w-full items-center justify-center mt-10 mb-10 gap-10 md:gap-20'>
        <div id='herodisplaycard' className='flex flex-col justify-center items-center text-center md:text-left md:items-start w-xs'>
            <h1>FULLSTACK JUNIOR SOFTWARE DEVELOPER</h1>
            <h2>▪️ 5+ Projects</h2>
            <h2>▪️ 1 year dev experience +</h2>
            <h2>▪️ Modern technologies + AI</h2>
            <h2>▪️ Prague, Czech Republic 🇨🇿</h2>
            <h2>▪️ Active open source contribution</h2>
            <div className='m-5 flex gap-2'>
                <Button btnColor='light' btnText='Work' btnAction={onBtnClickAction}/>  
                <Button btnColor='dark' btnText='Get in touch' btnAction={onBtnClickAction}/>
            </div>
        </div>
        <div className='flex items-center justify-center w-xs'>
          <HeroCard/>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row w-full items-center justify-center'>
        <h2 className='text-3xl m-10 md:m-3 headlinetext'>Tech stack:</h2>  
        <ul className='flex flex-col md:flex-row gap-3 items-center md:justify-evenly w-3xl bg-none md:bg-[#2D2D2A] p-2'>
            <li className='flex gap-2'>
                <span>Javascript</span>
                <span><img width={32} height={32} src={`./js.png`} alt="JS"/></span>
            </li>
            <li className='flex gap-2'>
                <span>Typescript</span>
                <span><img width={32} height={32} src={`./ts.webp`} alt="TS"/></span>
            </li>
            <li className='flex gap-2'>
                <span>MongoDB</span>
                <span><img width={32} height={32} src={`./leaf.png`} alt="MongoDB"/></span>
            </li>
            <li className='flex gap-2'>
                <span>Node.js</span>
                <span><img width={32} height={32} src={`./node-js.png`} alt="Node"/></span>
            </li>
            <li className='flex gap-2 text-nowrap'>
                <span>My SQL</span>
                <span><img width={32} height={32} src={`./mysql.png`} alt="MySQL"/></span>
            </li>
            <li className='flex gap-2'>
                <span>Next.js</span>
                <span><img width={32} height={32} src={`./nextjsicon.webp`} alt="Next"/></span>
            </li>
            <li className='flex gap-2'>
                <span>React</span>
                <span><img width={32} height={32} src={`./science.png`} alt="React"/></span>
            </li>
            <li className='flex gap-2'>
                <span>Git</span>
                <span><img width={32} height={32} src={`./social.png`} alt="Git"/></span>
            </li>
        </ul>
      </div>

      <div className='flex items-center flex-col w-full mt-10 mb-10 px-4'>
        <h2 className='m-10 text-3xl md:text-5xl lg:text-7xl headlinetext'>Skills</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 w-full max-w-7xl'>
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              gridCardHeader={skill.name}
              gridCardIcon={skill.icon}
              gridCardText={skill.desc}
              gridCardSize={skill.size as "small" | "medium" | "large"}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero