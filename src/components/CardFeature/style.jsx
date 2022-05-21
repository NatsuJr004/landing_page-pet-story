import React from "react";
import styled from 'styled-components';

export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 230px;
`;

export const IconCard = styled.img`
    max-width: 85px;
    max-width: 85px;
    margin: 0px 0px 40px 0px;
`;

export const TitleCard = styled.p`
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 18px;
    margin: 0px 0px 15px 0px;
`;

export const DescriptionCard = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: var(--text-color);
`;
