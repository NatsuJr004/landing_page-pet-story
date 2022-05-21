import React from "react";
import styled from 'styled-components';

export const ContainerCards = styled.div`
    max-width: 1440px;
    display: flex;
    justify-content: center;
    padding: 116px 90px;
    flex-wrap: wrap;
    gap: 60px;
    margin: auto;
    @media screen and (max-width: 900px) {
        padding: 80px 65px;
    }
`;