import React from 'react'
import styled from 'styled-components';
import SliderComp from './Slider';
import { Zoom } from 'react-awesome-reveal';

const Projects = () => {
  return (
    <Container id='project'>
        <Zoom>
            <h1>Recent <span className="green">Projects</span></h1>
            <p>I implemented components and utilized React virtual DOM for efficiant
                rendering and l used react router for client-side routing and navigation.
                 l utilized JavaScript libraries and framework to enhance the functionality and
                 user experience,l implemented responsive and mobile-friend designs using CSS meadia
                 queries.
                
</p>
        </Zoom>
        <Slide>
            <SliderComp/>
        </Slide>
    </Container>
  )
}

export default Projects;

const Container = styled.div`
    width: 80%;
    height:80vh;
    margin: 0 auto;
    padding: 3rem 0;
    text-align: center;
    position: relative;
  background:#2B304E;

    @media(max-width: 840px){
        width: 90%;
        height:120vh;
    }
    @media(max-width: 768px){
        height:80vh;
    }
    @media(max-width: 1024px){
        height:70vh;
    }
    h1{
        font-size: 1.9rem;
        @media(max-width: 768px){
        padding-top:80px;
    }
        @media(max-width: 1024px){
        padding-top:120px;
        font-size:35px;
    }

    }

    p{
        width: 28rem;
        margin: 0 auto;
        padding: 1rem 0;
        font-size: 0.9rem;
        line-height:20px;
        @media(max-width : 500px){
            width: 90%;
        }
        @media (max-width: 840px) {
           font-size:17px;
  }
        @media (max-width: 768px) {
           font-size:20px;
           line-height:30px;
  }
        @media (max-width: 1024px) {
           font-size:25px;
           line-height:30px;
  }
        
    }
    
`

const Slide = styled.div``