import React from 'react'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesWrapper, Servicesp } from './ServicesElements'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'

const Services = () => {
  return (
    <ServicesContainer id='services'>
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1} />
                <ServicesH2>Reduce expenses</ServicesH2>
                <Servicesp>We help reduce your fees and increase your overall revenue.</Servicesp>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2} />
                <ServicesH2>Virtual Offices</ServicesH2>
                <Servicesp>You can access our platform online anywhere in the world.</Servicesp>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3} />
                <ServicesH2>Premium Benifits</ServicesH2>
                <Servicesp>Unlock our special membership card that returns 5% cash back.</Servicesp>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services