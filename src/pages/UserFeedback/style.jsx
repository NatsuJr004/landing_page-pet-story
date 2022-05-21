import React from "react";
import styled from 'styled-components';
import DescriptionUserIcon from '../../assets/DescriptionUserIcon.png';

export const ContainerUserFeedback = styled.section`
    background: var(--ligth-purple);
    max-width: 1440px;
    display: flex;
    justify-content: center;
    padding: 50px 224px;
    gap: 60px;
    @media screen and (max-width: 900px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Image = styled.img`
    max-width: 353px;
    max-height: 400px;
    border: 2px solid var(--gray);
    border-radius: 50%;
    object-fit: cover;
    @media screen and (max-width: 900px) {
        max-width: 260px;
        max-height: 294px;
    }
`;

export const ContainerDescriptionUser = styled.div`
    min-width: 265px;
    max-width: 418px;
    position: relative;
    
    &::before{
        position: absolute;
        content: '';
        background-image: url(${DescriptionUserIcon});
        /* background: red; */
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        width: 60px;
        height: 45px;
    }
    
    p:first-child{
        font-family: 'Poppins', sans-serif;
        font-size: 18px;
        font-weight: 600;
        margin-top: 65px;
    }

    p:nth-child(2){
        color: var(--text-color);
        font-size: 18px;
        font-weight: 400;
        font-family: 'Poppins', sans-serif;
        margin-top: 40px;
    }
`;