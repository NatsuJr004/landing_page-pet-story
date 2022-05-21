import React from "react";
import styled from 'styled-components';

export const ContainerFooter = styled.footer`
    padding: 70px 80px;

    @media screen and (max-width: 900px) {
        padding: 40px 20px;
    }
`;

export const Container_Main = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 1000px){
        flex-direction: column;
        gap: 40px;
    }
`;

export const Container_Licenses_Socials = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 33px 0px 0px 0px;

    @media screen and (max-width: 768px){
        flex-direction: column;
        gap: 40px;
    }
`;

export const TitleInbox = styled.p`
    font-size: 18px;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
    margin: 75px 0px 0px 0px;

    @media screen and (max-width: 768px){
        margin: 40px 0px 0px 0px;
    }
`;

export const BoxInput = styled.span`
    margin: 12px 0px 0px 0px;
    display: flex;
    gap: 20px;

    input{
        width: 300px;
        padding: 10px 20px;
        border: 1px solid var(--gray);
        border-radius: 10px;
        font-size: 18px;
        font-weight: 400;
        font-family: 'Poppins', sans-serif;
    }

    input::placeholder{
        font-size: 18px;
        font-weight: 400;
        font-family: 'Poppins', sans-serif;
    }

    @media screen and (max-width: 768px){
     flex-direction: column;
    }
`;

export const BoxOuthers = styled.div`
    font-family: 'Poppins', sans-serif;
    font-size: 18px;

    td{
        min-width: 120px;
    }

    th{
        min-width: 120px;
        text-align: start;
    }

    table{
        display: flex;
        flex-direction: column;
    }
    
    thead > tr {
        display: flex;
        gap: 60px;
    }

    tbody {
        display: flex;
        flex-direction: column;
    }

    tbody > tr {
        display: flex;
        gap: 60px;
        margin: 8px 0px;
    }

    table > tr {
        display: flex;
        gap: 60px;
    }

    table > tr:nth-child(1){
        font-weight: 500;
    }
    
    @media screen and (max-width: 768px){
        table > tbody{
            display: none;
        }
        
        table > thead > tr{
            flex-direction: column;
            gap: 20px;
        }
    }
`;

export const BoxLicenses = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;

    p{
        font-family: 'Poppins', sans-serif;
        font-size: 18px;
        font-weight: 600;
    }

    @media screen and (max-width: 768px){
        flex-direction: column;
        gap: 20px;
    }
`;

export const BoxSocials = styled.div`
    display: flex;
    gap: 20px;

    img{
        max-width: 30px;
        max-height: 30px;
        object-fit: cover;
    }
`;
