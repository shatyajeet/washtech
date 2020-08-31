import React, { useState } from 'react'

import { SectionContainer, SectionContent, HeadContent, MainContent, ItemContent, SelectedContent, Item, ItemLabel, ItemIcon, SelectedItemHeading, SelectedContentImageContainer } from './style'
import { ContentLine, ContentHeading, ContentDescription, SizedBox } from '../style'

export default function Section ({ title, heading, description, backgroundColor, containerStyle, reverse, items }) {
  const [activeItem, setActiveItem] = useState(items[0])

  return <SectionContainer backgroundColor={backgroundColor} style={containerStyle}>
    <SectionContent>
      <HeadContent>
        <ContentLine>{title}</ContentLine>
        <SizedBox height={8} />
        <ContentHeading>{heading}</ContentHeading>
        <SizedBox height={8} />
        <ContentDescription>{description}</ContentDescription>
      </HeadContent>
      <SizedBox height={40} />
      <MainContent reverse={reverse}>
        <ItemContent>
          {items.map((item, index) => <Item
            key={index}
            selected={activeItem.label === item.label}
            borderBottom={index < 4}
            onClick={() => setActiveItem(item)}>
            <ItemIcon src={activeItem.label === item.label ? item.iconActive : item.icon} />
            <SizedBox height={40} />
            <ItemLabel selected={activeItem.label === item.label}>{item.label}</ItemLabel>
          </Item>)}
        </ItemContent>
        <SelectedContent reverse={reverse}>
          <SelectedContentImageContainer>
            <img src={activeItem.image} alt={activeItem.label} />
          </SelectedContentImageContainer>
          <SizedBox height={40} />
          <SelectedItemHeading>{activeItem.label}</SelectedItemHeading>
          <SizedBox height={16} />
          <ContentDescription>{activeItem.description}</ContentDescription>
        </SelectedContent>
      </MainContent>
    </SectionContent>
  </SectionContainer>
}
