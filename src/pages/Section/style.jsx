import React from "react";
import styled from 'styled-components';

export const Section = styled.section`
    max-width: 1440px;
    margin: auto;
    padding: 100px;
    background: ${props => props? props.BackgrundSection : 'transparent'};
    text-align: center;

    h1{
        font-size: 50px;
        font-family: 'Poppins', sans-serif;
    }

    p{
        font-size: 18px;
        font-family: 'Poppins', sans-serif;
        color: var(--text-color);
    }

    .btn{
        margin-top: 40px;
        margin-bottom: 60px;
    }

    @media screen and (max-width: 500px) {
        padding: 80px 25px;
    }

    @media screen and (max-width: 1200px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media screen and (min-width: 750px) {
        display: flex;
        justify-content: space-between;
    }
`;

export const BoxMain = styled.div`
    max-width: 460px;
`;

export const Image = styled.img`
    width: 100%;
    max-width: 500px;
    object-fit: cover;

    @media screen and (max-width: 1200px) {
        width: 100%;
        max-width: 47.8rem;
    }
`;