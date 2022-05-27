import React from 'react'
import { FooterContainer,FooterLink,FooterLinkContainer,FooterLinkItems,FooterLinkTitle,FooterLinksWrapper,FooterWrap } from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinkContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='/signin' >How it works</FooterLink>
                            <FooterLink to='/signin' >Testimonial</FooterLink>
                            <FooterLink to='/signin' >Careers</FooterLink>
                            <FooterLink to='/signin' >Investors</FooterLink>
                            <FooterLink to='/signin' >Terms of Services</FooterLink>
                        
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinkContainer>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer