import React from "react";
import styled from 'styled-components';

export const BoxButton = styled.div`
    display: inline-block;
    border-radius: 10px;
    padding: 11px 0px;
    width: 100%;
    max-width: ${props => props.maxWidth || '0%'};
    text-align: center;
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    color: ${ props => props.fontColor || 'black' };
    background: ${ props => props.backColor || 'white' };
    cursor: pointer;
`;