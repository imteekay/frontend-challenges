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
        Logo
      </a>
    </Flex>
  </header>
);

export default Header;
