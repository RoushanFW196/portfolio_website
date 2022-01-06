import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>

      <LeftSection>
        <SectionTitle main center>
        <img src="./images/profile.jpg" style={{width:"200px"},{borderRadius:"50%"}}/><br/>
          Hi There, I'm Roushan<br/>
          Welcome To <br />
          My Personal Portfolio.
        </SectionTitle>
        <SectionText>
          I'm Full Stack Web Developer.
        </SectionText>
        <Button onClick={props.handleClick}>View More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;