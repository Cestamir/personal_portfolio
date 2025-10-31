'use client'
import React from 'react'
import Card from './Card'
import ExpCard from './ExpCard'
import ReviewCard from './ReviewCard'




const Experience = () => {
  return (
    <div id='experience' className='flex flex-col items-center'>
        <h2 className='text-3xl headlinetext mb-5'>My experience</h2>
        <p>

        </p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
            <Card gridCardSize='small' gridCardHeader='Astronomy' gridCardIcon='🪐' gridCardText='One of my main hobbies after coding is astronomy..'/>
            <Card gridCardSize='small' gridCardHeader='Bio Hacking' gridCardIcon='🍉' gridCardText='Self improvent both physical & mental is needed for maximum effectivness.'/>
            <Card gridCardSize='small' gridCardHeader='AI' gridCardIcon='🤖' gridCardText='Robotics & Hardware + AI is very interesting field and i want it to explore deeper !'/>
        </div>
        <h3 className='text-2xl m-5 headlinetext'>My projects</h3>
        <p>Posted on GitHub, open source, feel free to contribute ⬇️</p>
        <div className='flex flex-col md:flex-row gap-3 mt-3'>
            <ExpCard difficulty={2} cta='view' features={["browse your favorite foods & recipes","create an account and add food items to it","manage all users, admin panel","CRUD","Save items in database","Scrape new food from USDA"]} name='TheFoodGuideBook'/>
            <ExpCard difficulty={3} cta='view' features={["browse your favorite foods & recipes","create an account and add food items to it","manage all users, admin panel","CRUD","Save items in database","Scrape new food from USDA"]} name='TheFoodGuideBook'/>
            <ExpCard difficulty={1} cta='view' features={["browse your favorite foods & recipes","create an account and add food items to it","manage all users, admin panel","CRUD","Save items in database","Scrape new food from USDA"]} name='TheFoodGuideBook'/>
        </div>
        <div className='flex flex-col md:flex-row gap-3 mt-15 mb-10 oveflow-x-hidden'>
            <h3 className='text-center text-xl headlinetext'>You</h3>
            <ReviewCard stars={5} comment='Great experience, i higly recomend working or collaborating with Cestmir.' userPic='🥸'/>
            <ReviewCard stars={4} comment='Skilled developer, looking forward to future projects.' userPic='🎃'/>
            <ReviewCard stars={3} comment='Cestmir is a aspiring junior developer, i like his workflow.' userPic='🧑🏼‍🦱'/>
            <ReviewCard stars={2} comment='Not a great experience, need to find someone skillful.' userPic='👽'/>
        </div>
    </div>
  )
}

export default Experience