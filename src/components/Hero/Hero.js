import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>

      <LeftSection>
        <SectionTitle main center>
        <img src="./images/profile.png" style={{width:"250px", height:"250px" ,borderRadius:"50%" }}/><br/>
          Hi There, I'm Roushan<br/>
          {/* Welcome To <br />
          My Personal Portfolio. */}
        </SectionTitle>
        <SectionText>
          I'm Full Stack Web Developer. Able to develop and optimize interactive,
user-friendly and feature-rich websites and looking forward to
showcasing these skills in a reputed company.
        </SectionText>
  
       <Button onClick={()=>{
          window.open("https://drive.google.com/file/d/1ihFdR6W4AtwbdW_SVb8uXc6WRYF5Fvxi/view?usp=share_link")
          
        }}>Resume</Button>

      </LeftSection>
    </Section>
  </>
);

export default Hero;