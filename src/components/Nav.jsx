import React, { useEffect, useState } from "react";
import "./Nav.css";
import NetflixLogo from "../assets/netflix-logo-png-2562.png";
import avatar from "../assets/Netflix-avatar.png";

function Nav() {
  const [show, Setshow] = useState(false);
  // useEffect(() => {
  //   window.addEventListener("scroll",  () => {
  //     if (window.scrollY > 100) {
  //       Setshow(true);
  //     } else {
  //       Setshow(false);
  //     }
  //   });
  //   return () => {
  //     window.removeEventListener("scroll");
  //   };
  // }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        Setshow(true);
      } else {
        Setshow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={show ? "nav-black" : "Nav-bar"}>
      <img className="Logo" src={NetflixLogo} alt="NETFLIX" />
      <img className="avatar" src={avatar} alt="avatar" />
    </div>
  );
}

export default Nav;
