import React, { useState, useEffect } from 'react'

import { JumbotronContainer, JumbotronContent, LeftContent, RightContent, JumbotronImage, QuoteContainer, QuoteHeading, QuoteDescription, QuoteForm } from './style'
import { ContentLine, ContentHeading, ContentDescription, SizedBox } from '../components/style'
import Input from '../components/input'
import MobileNumberInput from '../components/mobile-number-input'
import Button from '../components/button'

const jumbotronImage = 'https://res.cloudinary.com/dhahnivds/image/upload/c_scale,f_auto,q_auto,w_1660/v1599189806/WashTech/image_3x.png'
const jumbotronMobileImage = 'https://res.cloudinary.com/dhahnivds/image/upload/c_scale,f_auto,q_auto,w_648/v1599370392/WashTech/header-image_3x.png'

export default function Jumbotron () {
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      const quoteBox = document.getElementById('quote-box')
      const quoteBoxDimensions = quoteBox.getBoundingClientRect()
      setHeight(quoteBoxDimensions.height)
      setWidth(quoteBoxDimensions.width)
    })
  }, [])


  return <JumbotronContainer>
    <JumbotronContent>
      <LeftContent>
        <ContentLine>Premium laundry for your business</ContentLine>
        <SizedBox height={8} />
        <ContentHeading>We deliver trust in every wash</ContentHeading>
        <SizedBox height={8} />
        <ContentDescription>
          We use technology and years of premium laundry service experience so that you can focus
          more on your core business and let us take care of your laundry operations and you can
          track all of it with the online dashboard
        </ContentDescription>
      </LeftContent>
      <RightContent>
        <div className='desktop'>
          <JumbotronImage src={jumbotronImage} />
        </div>
        <div className='mob'>
          <SizedBox height={40} />
          <img className='jumbotron-image' src={jumbotronMobileImage} alt='washtech' />
        </div>
      </RightContent>
      <QuoteContainer id='quote-box' height={height} width={width}>
        <QuoteHeading>Receive an instant quote within seconds</QuoteHeading>
        <SizedBox height={8} />
        <QuoteDescription>
          We believe in longterm partnerships and build trust so you can rely on our professional
          service and real-time online data
        </QuoteDescription>
        <div className='desktop'>
          <SizedBox height={16} />
        </div>
        <div className='mob'>
          <SizedBox height={24} />
        </div>
        <QuoteForm>
          <Input placeholder='Your name' />
          <SizedBox width={16} />
          <Input placeholder='Email' type='email' />
          <SizedBox width={16} />
          <MobileNumberInput />
          <SizedBox width={16} />
          <Button label='Get Quote' height={64} styles={{ letterSpacing: 2, fontWeight: 600 }} />
        </QuoteForm>
      </QuoteContainer>
    </JumbotronContent>
  </JumbotronContainer>
}
