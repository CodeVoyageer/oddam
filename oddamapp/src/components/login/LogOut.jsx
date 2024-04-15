import { React } from "react";
import Navigation from "../Home/Navigation";
import Decoration from "../../assets/Decoration.svg";
import "../../scss/loginStyle/logOut.scss";
import { Link as RouterLink } from "react-router-dom";
const LogOut = () => {
  return (
    <>
      <Navigation />
      <section className="logOut-block">
        <p className="logOut_text">Wylogowanie nastąpiło pomyślnie!</p>
        <img src={Decoration} alt="decoration" />
        <RouterLink to="/">
          <button className="logOut_btn">Strona główna</button>
        </RouterLink>
      </section>
    </>
  );
};

export default LogOut;
