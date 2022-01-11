import Link from 'next/link';
import React from 'react';
import { AiOutlineCloudDownload, AiFillGithub, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>Roushan</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#contact">
          <NavLink>Contact me</NavLink>
        </Link>
      </li>  

    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/RoushanFW196">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/roushankumar63/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://twitter.com/ROUSHAN58200556">
          <AiFillTwitterSquare size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://drive.google.com/file/d/1Soc9Tc8Vzm7wdoszPhbggAiMIz8tdJZ_/view?usp=sharing">
          <AiOutlineCloudDownload size="3rem"/>
        </SocialIcons>
        
      </Div3>
    </Container>
);

export default Header;
