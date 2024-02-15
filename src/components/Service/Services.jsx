import React from "react";
import { MdDesignServices } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          About <span className="green">Samantha Chaniwa</span>
        </h4>
      </Slide>
      <Slide>
        <Paragraph>
        
        <p> l chose to venture into Front-End Development 
            because l am passionate about it and l fell deeply 
            in love in creating responsive website.My constant goal
            is for the user to have good experience with  my websites,
            be it  on mobile app,ipad and on large screens.<br></br>

            l have managed to do some passion projects which are responsive
            and user freindly l was using HTML,CSS,JavaScript,React libraries.
            And am willing to learn new languages.
        </p>
        <img src="./images/WhatsApp_Image_2024-01-28_at_22.01.07-removebg-preview.png"/>
        </Paragraph>
        
      </Slide>
    
    </Container>
  );
};

export default Services;


const Container = styled.div`
  width: 80%;
  height: 130vh;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
    height:200vh;
  }
  @media (max-width: 320px) {
    width: 90%;
    height:198vh;
  }
  @media (max-width: 768px) {
    width: 90%;
    height:90vh;
  }
  @media (max-width: 1024px) {
    width: 90%;
    height:80vh;
  }

 h4{
  font-size: 50px;
  margin-top:100px;
  @media (max-width: 840px) {
    font-size:20px;
    margin-top:5px;
  }
  @media (max-width: 768px) {
    font-size:30px;
    margin-top:25px;
  }
 }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;

`;

const Paragraph = styled.div`
display: flex;
@media (max-width: 840px) {
    display:unset;
  }
@media (max-width: 768px) {
    display:grid;
  }
p{
  padding-top:100px;
  width:60%;
  font-size:25px;
  line-height:42px;
  @media (max-width: 840px) {
         width:100%;
         font-size:18px;
         padding-top:30px;
  }
  @media (max-width: 768px) {
         width:40%;
         font-size:18px;
         padding-top:70px;
  }
}
img{
  margin-top:-200px;
  width:50%;
  position:absolute;
  margin-left:600px;
  filter: drop-shadow(0px 10px 10px  white);
    &:hover {
      filter: drop-shadow(0px 10px 10px cyan);
    }
    @media (max-width: 840px) {
    margin-left:7px;
    margin-top:-10px;
    width:80%;
  }
    @media (max-width: 768px) {
    margin-left:150px;
    margin-top:-10px;
    width:80%;
  }
    @media (max-width: 1024px) {
    margin-left:440px;
    margin-top:-10px;
    width:55%;
  }
}
`