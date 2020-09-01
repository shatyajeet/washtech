import React from 'react'

import { DashboardContainer, DashboardContent, MainContent, TextContent, ImageContent, List, ListItem } from './style'
import { ContentHeading, SizedBox, ContentDescription } from '../components/style'
import corporateDashboardImage from '../images/corporate-dashboard/dashboard.jpg'
import checkIcon from '../images/check.svg'

export default function Dashboard () {
  return <DashboardContainer>
    <DashboardContent>
      <ContentHeading>Corporate Dashboard</ContentHeading>
      <SizedBox height={8} />
      <MainContent>
        <TextContent>
          <ContentDescription>
            You will have access to a digital dashboard that gives an overview of your business laundry consumption
            by days, units, and by each site. This will enable you to understand and make better decisions with regards
            to your laundry operations.
          </ContentDescription>
          <SizedBox height={20} />
          <List>
            <ListItem><img src={checkIcon} alt='check' height={32} /><SizedBox width={16} />Historical Laundry Data</ListItem>
            <ListItem><img src={checkIcon} alt='check' height={32} /><SizedBox width={16} />Site wise analysis</ListItem>
            <ListItem><img src={checkIcon} alt='check' height={32} /><SizedBox width={16} />Raw data export of your laundry operations</ListItem>
            <ListItem><img src={checkIcon} alt='check' height={32} /><SizedBox width={16} />Digital invoice and payment processing</ListItem>
          </List>
        </TextContent>
        <ImageContent>
          <img src={corporateDashboardImage} alt='corporate dashboard' />
        </ImageContent>
      </MainContent>
    </DashboardContent>
  </DashboardContainer>
}
