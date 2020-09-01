import React, { useState } from 'react'

import { SectionContainer, SectionContent, HeadContent, MainContent, ItemContent, SelectedContent, Item, ItemLabel, ItemIcon, SelectedItemHeading, SelectedContentImageContainer, SelectedItemDescription } from './style'
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
            <ItemLabel selected={activeItem.label === item.label}>{item.label}</ItemLabel>
          </Item>)}
        </ItemContent>
        <SizedBox width={48} />
        <SelectedContent>
          <SelectedContentImageContainer>
            <img src={activeItem.image} alt={activeItem.label} width={'70%'} />
          </SelectedContentImageContainer>
          <SizedBox height={40} />
          <SelectedItemHeading>{activeItem.label}</SelectedItemHeading>
          <SizedBox height={8} />
          <SelectedItemDescription>{activeItem.description}</SelectedItemDescription>
        </SelectedContent>
      </MainContent>
    </SectionContent>
  </SectionContainer>
}
