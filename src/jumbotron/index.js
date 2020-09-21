import React, { useState, useEffect } from 'react'

import { JumbotronContainer, JumbotronContent, QuoteContainer, QuoteHeading, QuoteForm } from './style'
import { ContentLine, ContentHeading, SizedBox } from '../components/style'
import Input from '../components/input'
import MobileNumberInput from '../components/mobile-number-input'
import Button from '../components/button'
import Modal from '../components/modal'

export default function Jumbotron () {
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)
  const [message, setMessage] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')

  useEffect(() => {
    setTimeout(() => {
      const quoteBox = document.getElementById('quote-box')
      const quoteBoxDimensions = quoteBox.getBoundingClientRect()
      setHeight(quoteBoxDimensions.height)
      setWidth(quoteBoxDimensions.width)
    })
  }, [])

  function handleMobileNumberChange (txt) {
    setMobile(txt)
  }

  function handleGetQuoteClick () {
    if (!name || !email || !mobile) {
      alert('Please fill all the details')
      return
    }
    const quotePayload = {
      name,
      email,
      mobile,
      countrycode: '971'
    }
    fetch('https://washtechtemp.tk/auth/addQuote', {
      method: 'POST',
      body: JSON.stringify(quotePayload),
      headers: {
        'content-type': 'application/json'
      }
    }).then(res => res.json())
      .then(res => {
        if (res.code !== 500) {
          setMessage('Prepare to get the best laundry service for your business. Our team will get back to you shortly.')
          setIsModalOpen(true)
          clearFields()
        } else {
          setMessage('Something went wrong. Please try again.')
          setIsModalOpen(true)
        }
      })
      .catch(err => console.log(err))
  }

  function clearFields () {
    setName('')
    setEmail('')
    setMobile('')
  }

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
          <Input placeholder='Your name' value={name} required onChange={txt => setName(txt)} />
          <div className='desktop'>
            <SizedBox width={16} />
          </div>
          <Input placeholder='Email' type='email' value={email} required onChange={txt => setEmail(txt)} />
          <div className='desktop'>
            <SizedBox width={16} />
          </div>
          <MobileNumberInput required onChange={handleMobileNumberChange} value={mobile} />
          <div className='desktop'>
            <SizedBox width={16} />
          </div>
          <Button
            label='Get Quote'
            height={64}
            styles={{ letterSpacing: 2, fontSize: '0.875rem', fontWeight: 600, padding: '0 14px' }}
            onClick={handleGetQuoteClick} />
        </QuoteForm>
      </QuoteContainer>
      <Modal
        text={message}
        open={isModalOpen}
        onOKClick={() => setIsModalOpen(false)} />
    </JumbotronContent>
  </JumbotronContainer>
}
