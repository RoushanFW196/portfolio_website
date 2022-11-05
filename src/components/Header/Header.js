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
          <NavLink>Skills</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#contact">
          <NavLink>Contacts</NavLink>
        </Link>
      </li>  

    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/RoushanFW196" target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/roushankumar63/" target="_blank">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://twitter.com/ROUSHAN58200556" target="_blank">
          <AiFillTwitterSquare size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://drive.google.com/file/d/1ihFdR6W4AtwbdW_SVb8uXc6WRYF5Fvxi/view?usp=sharing" target="_blank">
          <AiOutlineCloudDownload size="3rem"/>
        </SocialIcons>
        
      </Div3>
    </Container>
);

export default Header;
