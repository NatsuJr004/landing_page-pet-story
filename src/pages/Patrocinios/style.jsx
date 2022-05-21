import React from "react";
import styled from 'styled-components';

export const ContainerGeral = styled.div`
    padding: 80px 172px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 25px;
    @media screen and (max-width: 900px ) {
        padding: 40px 36px;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const BoxImage = styled.div`
    max-width: 130px;
    max-height: 35px;
`;