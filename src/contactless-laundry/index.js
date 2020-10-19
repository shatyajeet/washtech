import React, { useRef, useState, useEffect } from 'react'

import { ContactlessLaundryContainer, ContactlessLaundryContent, ProgressBar, VideoContainer, VideoPlayerControls } from './style'
import { ContentHeading, ContentDescription, SizedBox } from '../components/style'
import playIcon from '../images/play.svg'
import pauseIcon from '../images/pause.svg'

export default function ContactlessLaundry () {
  const videoItem = useRef()
  const [videoPlaying, setVideoPlaying] = useState(false)
  const [playerActive, setPlayerActive] = useState(false)
  const [duration, setDuration] = useState(0)
  const [progress, setProgress] = useState(0)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (videoItem.current) {
      attachEventListeners()
      const width = document.getElementById('video-container').getBoundingClientRect().width
      setWidth(width)
    }

    return () => removeEventListeners()
  }, [attachEventListeners, removeEventListeners])

  function playVideo () {
    videoItem.current.play()
    setVideoPlaying(true)
    setPlayerActive(true)
  }

  function pauseVideo () {
    videoItem.current.pause()
    setVideoPlaying(false)
  }

  function attachEventListeners () {
    videoItem.current.addEventListener('loadedmetadata', handleVideoLoaded)
    videoItem.current.addEventListener('timeupdate', handleVideoProgress)
    videoItem.current.addEventListener('ended', handleVideoEnded)
  }

  function removeEventListeners () {
    videoItem.current.removeEventListener('loadedmetadata', handleVideoLoaded)
    videoItem.current.removeEventListener('timeupdate', handleVideoProgress)
    videoItem.current.removeEventListener('ended', handleVideoEnded)
  }

  function handleVideoLoaded () {
    setDuration(parseInt(videoItem.current.duration))
  }

  function handleVideoProgress () {
    setProgress(parseInt(videoItem.current.currentTime))
  }

  function handleVideoEnded () {
    setVideoPlaying(false)
    setPlayerActive(false)
  }

  function handleProgressClick (e) {
    console.log(e.nativeEvent)
  }

  function formatTime (time) {
    const minutes = parseInt(time / 60)
    const seconds = time % 60
    return minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0')
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
      <VideoContainer id='video-container'>
        <video ref={videoItem}>
          <source src='https://res.cloudinary.com/dhahnivds/video/upload/f_auto/v1600419304/WashTech/Washtech.mp4' />
        </video>
        {!videoPlaying && <img src={playIcon} alt='play' onClick={playVideo} />}
        {videoPlaying && <img className='pause-icon' src={pauseIcon} alt='pause' onClick={pauseVideo} />}
        <VideoPlayerControls className={`player-controls${playerActive ? ' active' : ''}`}>
          <div className='slider' onClick={handleProgressClick}>
            <ProgressBar className='progress-bar' progress={progress * 100 / duration} />
          </div>
          <div className='progress'>{formatTime(progress)} / {formatTime(duration)}</div>
        </VideoPlayerControls>
      </VideoContainer>
    </ContactlessLaundryContent>
  </ContactlessLaundryContainer>
}
