import React from 'react'
import styled from 'styled-components/native';
import colors from '../../config/colors';

const NavbarContainer = styled.View`
  height: 70px;
  background-color: ${colors.blue};
  width: 100%;
  justify-content: center;
`;
const NavbarTitle = styled.Text`
  font-size: 30px;
  text-align: left;
  margin-left: 10px;
  color: white;
  font-weight: bold
`;

/**
 * The Navbar component which displays the app header
 */
const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <NavbarTitle>NYT News Feed</NavbarTitle>
    </NavbarContainer>
  );
};

export default Navbar;
