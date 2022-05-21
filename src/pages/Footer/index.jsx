import React from "react";
import * as Style from './style';

import { LogoEmpresa } from "../../components";
import { Button } from "../../components";

import IconFacebook from '../../assets/icons_socials/Facebook.svg';
import IconInstagram from '../../assets/icons_socials/Instagram.svg';
import IconLinkedin from '../../assets/icons_socials/Linkedin.svg';
import IconTwitter from '../../assets/icons_socials/Twitter.svg';

export const Footer = () => {
    return(
        <Style.ContainerFooter>
            <Style.Container_Main>
                
                <div>
                    <LogoEmpresa/>
                    <Style.TitleInbox>Updates right to your Inbox</Style.TitleInbox>
                    
                    <Style.BoxInput>
                        <input type="text" name="Email_Address" placeholder="Email Address" />
                        <Button FontColor={ "white" } MaxWidth={'116px'} BackColor={'var(--blue)'} className="btn_send" >
                            Send
                        </Button>

                    </Style.BoxInput>

                </div>

                <Style.BoxOuthers>
                    <table>
                        <thead>
                            <tr>
                                <th>Our story</th>
                                <th>Pet care</th>
                                <th>Shop</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>FAQ</td>
                                <td>Treatments</td>
                                <td>Pet Food</td>
                            </tr>
                            <tr>
                                <td>Contact</td>
                                <td>Health</td>
                                <td>Toys</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Hygiene</td>
                                <td>Accessories</td>
                            </tr>
                        </tbody>
                    </table>
                </Style.BoxOuthers>

            </Style.Container_Main>

            <Style.Container_Licenses_Socials>
                <Style.BoxLicenses>
                    <p>&copy; PETWORLD 2022</p>
                    <p>Privacy policy</p>
                    <p>Terms of use</p>
                
                </Style.BoxLicenses>
                
                {/* Box dos icons sociais */}
                <Style.BoxSocials>
                    <img src={ IconFacebook } alt="" />
                    <img src={ IconInstagram } alt="" />
                    <img src={ IconLinkedin } alt="" />
                    <img src={ IconTwitter } alt="" />

                </Style.BoxSocials>

            </Style.Container_Licenses_Socials>

        </Style.ContainerFooter>
    )
}