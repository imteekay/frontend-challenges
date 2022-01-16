import React from 'react';
import Flex from '../components/Flex';

const Header = () => (
  <header>
    <Flex
      boxShadow="md"
      backgroundColor="white"
      justifyContent="center"
      alignItems="center"
      padding="sm">
      <a href="/" title="Home">
        <img height="30px" src="/HelloFreshLogo.png" alt="HelloFresh Logo" />
      </a>
    </Flex>
  </header>
);

export default Header;
