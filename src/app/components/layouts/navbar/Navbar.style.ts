import styled from 'styled-components';
import Link from 'next/link';

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 70px;
  background-color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  
  top: 0;
  z-index: 1000;
  
`;

export const Logo = styled.div`
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0 15px;
  font-size: 1rem;

  &:hover {
    color: #ff6347;
  }
`;

export const MobileMenuIcon = styled.div`
  display: none;
  color: #fff;
  cursor: pointer;
  

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileNavMenu = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  background-color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  animation: wave 0.7s ease-out;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  z-index: 100;
  

  a {
    color: #fff;
    text-decoration: none;
    margin: 10px 0;
    font-size: 1.6rem;
    
    

    &:hover {
      color: #ff6347;
    }
  }

  @keyframes wave {
    0% {
      transform: translateY(-20%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 20px;
  border-bottom: 25%;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  margin: 0 10px;
  transition: color 0.3s ease;

  &:hover {
    color: #ff6347;
  }
`;
