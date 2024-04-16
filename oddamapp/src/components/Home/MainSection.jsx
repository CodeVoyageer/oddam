import React, { useState, useEffect } from "react";
import "../../scss/HomeStyle/mainSection.scss";

import HeroImage from "../../assets/Home-Hero-Image.jpg";
import Decoration from "../../assets/Decoration.svg";
import { Link as RouterLink } from "react-router-dom";
import { supabase } from "../../supabase";
import Navigation from "./Navigation";

const MainSection = () => {
  const [user, setUser] = useState(null);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data: user, error } = await supabase.auth.getUser();
        if (error) {
          throw error;
        }
        setUser(user);
        console.log(user);
        setIsLoggedIn(true);
      } catch (error) {
        console.error("Błąd podczas pobierania użytkownika:", error.message);
      }
    };

    fetchUser();
  }, [setUser]);

  return (
    <>
      <section className="homeSectionContainer">
        <div className="homeSectionContainer_image">
          <img src={HeroImage} alt="losowe rzeczy" />
        </div>
        <div>
          <Navigation />
          <div className="firstSection-heading-container">
            <h1 className="firstSection-heading">
              Zacznij pomagać <br /> Oddaj niechciane rzeczy w zaufane ręce
            </h1>
            <img
              className="firstSection-heading-container_img"
              src={Decoration}
              alt="decoration"
            />
            <div className="firstSection-buttons">
              <RouterLink to={isLoggedIn ? "/logedSection" : "/logowanie"}>
                <button className="first-btn">Oddaj rzeczy</button>
              </RouterLink>
              <RouterLink to={isLoggedIn ? "/logedSection" : "/logowanie"}>
                <button className="first-btn">Zorganizuj zbiórkę</button>
              </RouterLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSection;
