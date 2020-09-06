import React, { useState, useEffect } from 'react'

import { SectionContainer, SectionContent, HeadContent, MainContent, ItemContent, SelectedContent, Item, ItemLabel, ItemIcon, SelectedItemHeading, SelectedContentImageContainer, SelectedItemDescription } from './style'
import { ContentLine, ContentHeading, ContentDescription, SizedBox } from '../style'

export default function Section ({ id, title, heading, description, backgroundColor, containerStyle, reverse, items }) {
  const [activeItem, setActiveItem] = useState(items[0])

  useEffect(() => {
    const interval = setInterval(() => {
      const currentItemIndex = items.indexOf(activeItem)
      let nextItemIndex = currentItemIndex + 1
      if (currentItemIndex === items.length - 1) {
        nextItemIndex = 0
      }
      setActiveItem(items[nextItemIndex])
    }, 5000)

    return () => clearInterval(interval)
  })

  return <SectionContainer id={id} backgroundColor={backgroundColor} style={containerStyle}>
    <SectionContent>
      <HeadContent>
        <ContentLine>{title}</ContentLine>
        <SizedBox height={8} />
        <ContentHeading>{heading}</ContentHeading>
        <SizedBox height={8} />
        <ContentDescription>{description}</ContentDescription>
      </HeadContent>
      <div className='desktop'>
        <SizedBox height={40} />
      </div>
      <div className='mob'>
        <SizedBox height={24} />
      </div>
      <MainContent reverse={reverse}>
        {items.map((item, index) => <link key={index} rel='preload' as='image' href={item.image} />)}
        <ItemContent>
          {items.map((item, index) => <Item
            key={index}
            selected={activeItem.label === item.label}
            borderBottom={index < 4}
            onClick={() => setActiveItem(item)}>
            <ItemIcon src={activeItem.label === item.label ? item.iconActive : item.icon} />
            <div className='desktop'>
              <ItemLabel selected={activeItem.label === item.label}>{item.label}</ItemLabel>
            </div>
          </Item>)}
        </ItemContent>
        <SizedBox width={48} />
        <SelectedContent>
          <div className='mob'>
            <SelectedItemHeading>{activeItem.label}</SelectedItemHeading>
            <SizedBox height={8} />
            <SelectedItemDescription>{activeItem.description}</SelectedItemDescription>
          </div>
          <SelectedContentImageContainer>
            <img src={activeItem.image} alt={activeItem.label} width={'70%'} />
          </SelectedContentImageContainer>
          <div className='desktop'>
            <SizedBox height={40} />
            <SelectedItemHeading>{activeItem.label}</SelectedItemHeading>
            <SizedBox height={8} />
            <SelectedItemDescription>{activeItem.description}</SelectedItemDescription>
          </div>
        </SelectedContent>
      </MainContent>
    </SectionContent>
  </SectionContainer>
}
