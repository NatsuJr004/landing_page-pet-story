import React from "react";
import * as Style from './style';
import Logo from '../../assets/Logo.png';

export const LogoEmpresa = () => {
    return(
        <>
            <Style.Box>
                <Style.Icon src={Logo} alt="" />
                <Style.Title>PETWORLD</Style.Title>
            </Style.Box>
        </>
    )
}
