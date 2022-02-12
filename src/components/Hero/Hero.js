import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>

      <LeftSection>
        <SectionTitle main center>
        <img src="./images/profile.png" style={{width:"100px"},{borderRadius:"50%"}}/><br/>
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
          window.open("https://drive.google.com/file/d/1Soc9Tc8Vzm7wdoszPhbggAiMIz8tdJZ_/view?usp=sharing")
          
        }}>Resume</Button>

      </LeftSection>
    </Section>
  </>
);

export default Hero;