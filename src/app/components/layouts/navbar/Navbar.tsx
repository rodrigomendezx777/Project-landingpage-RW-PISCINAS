"use client";
import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaInstagram, FaFacebook, FaWhatsapp, FaTiktok } from "react-icons/fa";
import {
  NavbarContainer,
  Logo,
  NavMenu,
  NavItem,
  MobileMenuIcon,
  MobileNavMenu,
  SocialIcons,
  SocialIconLink,
} from "./Navbar.style";
import ButtonContact from "../ButtonContact/ButtonContact";

const Navbar: React.FC = () => {
  const [$isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Estado para controlar a visibilidade da navbar
  const [lastScrollY, setLastScrollY] = useState(0); // Guarda a posição do último scroll

  const toggleMenu = () => {
    setIsOpen(!$isOpen);
  };

  // Lógica para esconder a navbar ao rolar para baixo e mostrar ao rolar para cima
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Rolando para baixo
        setIsVisible(false);
      } else {
        // Rolando para cima
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Fechar o menu quando a tela for redimensionada para um tamanho maior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <NavbarContainer isVisible={isVisible}>
      <Logo>
        <a href="/">
          <img src="/images/Logo/logo_rw.png" alt="Logo RW Piscinas" />
        </a>
      </Logo>
      <NavMenu>
        <NavItem href="/modelos">MODELOS</NavItem>
        <NavItem href="/About">SOBRE</NavItem>
        <NavItem href="/Servicos">SERVIÇOS</NavItem>
        <ButtonContact />
      </NavMenu>
      <MobileMenuIcon onClick={toggleMenu}>
        {$isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </MobileMenuIcon>

      {$isOpen && (
        <MobileNavMenu>
          <NavItem href="/">Home</NavItem>
          <NavItem href="/About">Sobre</NavItem>
          <NavItem href="/services">Serviços</NavItem>
          <NavItem href="https://linktr.ee/RWPISCINAS" target="_blank" >Contatos</NavItem>
          <SocialIcons>
            <SocialIconLink
              href="https://www.instagram.com/rwpiscinas_nova_iguacu/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram size={30} />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.facebook.com/profile.php?id=61559387644228"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook size={30} />
            </SocialIconLink>
            <SocialIconLink
              href="https://wa.me/5521964290604"
              target="_blank"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={30} />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.tiktok.com"
              target="_blank"
              aria-label="TikTok"
            >
              <FaTiktok size={30} />
            </SocialIconLink>
          </SocialIcons>
        </MobileNavMenu>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
