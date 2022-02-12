import React from 'react';
import { DiCss3, DiFirebase, DiGit, DiHtml5, DiJavascript, DiMongodb, DiNodejs, DiNpm, DiReact, DiZend } from 'react-icons/di';
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
        {/* <picture>
          <DiReact size="3rem" />
        </picture> */}
        <ListContainer>
          <ListTitle>Front-End </ListTitle>

          <ListParagraph>
          Experince with<br/>
        
        <picture>
        
        <DiReact size="3rem" />  React.js<br/>
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
            <DiFirebase size="3rem" /> Databases<br/>
        <DiMongodb size="3rem" />MongoDb<br/>
          {/* <Di Mongoose size="3rem" /> Mongoose<br/> <br/> */}
          {/* <Di size="3rem" />Expressjs<br/> */}
          <DiNodejs size="3rem" />Nodejs<br/>
        </picture>



          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>
            Experience with tools like<br />
       

            <picture>
            <DiNpm size="3rem" />Npm<br/>
        {/* <Dij size="3rem" />MongoDb<br/> */}
          {/* <Di Mongoose size="3rem" /> Mongoose<br/> <br/> */}
          {/* <Di size="3rem" />Expressjs<br/> */}
          {/* <DiNodejs size="3rem" />Nodejs<br/> */}
        </picture>

          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
