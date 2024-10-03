"use client"
import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaInstagram, FaFacebook, FaWhatsapp, FaTiktok } from 'react-icons/fa';
import {
  NavbarContainer,
  Logo,
  NavMenu,
  NavItem,
  MobileMenuIcon,
  MobileNavMenu,
  SocialIcons,
  SocialIconLink,
} from './Navbar.style';

const Navbar: React.FC = () => {
  const [$isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!$isOpen);
  };

  // Fechar o menu quando a tela for redimensionada para um tamanho maior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <NavbarContainer>
      <Logo> 
        <a href="/">
          <img src="/images/Logo/logo_rw.png" alt="Logo RW Piscinas" />
        </a>
      </Logo>
      <NavMenu>
        <NavItem href="/modelos">Modelos</NavItem>
        <NavItem href="/About">Sobre</NavItem>
        <NavItem href="/Servicos">Serviços</NavItem>
        <NavItem href="/Contact">Contato</NavItem>
      </NavMenu>
      <MobileMenuIcon onClick={toggleMenu}>
        {$isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </MobileMenuIcon>

      {$isOpen && (
        <MobileNavMenu>
          <NavItem href="/">Home</NavItem>
          <NavItem href="/About">Sobre</NavItem>
          <NavItem href="/services">Serviços</NavItem>
          <NavItem href="/Contact">Contato</NavItem>
          <SocialIcons>
            <SocialIconLink href="https://www.instagram.com" target="_blank" aria-label="Instagram">
              <FaInstagram size={30} />
            </SocialIconLink>
            <SocialIconLink href="https://www.facebook.com" target="_blank" aria-label="Facebook">
              <FaFacebook size={30} />
            </SocialIconLink>
            <SocialIconLink href="https://wa.me/" target="_blank" aria-label="WhatsApp">
              <FaWhatsapp size={30} />
            </SocialIconLink>
            <SocialIconLink href="https://www.tiktok.com" target="_blank" aria-label="TikTok">
              <FaTiktok size={30} />
            </SocialIconLink>
          </SocialIcons>
        </MobileNavMenu>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
