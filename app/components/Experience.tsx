'use client'
import React from 'react'
import Card from './Card'
import ExpCard from './ExpCard'
import ReviewCard from './ReviewCard'




const Experience = () => {
  return (
    <div id='experience' className='flex flex-col items-center'>
        <h2 className='text-3xl headlinetext mt-10 mb-5'>Work Experience</h2>
        <p>

        </p>
        <div className='grid grid-cols-1 md:grid-cols-8 gap-3'>
            <Card gridCardSize='medium' gridCardHeader='Contractor, Custom Private Garden Realization' gridCardIcon='🪴🪏' gridCardText='Realization of custom gardens under highly experinced garden architects.'/>
            <Card gridCardSize='medium' gridCardHeader='Bolt/Uber' gridCardIcon='🚕' gridCardText='Reliability, communication and discipline as a proffesional driver.'/>
            <Card gridCardSize='medium' gridCardHeader='Hotel Imperial' gridCardIcon='🏨' gridCardText='Hotel portier in luxury 5 star hospitality enviroment.'/>
            <Card gridCardSize='medium' gridCardHeader='Construction worker' gridCardIcon='🚧' gridCardText='Maintaining public light connection & construction jobs.'/>
            <Card gridCardSize='medium' gridCardHeader='Social media manager' gridCardIcon='📲' gridCardText='Managment and advertisment of social media platforms accounts & content creation.'/>
        </div>
        <h2 className='text-3xl headlinetext mt-10 mb-5'>My hobbies</h2>
        <p>

        </p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <Card gridCardSize='small' gridCardHeader='Astronomy' gridCardIcon='🪐' gridCardText='One of my main hobbies after coding is astronomy..'/>
            <Card gridCardSize='small' gridCardHeader='Bio Hacking' gridCardIcon='🍉' gridCardText='Self improvent both physical & mental is needed for maximum effectivness.'/>
            <Card gridCardSize='small' gridCardHeader='AI' gridCardIcon='🤖' gridCardText='Robotics & Hardware + AI is very interesting field and i want it to explore deeper !'/>
        </div>
        <h3 className='text-3xl mt-10 mb-5 headlinetext'>My projects</h3>
        <p className='m-5 text-center'>Posted on GitHub, open source, feel free to contribute ⬇️</p>
        <div className='flex flex-col md:flex-row gap-3 mt-3'>
            <ExpCard difficulty={2} cta='view' features={["browse your favorite foods & recipes","create an account and add food items to it","manage all users, admin panel","CRUD","Save items in database","Scrape new food from USDA"]} name='TheFoodGuideBook'/>
            <ExpCard difficulty={3} cta='view' features={["browse your favorite foods & recipes","create an account and add food items to it","manage all users, admin panel","CRUD","Save items in database","Scrape new food from USDA"]} name='TheFoodGuideBook'/>
            <ExpCard difficulty={1} cta='view' features={["browse your favorite foods & recipes","create an account and add food items to it","manage all users, admin panel","CRUD","Save items in database","Scrape new food from USDA"]} name='TheFoodGuideBook'/>
        </div>
        <div className='flex flex-col m-10 items-center'>
            <h2 className='headlinetext text-xl'>Reviews</h2>
            <div className='flex flex-col md:flex-row gap-3 mt-10 mb-10 oveflow-x-scroll'>  
                <ReviewCard stars={5} comment='Great experience, i higly recomend working or collaborating with Cestmir.' userPic='🥸'/>
                <ReviewCard stars={4} comment='Skilled developer, looking forward to future projects.' userPic='🎃'/>
                <ReviewCard stars={3} comment='Cestmir is a aspiring junior developer, i like his workflow.' userPic='🧑🏼‍🦱'/>
                <ReviewCard stars={2} comment='Not a great experience, need to find someone skillful.' userPic='👽'/>
            </div>
        </div>
    </div>
  )
}

export default Experience