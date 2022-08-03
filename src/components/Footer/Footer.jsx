import React from "react";
import { BsFacebook, BsGithub, BsLinkedin,BsSpotify } from "react-icons/bs";

export default function Footer(){
    return(
        <div className="footer-links">
            <div className="footer-container">
                <div className="social">
                <h4>Follow us</h4>
                    <ul>
                        <li>
                            <BsFacebook size="3em"/>
                        </li>
                        <li>
                            <BsGithub size="3em"/>
                        </li>
                        <li>

                            <BsLinkedin size="3em"/>
                        </li>
                        <li>
                            <BsSpotify size="3em"/>
                        </li>
                    </ul>
                </div>
                <div className="creadores">
                    <h4>Creadores</h4>
                    <ul>
                        <li>
                            <h5>Lechu</h5>
                        </li>
                        <li>
                            <h5>Ale</h5>
                        </li>
                        <li>
                            <h5>Cris</h5>
                        </li>
                        <li>
                            <h5>CrisX2</h5>
                        </li>
                        <li>
                            <h5>Nacho</h5>
                        </li>
                        <li>
                            <h5>Mauri</h5>
                        </li>
                        <li>
                            <h5 className="cen">Luis</h5>
                        </li>
                    </ul>
                </div>
                
                
            </div>
        </div>
    )
}
