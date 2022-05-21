import React from "react";
import * as Style from './style';

export const Button = (props) => {
    return(
        <Style.BoxButton className='btn' fontColor={props?.FontColor} backColor={props?.BackColor} maxWidth={props?.MaxWidth} >
            {props.children}
        </Style.BoxButton>
    )
}