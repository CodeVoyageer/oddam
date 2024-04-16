import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, Link as RouterLink } from "react-router-dom";
import "../../scss/HomeStyle/navigation.scss";
import { supabase } from "../../supabase";
const Navigation = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user);
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <>
      <section className="nav-section">
        <div className="login-container">
          {user ? (
            <>
              <p>Cześć {user.email}</p>
              <RouterLink to={"/LogedSection"}>
                <button className="nav-log-btn">Oddaj rzeczy</button>
              </RouterLink>
              <RouterLink to={"/LogOut"}>
                <button onClick={handleLogout} className="logOut-btn">
                  Wyloguj się
                </button>
              </RouterLink>
            </>
          ) : (
            <>
              <RouterLink to="/logowanie">
                <button className="login-button">Zaloguj</button>
              </RouterLink>
              <RouterLink to="/registration">
                <button className="register-button">Załóż konto</button>
              </RouterLink>
            </>
          )}
        </div>
        <nav className="navigation-container">
          <ul className="navigation-list">
            <li
              className={`navigation-list_element ${
                window.location.pathname === "/" ? "active" : ""
              }`}
            >
              <Link to="/"> Start</Link>
            </li>

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
            <li className="navigation-list_element">
              <ScrollLink
                to="whoWeHelp"
                spy={true}
                smooth={true}
                offset={15}
                duration={500}
              >
                Fundacja i organizacje
              </ScrollLink>
            </li>
            <li className="navigation-list_element">
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={100}
                duration={500}
              >
                Kontakt
              </ScrollLink>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Navigation;
