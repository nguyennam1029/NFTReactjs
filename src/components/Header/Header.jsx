import { React, useRef, useEffect } from "react";

import "../Header/header.css";

import { Container } from "reactstrap";
import { Link, NavLink } from "react-router-dom";

//CÁC MENU ITEM
const NavItemLinks = [
  {
    display: "Home",
    url: "/home",
  },
  {
    display: "Market",
    url: "/market",
  },
  {
    display: "Create",
    url: "/create",
  },
  {
    display: "Contact",
    url: "/Contact",
  },
];
const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 70 ||
        document.documentElement.scrollTop > 70
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("active");
  return (
    <>
      <div className="header" ref={headerRef}>
        <Container>
          <div className="navigation d-flex align-items-center justify-content-between">
            <div className="logo">
              <h2 className="d-flex align-items-center">
                <i class="ri-fire-fill"></i>
                NTFS
              </h2>
            </div>

            <div className="nav__menu" ref={menuRef} onClick={toggleMenu}>
              <ul className="nav__list d-flex align-items-center jus">
                {NavItemLinks.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.url}
                      className={(navClass) =>
                        navClass.isActive ? "active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav__right d-flex align-items-center gap-5">
              <button className="btn">
                <Link
                  to="/Wallet"
                  className="d-flex align-items-center nav__right-link"
                >
                  <i class="ri-wallet-3-fill"></i>
                  Connect Willet
                </Link>
              </button>

              <span className="menu__icon-mobile" onClick={toggleMenu}>
                <i class="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
