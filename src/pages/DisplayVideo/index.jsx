import React from "react";
import * as Style from './style';

import mov_bbb from '../../assets/mov_bbb.mp4';

export const DisplayVideo = () => {
    return(
        <Style.ContainerDisplay>
            <Style.Video src={mov_bbb} controls >
                Your browser does not support the video tag.
            </Style.Video>
        </Style.ContainerDisplay>
    )
}