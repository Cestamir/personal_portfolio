import React from 'react'

interface ReviewCardProps{
    userPic: string;
    stars: number;
    comment: string;
}

const ReviewCard = ({userPic,stars,comment}:ReviewCardProps) => {
  return (
    <div id='reviewcard' className='flex flex-col flex-start w-80 md:min-w-xs'>
        <div>{userPic}</div>
        <div>
            {"⭐️".repeat(stars)}
        </div>
        <p>{comment}</p>
    </div>
  )
}

export default ReviewCard