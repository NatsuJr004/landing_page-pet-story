import React from "react";
import { CardFeature } from "../../components";
import Illustration from '../../assets/img_features/Illustration.png';
import Medical from '../../assets/img_features/Medical.png';
import Pet_Icon from '../../assets/img_features/Pet_Icon.png';
import Tesoura from '../../assets/img_features/Tesoura.png';


import * as Style from './style';

export const Features = () => {

    return(
        <Style.ContainerCards>
            <CardFeature imgUrl={Illustration} imgAlt={''} />
            <CardFeature imgUrl={Medical} imgAlt={''} />
            <CardFeature imgUrl={Pet_Icon} imgAlt={''} />
            <CardFeature imgUrl={Tesoura} imgAlt={''} />

        </Style.ContainerCards>
    )
}