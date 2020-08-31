import React, { useState } from 'react'

import { SectionContainer, SectionContent, HeadContent, MainContent, ItemContent, SelectedContent, Item, ItemLabel, ItemIcon } from './style'
import { ContentLine, ContentHeading, ContentDescription, SizedBox } from '../style'

export default function Section ({ title, heading, description, backgroundColor, containerStyle, items }) {
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
      <MainContent>
        <ItemContent>
          {items.map((item, index) => <Item
            key={index}
            selected={activeItem.label === item.label}
            borderBottom={index <= parseInt(items.length / 2)}
            onClick={() => setActiveItem(item)}>
            <ItemIcon src={activeItem.label === item.label ? item.iconActive : item.icon} />
            <SizedBox height={40} />
            <ItemLabel>{item.label}</ItemLabel>
          </Item>)}
        </ItemContent>
        <SelectedContent></SelectedContent>
      </MainContent>
    </SectionContent>
  </SectionContainer>
}
