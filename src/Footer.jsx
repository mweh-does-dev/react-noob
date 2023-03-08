import React from "React";
import styled from "styled-components";
import github from './assets/github-mark.png';
import figma from './assets/figma.png';
import linkedin from './assets/linkedin.png';


const StyledFooter = styled.footer`
 display: flex;
    grid-area: footer;
    background-color: #e45e5e2a;
   
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-family: 'Playfair Display';
`;

const StyleImg = styled.img`
width: 30px;
height: 30px;


`;

const StyleSocialMedia = styled.div`
    display:flex;
    justify-content:left;
    flex-direction: row;
    gap:20px;
    `;


    const Footer = () => {
        return (
            <StyledFooter>
            <h2> Follow me on</h2>
            <StyleSocialMedia>
                <StyleImg src={github} alt="Github" className="github"/>
                <StyleImg src={figma} alt="Figma" className="Figma"/>
               <StyleImg src={linkedin} alt="LinkedIn" className="Linkedin"/>
            </StyleSocialMedia>
            <div style={{ borderTop: "2px solid #ed0000 ", marginLeft: 200, marginRight: 200 }}></div>

            <p>&copy; Mweh 2023</p>
            </StyledFooter>

        );
    }

    export default Footer;