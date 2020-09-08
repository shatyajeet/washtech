import React from 'react'
import { ContactlessLaundryContainer, ContactlessLaundryContent } from './style'
import { ContentHeading, ContentDescription, SizedBox } from '../components/style'

export default function ContactlessLaundry () {
  return <ContactlessLaundryContainer>
    <ContactlessLaundryContent>
      <ContentHeading>Our Contactless Laundry Process</ContentHeading>
      <SizedBox height={8} />
      <ContentDescription>
        We use technology and years of premium laundry service experience so that you can focus more
        on your core business and let us take care of your laundry operations and you can track all of
        it with the online dashboard
      </ContentDescription>
      <SizedBox height={24} />
    </ContactlessLaundryContent>
  </ContactlessLaundryContainer>
}
