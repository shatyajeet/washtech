import React, { useState, useEffect } from 'react'

import { JumbotronContainer, JumbotronContent, QuoteContainer, QuoteHeading, QuoteForm } from './style'
import { ContentLine, ContentHeading, SizedBox } from '../components/style'
import Input from '../components/input'
import MobileNumberInput from '../components/mobile-number-input'
import Button from '../components/button'

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
      <QuoteContainer id='quote-box' height={height} width={width}>
        <div>
          <ContentLine color='#FFF' textAlign='center'>Premium laundry for your business</ContentLine>
          <SizedBox height={8} />
          <ContentHeading color='#34b4a9' textAlign='center'><span style={{ fontWeight: 300 }}>We deliver</span> trust in every wash</ContentHeading>
          <SizedBox height={8} />
        </div>
        <QuoteHeading>Receive an instant quote within seconds</QuoteHeading>
        <div className='mob'>
          <SizedBox height={24} />
        </div>
        <QuoteForm>
          <Input placeholder='Your name' />
          <div className='desktop'>
            <SizedBox width={16} />
          </div>
          <Input placeholder='Email' type='email' />
          <div className='desktop'>
            <SizedBox width={16} />
          </div>
          <MobileNumberInput />
          <div className='desktop'>
            <SizedBox width={16} />
          </div>
          <Button label='Get Quote' height={64} styles={{ letterSpacing: 2, fontSize: '0.875rem', fontWeight: 600, padding: '0 14px' }} />
        </QuoteForm>
      </QuoteContainer>
    </JumbotronContent>
  </JumbotronContainer>
}
