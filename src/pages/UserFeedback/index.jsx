import React from "react";
import * as Style from './style';

import PhotoUser from '../../assets/PhotoUser.png';

export const UserFeedback = () => {
    return(
        <Style.ContainerUserFeedback>
            <Style.Image src={PhotoUser} alt={''} />
            
            <Style.ContainerDescriptionUser>
                <p>We love using 'PETWORLD' products.  Environmentally friendly and sustainable. 
                We have the sustainable dog bowls and regularly use the mint scented poo bags which were all such great value for money.</p>
                <p>Dylan Shaw</p>
            </Style.ContainerDescriptionUser>

        </Style.ContainerUserFeedback>
    )
}