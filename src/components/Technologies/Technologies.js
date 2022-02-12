import React from 'react';
import { DiCss3, DiFirebase, DiGit, DiHtml5, DiJavascript, DiMongodb, DiNodejs, DiNpm, DiReact, DiZend } from 'react-icons/di';
import {SiNetlify, SiPostman, SiRedux,SiExpress} from "react-icons/si";
import {DiHeroku,DiGithubBadge} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
      From Back-end To Design
    </SectionText>
    <List>
      <ListItem>
      
        <ListContainer>
          <ListTitle>Front-End </ListTitle>

          <ListParagraph>
          Experince with<br/>
        
        <picture>
        
        <DiReact size="3rem" />  React.js<br/>
       <SiRedux size="3.6rem" /> Redux<br />
          <DiHtml5 size="3rem" /> HTML <br/>
          <DiCss3 size="3rem" /> CSS<br/>
          <DiJavascript size="3rem" /> JavaScript<br/>
        </picture>
           
         
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        {/* <picture>
          <DiFirebase size="3rem" />
        </picture> */}
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            {/* Node and Databases <br/> */}

            <picture>
            <DiFirebase size="3.6rem" /> Databases<br/>
        <DiMongodb size="3.6rem" /> MongoDb<br/>
          {/* <Di Mongoose size="3rem" /> Mongoose<br/> <br/> */}
        
          <DiNodejs size="3.6rem" />Nodejs<br/>
        </picture>



          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
       
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>
            Experience with tools like<br />
       

            <picture>
            <DiNpm size="3.6rem" /> Npm<br/>
         <SiPostman size="3.6rem" /> Postman<br/> 
          {/* <Di Mongoose size="3rem" /> Mongoose<br/> <br/> */}
          {/* <Di size="3rem" />Expressjs<br/> */}
          {/* <DiNodejs size="3rem" />Nodejs<br/> */}
        </picture>

          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>


    <List>
      <ListItem>
        
        <ListContainer>
          <ListTitle>Hosting Platform</ListTitle>
          <ListParagraph>
          <picture> <DiHeroku size="3.6rem" /></picture> Heroku <br />
            <picture> <DiGithubBadge size="3.6rem" /></picture> Github <br />
            <picture> <SiNetlify size="3.6rem" /></picture> Netlify <br />
         
             

          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>

        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph> 
          <picture> <DiMongodb size="3.6rem" /></picture>MongoDB <br />
             
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        {/* <picture>
          <DiZend size="3.6rem" />
        </picture> */}
        <ListContainer>
          <ListTitle>Version Control</ListTitle>
          <ListParagraph>
          <picture> <DiGit size="3.6rem" /></picture>Git <br />
             <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>




    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
