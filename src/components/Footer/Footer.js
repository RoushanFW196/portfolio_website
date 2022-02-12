

import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import {FaSearchLocation} from 'react-icons/fa';
import { SocialIcons} from '../Header/HeaderStyles';
import { SectionTitle } from '../../styles/GlobalComponents';
import {Loction,Flexdiv,LinkImg, CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper id='contact'>
      <SectionTitle>Contact </SectionTitle>
      <LinkList>
        <LinkColumn>
        <Flexdiv>
          <LinkTitle>Phone</LinkTitle>
        <LinkImg src='data:image/png;base64,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'></LinkImg>
          </Flexdiv>
          <LinkItem href="tel:+91 8949975939"><p>+91 7488017925</p> </LinkItem>
        </LinkColumn>


        <LinkColumn>
        <Flexdiv>
          <LinkTitle>Email</LinkTitle>
          <LinkImg src='data:image/png;base64,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'></LinkImg>
          </Flexdiv>
          <LinkItem href="mailto:roushankumar6338@gmail.com" target="_blank">
         <p>roushankumar6338@gmail.com</p> 
          </LinkItem>
        </LinkColumn>

       
        <LinkColumn>
        <Flexdiv>
          <LinkTitle>Github</LinkTitle>
          <LinkImg src='https://mpng.subpng.com/20180326/gxq/kisspng-github-computer-icons-icon-design-github-5ab8a31e334e73.4114704215220498222102.jpg'></LinkImg>
          </Flexdiv>
          <LinkItem href="https://github.com/RoushanFW196" target="_blank">
         <p>RoushanFW196</p> 
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
        </CompanyContainer>
        <SocialContainer>
         

          <SocialIcons href="https://www.linkedin.com/in/roushankumar63/">
             <AiFillLinkedin size="3rem" />
           </SocialIcons>
           <SocialIcons href="https://twitter.com/ROUSHAN58200556">
             <AiFillTwitterSquare size="3rem" />
           </SocialIcons>


        </SocialContainer>
      </SocialIconsContainer>
     
    
      <Slogan>Developed by Roushan & Reference:Tutorial created by Enyel Sequeira, taught by JavaScript Mastery</Slogan>
    </FooterWrapper>
  )
  
};

export default Footer;













