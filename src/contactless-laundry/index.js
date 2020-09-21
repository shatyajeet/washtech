import React, { useRef, useState, useEffect } from 'react'

import { ContactlessLaundryContainer, ContactlessLaundryContent, VideoContainer } from './style'
import { ContentHeading, ContentDescription, SizedBox } from '../components/style'
import playIcon from '../images/play.svg'
import pauseIcon from '../images/pause.svg'

export default function ContactlessLaundry () {
  const videoItem = useRef()
  const [videoPlaying, setVideoPlaying] = useState(false)

  useEffect(() => {
    if (videoItem.current) {
      attachEventListeners()
    }

    return () => removeEventListeners()
  })

  function playVideo () {
    videoItem.current.play()
    setVideoPlaying(true)
  }

  function pauseVideo () {
    videoItem.current.pause()
    setVideoPlaying(false)
  }

  function attachEventListeners () {
    videoItem.current.addEventListener('ended', handleVideoEnded)
  }

  function removeEventListeners () {
    videoItem.current.removeEventListener('ended', handleVideoEnded)
  }

  function handleVideoEnded () {
    setVideoPlaying(false)
  }

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
      <VideoContainer>
        <video ref={videoItem}>
          <source src='https://res.cloudinary.com/dhahnivds/video/upload/f_auto/v1600419304/WashTech/Washtech.mp4' />
        </video>
        {!videoPlaying && <img src={playIcon} alt='play' onClick={playVideo} />}
        {videoPlaying && <img className='pause-icon' src={pauseIcon} alt='pause' onClick={pauseVideo} />}
      </VideoContainer>
    </ContactlessLaundryContent>
  </ContactlessLaundryContainer>
}
