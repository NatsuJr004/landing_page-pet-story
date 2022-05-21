import React from "react";
import * as Style from './style';
import { 
    LogoEmpresa,
    Button
} from '../../components/index';

export const Nav = () => {
    return(
        <Style.Nav>
            <LogoEmpresa />
            
            {/* <Button FontColor={ "red" } BackColor={ "var(--blue)" } >
                <p>Sign In</p>
            </Button> */}
            <Style.BoxBtns>
                <Button  MaxWidth={"200px"}>
                    <p>Sign Up</p>
                </Button>
                
                <Button FontColor={ "white" } BackColor={ "var(--blue)" } MaxWidth={"200px"}>
                    <p>Sign In</p>
                </Button>
            </Style.BoxBtns>

        </Style.Nav>
    )
}
