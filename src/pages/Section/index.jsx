import React from "react";
import * as Style from './style';
import { Button } from '../../components';

export const Section = (props) => {
    return (
        <Style.Section BackgrundSection={props.BackgrundSection}>
            <Style.BoxMain>
                <h1>{props.TitleSection}</h1>
                <p>{props.SubTitleSection}</p>
                <Button MaxWidth={'203px'} BackColor={'var(--yellow)'} >
                    {props.ButtonContent}
                </Button>
            </Style.BoxMain>
            <Style.Image src={props.ImageUrl} />

        </Style.Section>
    )
}