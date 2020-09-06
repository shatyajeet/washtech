import React, { useState } from 'react'

import { TestimonialsContainer, TestimonialsContent, ReviewComment, ReviewDetailsContainer, ReviewerDetails, ReviewCountContainer, ReviewCountItems, ReviewCountItem, ReviewNext, ReviewerName, ReviewerJD } from './style'
import { ContentLine, ContentHeading, SizedBox } from '../components/style'

import navigateNextIcon from '../images/navigate-next.svg'

const reviews = [{
  name: 'Walid J',
  jd: 'Gym owner',
  review: 'Our customers started giving us compliments about the quality and the unique fragrance of the towels a week after we decided to move forward with Washtech. We have nothing but praise for the committed Washtech team.'
}, {
  name: 'Suvesh K',
  jd: 'Procurement Manager at a large hotel chain',
  review: 'We are a chain of hotels and we need to make sure that our operations are efficient. With Washtech online dashboard, I can keep track of consumption patterns per location and status of each delivery and quantity. I can also process payments with the finance team from the dashboard itself.'
}, {
  name: 'Caroline H',
  jd: 'Studio manager',
  review: 'We depend on Washtech deliveries of towels as we run a lean operation and they have never given us a chance to complain. Also, our business benefited from their leasing option where our upfront cost to source items dropped to zero.'
}]

export default function Testimonials () {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0)

  const activeReview = reviews[activeReviewIndex]

  function handleNextClick () {
    const nextIndex = activeReviewIndex < reviews.length - 1 ? activeReviewIndex + 1 : 0
    setActiveReviewIndex(nextIndex)
  }

  return <TestimonialsContainer>
    <TestimonialsContent>
      <ContentLine>What People Say</ContentLine>
      <SizedBox height={8} />
      <ContentHeading>Happy Customers</ContentHeading>
      <div className='desktop'>
        <SizedBox height={40} />
      </div>
      <div className='mob'>
        <SizedBox height={24} />
      </div>
      <ReviewComment>{activeReview.review}</ReviewComment>
      <SizedBox height={24} />
      <ReviewDetailsContainer>
        <ReviewerDetails>
          <ReviewerName>{activeReview.name}</ReviewerName>
          <ReviewerJD>{activeReview.jd}</ReviewerJD>
        </ReviewerDetails>
        <ReviewCountContainer>
          <ReviewCountItems count={reviews.length}>
            {reviews.map((item, index) => <ReviewCountItem active={activeReviewIndex === index} key={index} />)}
          </ReviewCountItems>
          <ReviewNext src={navigateNextIcon} onClick={handleNextClick} />
        </ReviewCountContainer>
      </ReviewDetailsContainer>
    </TestimonialsContent>
  </TestimonialsContainer>
}
