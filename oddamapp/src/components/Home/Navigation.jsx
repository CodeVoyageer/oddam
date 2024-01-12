import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
const Navigation = () =>{
return(
    <>
  <section>
  <div>
            <div className="login-container">
              <RouterLink to="/logowanie">
                <button className="login-button">Zaloguj</button>
              </RouterLink>
              <RouterLink to="/rejestracja">
                <button className="register-button">Załóż konto</button>
              </RouterLink>
            </div>
            <nav className="navigation-container">
              <ul className="navigation-list">
                <li className="navigation-list_element">Start</li>

                <li className="navigation-list_element">
                  <ScrollLink
                    to="steps"
                    spy={true}
                    smooth={true}
                    offset={10}
                    duration={500}
                  >
                    O co chodzi?
                  </ScrollLink>
                </li>

                <li className="navigation-list_element">
                  <ScrollLink
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    O nas
                  </ScrollLink>
                </li>
                <li className="navigation-list_element"><ScrollLink
                    to="whoWeHelp"
                    spy={true}
                    smooth={true}
                    offset={15}
                    duration={500}
                    >
                  Fundacja i organizacje
                  </ScrollLink>
                </li>
                <li className="navigation-list_element"><ScrollLink
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={100}
                    duration={500}
                  >Kontakt</ScrollLink></li>
              </ul>
            </nav>
          </div>
    </section>  
    </>
);
}

export default Navigation;