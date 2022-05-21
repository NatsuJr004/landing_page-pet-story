import React from "react";
import Amazon from '../../assets/Amazon.png';
import Apple from '../../assets/Apple.png';
import Beco from '../../assets/Beco.png';
import Google from '../../assets/Google.png';
import Nestle from '../../assets/Nestle.png';
import Walmart from '../../assets/Walmart.png';

import * as Style from './style'

export const Patrocinios = () => {
    return (
        <Style.ContainerGeral>
            <Style.BoxImage>
                <Style.Image src={Nestle} />
            </Style.BoxImage>

            <Style.BoxImage>
                <Style.Image src={Apple} />
            </Style.BoxImage>

            <Style.BoxImage>
                <Style.Image src={Beco} />
            </Style.BoxImage>
            
            <Style.BoxImage>
                <Style.Image src={Amazon} />
            </Style.BoxImage>
            
            <Style.BoxImage>
                <Style.Image src={Google} />
            </Style.BoxImage>

            <Style.BoxImage>
                <Style.Image src={Walmart} />
            </Style.BoxImage>
        </Style.ContainerGeral>
    )
}