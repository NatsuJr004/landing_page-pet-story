import React from "react";
import * as Style from './style';

import Illustration from '../../assets/img_features/Illustration.png';

export const CardFeature = (props) => {
    return(
        <Style.ContainerCard>
            <Style.IconCard src={props.imgUrl} alt={props.imgAlt} />
            <Style.TitleCard>Best quality per food</Style.TitleCard>
            <Style.DescriptionCard>Super delicious food. Available in a range of delicious flavors.</Style.DescriptionCard>
        </Style.ContainerCard>
    )
}